import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders greeting, overview and appointment details', () => {
    render(<HomeScreen />);

    expect(screen.getByText('Hello, Sarah!')).toBeInTheDocument();
    expect(screen.getByText("Today's Overview")).toBeInTheDocument();
    expect(screen.getByText(/Hearing Check-Up/)).toBeInTheDocument();
    expect(screen.getAllByText('Alerts')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Messages')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Appointments')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Profile')[0]).toBeInTheDocument();
  });

  test('clicking view details triggers alert', () => {
    render(<HomeScreen />);
    const btn = screen.getByText('View Details');
    fireEvent.click(btn);
    expect(alertSpy).toHaveBeenCalledWith('View Details');
  });

  test('quick access buttons trigger alerts with labels', () => {
    render(<HomeScreen />);
    fireEvent.click(screen.getAllByRole('button', { name: /Messages/ })[0]);
    expect(alertSpy).toHaveBeenCalledWith('Messages');

    fireEvent.click(screen.getByRole('button', { name: /Alerts & Reminders/ }));
    expect(alertSpy).toHaveBeenCalledWith('Alerts & Reminders');
  });
});
