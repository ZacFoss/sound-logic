import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders greeting, overview and appointment details', () => {
    render(<HomeScreen />);

    expect(screen.getByText('Hello, Sarah!')).toBeInTheDocument();
    expect(screen.getByText("Today's Overview")).toBeInTheDocument();
    expect(screen.getByText(/Hearing Check-Up/)).toBeInTheDocument();
    expect(screen.getByText('Alerts')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Appointments')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('clicking view details triggers alert', () => {
    render(<HomeScreen />);
    const btn = screen.getByText('View Details');
    fireEvent.click(btn);
    expect(alertSpy).toHaveBeenCalledWith('View Details');
  });

  test('quick access buttons trigger alerts with labels', () => {
    render(<HomeScreen />);
    const messages = screen.getAllByText('Messages')[0];
    fireEvent.click(messages);
    expect(alertSpy).toHaveBeenCalledWith('Messages');

    const alerts = screen.getAllByText('Alerts & Reminders')[0];
    fireEvent.click(alerts);
    expect(alertSpy).toHaveBeenCalledWith('Alerts & Reminders');
  });
});
