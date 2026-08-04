import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AppointmentScreen from '../AppointmentScreen';

describe('AppointmentScreen', () => {
  beforeEach(() => vi.clearAllMocks());

  test('renders sidebar navigation and header', () => {
    render(<AppointmentScreen />);

    expect(screen.getByText('CareConnect')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Appointments', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/View and manage your upcoming/i)).toBeInTheDocument();
    expect(screen.getByText('Manage your alert preferences')).toBeInTheDocument();
  });

  test('renders upcoming appointments by default', () => {
    render(<AppointmentScreen />);

    expect(screen.getByText('Hearing Check-Up')).toBeInTheDocument();
    expect(screen.getByText('Hearing Aid Follow-Up')).toBeInTheDocument();
    expect(screen.getByText('Upcoming Appointments')).toBeInTheDocument();
  });

  test('shows upcoming count in header badge and tab label', () => {
    render(<AppointmentScreen />);

    expect(screen.getByText('Upcoming: 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Upcoming (2)' })).toBeInTheDocument();
  });

  test('Book Appointment button is present', () => {
    render(<AppointmentScreen />);
    expect(screen.getByRole('button', { name: 'Book Appointment' })).toBeInTheDocument();
  });

  test('upcoming appointment cards show Confirmed status and Add to Calendar', () => {
    render(<AppointmentScreen />);

    const confirmedPills = screen.getAllByText('Confirmed');
    expect(confirmedPills).toHaveLength(2);

    const calendarBtns = screen.getAllByRole('button', { name: 'Add to Calendar' });
    expect(calendarBtns).toHaveLength(2);
  });

  test('switching to Past tab shows past appointments', () => {
    render(<AppointmentScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Past' }));

    expect(screen.getByText('Past Appointments')).toBeInTheDocument();
    expect(screen.getAllByText('Hearing Test')).toHaveLength(2);
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getAllByText('Cancelled').length).toBeGreaterThan(0);
  });

  test('Past tab does not show Add to Calendar buttons', () => {
    render(<AppointmentScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Past' }));

    expect(screen.queryByRole('button', { name: 'Add to Calendar' })).not.toBeInTheDocument();
  });

  test('switching to Cancelled tab shows info box and no appointment cards', () => {
    render(<AppointmentScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancelled' }));

    expect(screen.getByText('Cancelled Appointments')).toBeInTheDocument();
    expect(screen.getByText(/Need to reschedule or cancel\?/i)).toBeInTheDocument();
    expect(screen.queryByText('Hearing Check-Up')).not.toBeInTheDocument();
  });

  test('switching back to Upcoming tab from Cancelled restores appointments', () => {
    render(<AppointmentScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancelled' }));
    fireEvent.click(screen.getByRole('button', { name: 'Upcoming (2)' }));

    expect(screen.getByText('Hearing Check-Up')).toBeInTheDocument();
    expect(screen.queryByText(/Need to reschedule/i)).not.toBeInTheDocument();
  });

  test('appointment details show date, time, and location', () => {
    render(<AppointmentScreen />);

    expect(screen.getByText(/May 15, 2025 • 10:00 AM/)).toBeInTheDocument();
    expect(screen.getAllByText(/Hearing Wellness Center/).length).toBeGreaterThan(0);
  });

  test('empty state shown in Past-like tab when no appointments exist (Cancelled)', () => {
    render(<AppointmentScreen />);

    // Cancelled has no appointments but shows info box instead of empty state
    fireEvent.click(screen.getByRole('button', { name: 'Cancelled' }));
    expect(screen.queryByText('No appointments in this category.')).not.toBeInTheDocument();
    expect(screen.getByText(/Need to reschedule/i)).toBeInTheDocument();
  });

  test('nav items are rendered in sidebar', () => {
    render(<AppointmentScreen />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Alerts')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
