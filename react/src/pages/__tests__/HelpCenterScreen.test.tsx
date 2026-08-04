import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HelpCenterScreen from '../HelpCenterScreen';

describe('HelpCenterScreen', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

  beforeEach(() => jest.clearAllMocks());

  test('renders header, categories and topics', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByRole('heading', { name: /Help Center/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('How can we help you?')).toBeInTheDocument();

    // Categories present
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Video Guides')).toBeInTheDocument();

    // Click a category
    fireEvent.click(screen.getByText('FAQs'));
    expect(alertSpy).toHaveBeenCalledWith('FAQs');
  });

  test('search filters topics and pressing Enter triggers search alert', () => {
    render(<HelpCenterScreen />);
    const input = screen.getByPlaceholderText('How can we help you?');
    fireEvent.change(input, { target: { value: 'appointments' } });

    // Only matching topic should be visible
    expect(screen.getByText('Managing Appointments')).toBeInTheDocument();
    expect(screen.queryByText('Alerts & Notifications')).not.toBeInTheDocument();

    // Press Enter triggers alert with the query
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(alertSpy).toHaveBeenCalledWith('Search: appointments');
  });

  test('clicking a topic triggers alert with title', () => {
    render(<HelpCenterScreen />);
    const topic = screen.getByText('Managing Appointments');
    fireEvent.click(topic);
    expect(alertSpy).toHaveBeenCalledWith('Managing Appointments');
  });
});
