import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AlertScreen from '../AlertScreen';

describe('AlertScreen', () => {
  beforeEach(() => vi.clearAllMocks());

  test('renders sidebar navigation and header', () => {
    render(<AlertScreen />);

    expect(screen.getByText('CareConnect')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Alerts & Reminders/i })).toBeInTheDocument();
    expect(screen.getByText(/Stay informed and never miss what matters/i)).toBeInTheDocument();
    expect(screen.getByText('Manage your alert preferences')).toBeInTheDocument();
  });

  test('renders all initial alerts with unread badge count', () => {
    render(<AlertScreen />);

    expect(screen.getByText('Hearing Check-Up Tomorrow')).toBeInTheDocument();
    expect(screen.getByText('New Message from Amy')).toBeInTheDocument();
    expect(screen.getByText('Take your medication')).toBeInTheDocument();
    expect(screen.getByText('2 unread')).toBeInTheDocument();
  });

  test('renders alert details including type, description, and appointment info', () => {
    render(<AlertScreen />);

    expect(screen.getByText('Reminder')).toBeInTheDocument();
    expect(screen.getByText('You have an appointment tomorrow.')).toBeInTheDocument();
    expect(screen.getByText('May 15, 2025 | 10:00 AM | Hearing Wellness Center')).toBeInTheDocument();
    expect(screen.getByText('Medication Reminder')).toBeInTheDocument();
  });

  test('filter buttons are all rendered', () => {
    render(<AlertScreen />);

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Unread/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reminders' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Updates' })).toBeInTheDocument();
  });

  test('Unread filter shows only unread alerts', () => {
    render(<AlertScreen />);

    fireEvent.click(screen.getByRole('button', { name: /Unread/ }));

    expect(screen.getByText('Hearing Check-Up Tomorrow')).toBeInTheDocument();
    expect(screen.getByText('New Message from Amy')).toBeInTheDocument();
    expect(screen.queryByText('Take your medication')).not.toBeInTheDocument();
  });

  test('Reminders filter shows only reminder-category alerts', () => {
    render(<AlertScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Reminders' }));

    expect(screen.getByText('Hearing Check-Up Tomorrow')).toBeInTheDocument();
    expect(screen.getByText('Take your medication')).toBeInTheDocument();
    expect(screen.queryByText('New Message from Amy')).not.toBeInTheDocument();
  });

  test('Updates filter shows only update-category alerts', () => {
    render(<AlertScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Updates' }));

    expect(screen.getByText('New Message from Amy')).toBeInTheDocument();
    expect(screen.queryByText('Hearing Check-Up Tomorrow')).not.toBeInTheDocument();
    expect(screen.queryByText('Take your medication')).not.toBeInTheDocument();
  });

  test('All filter restores full list after switching away', () => {
    render(<AlertScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Updates' }));
    fireEvent.click(screen.getByRole('button', { name: 'All' }));

    expect(screen.getByText('Hearing Check-Up Tomorrow')).toBeInTheDocument();
    expect(screen.getByText('New Message from Amy')).toBeInTheDocument();
    expect(screen.getByText('Take your medication')).toBeInTheDocument();
  });

  test('Mark as read button is present on unread alerts and absent on read ones', () => {
    render(<AlertScreen />);

    const markReadButtons = screen.getAllByRole('button', { name: 'Mark as read' });
    expect(markReadButtons).toHaveLength(2);
  });

  test('marking an alert as read removes its Mark as read button and updates count', () => {
    render(<AlertScreen />);

    const markReadBtns = screen.getAllByRole('button', { name: 'Mark as read' });
    fireEvent.click(markReadBtns[0]);

    expect(screen.getAllByRole('button', { name: 'Mark as read' })).toHaveLength(1);
    expect(screen.getByText('1 unread')).toBeInTheDocument();
  });

  test('marking all alerts as read shows 0 unread and empty state on Unread filter', () => {
    render(<AlertScreen />);

    const markReadBtns = screen.getAllByRole('button', { name: 'Mark as read' });
    fireEvent.click(markReadBtns[0]);
    fireEvent.click(screen.getAllByRole('button', { name: 'Mark as read' })[0]);

    expect(screen.getByText('0 unread')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Unread/ }));
    expect(screen.getByText('No alerts match your current filter.')).toBeInTheDocument();
  });

  test('section title "Today" is rendered', () => {
    render(<AlertScreen />);
    expect(screen.getByText('Today')).toBeInTheDocument();
  });
});
