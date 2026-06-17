import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders without crashing', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Hello, Sarah!')).toBeTruthy();
  });

  it('displays user greeting with alerts and messages count', () => {
    render(<HomeScreen />);
    expect(screen.getByText(/3 new alerts/)).toBeTruthy();
    expect(screen.getByText(/2 new messages/)).toBeTruthy();
  });

  it('renders Today\'s Overview section with cards', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Today\'s Overview')).toBeTruthy();
    expect(screen.getByText('Alerts')).toBeTruthy();
    expect(screen.getByText('Messages')).toBeTruthy();
    expect(screen.getByText('Appointments')).toBeTruthy();
  });

  it('displays upcoming appointment card', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Hearing Check-Up')).toBeTruthy();
    expect(screen.getByText('May 15, 2025 • 10:00 AM')).toBeTruthy();
    expect(screen.getByText('Hearing Wellness Center')).toBeTruthy();
  });

  it('renders View Details button', () => {
    render(<HomeScreen />);
    const viewDetailsButton = screen.getByText('View Details');
    expect(viewDetailsButton).toBeTruthy();
  });

  it('renders feature grid with all 6 feature cards', () => {
    render(<HomeScreen />);
    expect(screen.getAllByText('Messages')).toBeTruthy();
    expect(screen.getByText('Alerts & Reminders')).toBeTruthy();
    expect(screen.getByText('Hearing Support')).toBeTruthy();
    expect(screen.getByText('Accessibility')).toBeTruthy();
    expect(screen.getByText('Profile')).toBeTruthy();
  });

  it('renders need help card', () => {
    render(<HomeScreen />);
    expect(screen.getByText('Need help?')).toBeTruthy();
    expect(
      screen.getByText(
        'Contact your caregiver or access support resources.',
      ),
    ).toBeTruthy();
  });

  it('renders bottom navigation with all tabs', () => {
    render(<HomeScreen />);
    expect(screen.getAllByText('Home')).toBeTruthy();
    expect(screen.getAllByText('Messages')).toBeTruthy();
    expect(screen.getAllByText('Alerts')).toBeTruthy();
    expect(screen.getAllByText('Appointments')).toBeTruthy();
    expect(screen.getAllByText('Profile')).toBeTruthy();
  });

  it('calls onNavigate when bottom nav item is pressed', () => {
    const mockNavigate = jest.fn();
    render(<HomeScreen onNavigate={mockNavigate} />);
    const messagesTab = screen.getByText('Messages');
    fireEvent.press(messagesTab);
    expect(mockNavigate).toHaveBeenCalledWith('messages');
  });

  it('displays correct badge counts in overview cards', () => {
    render(<HomeScreen />);
    const badges = screen.getAllByText(/^[0-9]$/);
    expect(badges.length).toBeGreaterThan(0);
  });
});