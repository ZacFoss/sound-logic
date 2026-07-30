import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // mock alert so clicks don't show real dialogs
    // @ts-ignore
    window.alert = vi.fn();
  });

  test('renders header, greeting, and overview', () => {
    render(<HomeScreen />);

    expect(screen.getByLabelText('Open navigation menu')).toBeInTheDocument();
    expect(screen.getByText('Hello, Sarah!')).toBeInTheDocument();
    // overview card text
    expect(screen.getAllByText(/3 new/i).length).toBeGreaterThan(0);
  });

  test('View Details button triggers alert', () => {
    render(<HomeScreen />);

    const btn = screen.getByText('View Details');
    fireEvent.click(btn);

    // @ts-ignore
    expect(window.alert).toHaveBeenCalledWith('View Details');
  });
});
