import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageScreen from '../MessageScreen';

describe('MessageScreen', () => {
  beforeEach(() => vi.clearAllMocks());

  test('renders sidebar navigation and header', () => {
    render(<MessageScreen />);

    expect(screen.getByText('CareConnect')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Messages/i })).toBeInTheDocument();
    expect(screen.getByText(/Stay in touch with your caregivers/i)).toBeInTheDocument();
  });

  test('renders all initial messages', () => {
    render(<MessageScreen />);

    expect(screen.getByText('Amy Johnson')).toBeInTheDocument();
    expect(screen.getByText('Dr. Michael Lee')).toBeInTheDocument();
    expect(screen.getByText('Linda Smith')).toBeInTheDocument();
    expect(screen.getByText('CareConnect Support')).toBeInTheDocument();
  });

  test('renders message roles and preview text', () => {
    render(<MessageScreen />);

    expect(screen.getByText('Caregiver')).toBeInTheDocument();
    expect(screen.getByText('Provider')).toBeInTheDocument();
    expect(screen.getAllByText('Family').length).toBeGreaterThan(0);
    expect(screen.getByText(/Hi Sarah! Just a reminder/)).toBeInTheDocument();
  });

  test('New Message button is present', () => {
    render(<MessageScreen />);
    expect(screen.getByRole('button', { name: 'New Message' })).toBeInTheDocument();
  });

  test('search input is rendered and filters messages by name', () => {
    render(<MessageScreen />);

    const input = screen.getByPlaceholderText('Search messages');
    fireEvent.change(input, { target: { value: 'Amy' } });

    expect(screen.getByText('Amy Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Dr. Michael Lee')).not.toBeInTheDocument();
    expect(screen.queryByText('Linda Smith')).not.toBeInTheDocument();
  });

  test('search filters messages by preview text', () => {
    render(<MessageScreen />);

    const input = screen.getByPlaceholderText('Search messages');
    fireEvent.change(input, { target: { value: 'hearing test results' } });

    expect(screen.getByText('Dr. Michael Lee')).toBeInTheDocument();
    expect(screen.queryByText('Amy Johnson')).not.toBeInTheDocument();
  });

  test('empty state appears when search has no matches', () => {
    render(<MessageScreen />);

    const input = screen.getByPlaceholderText('Search messages');
    fireEvent.change(input, { target: { value: 'xyznonexistent' } });

    expect(screen.getByText('No messages match your search or filter.')).toBeInTheDocument();
  });

  test('filter buttons are all rendered', () => {
    render(<MessageScreen />);

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Caregivers' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Providers' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Family' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Unread/ })).toBeInTheDocument();
  });

  test('Caregivers filter shows only caregiver messages', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Caregivers' }));

    expect(screen.getByText('Amy Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Dr. Michael Lee')).not.toBeInTheDocument();
    expect(screen.queryByText('Linda Smith')).not.toBeInTheDocument();
  });

  test('Providers filter shows only provider messages', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Providers' }));

    expect(screen.getByText('Dr. Michael Lee')).toBeInTheDocument();
    expect(screen.queryByText('Amy Johnson')).not.toBeInTheDocument();
  });

  test('Family filter shows only family messages', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Family' }));

    expect(screen.getByText('Linda Smith')).toBeInTheDocument();
    expect(screen.queryByText('Amy Johnson')).not.toBeInTheDocument();
    expect(screen.queryByText('Dr. Michael Lee')).not.toBeInTheDocument();
  });

  test('Unread filter shows only unread messages', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: /Unread/ }));

    expect(screen.getByText('Amy Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Dr. Michael Lee')).not.toBeInTheDocument();
    expect(screen.queryByText('Linda Smith')).not.toBeInTheDocument();
  });

  test('All filter restores full list after switching to another filter', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Family' }));
    fireEvent.click(screen.getByRole('button', { name: 'All' }));

    expect(screen.getByText('Amy Johnson')).toBeInTheDocument();
    expect(screen.getByText('Dr. Michael Lee')).toBeInTheDocument();
    expect(screen.getByText('Linda Smith')).toBeInTheDocument();
  });

  test('accessibility note and Go to Settings button are rendered', () => {
    render(<MessageScreen />);

    expect(screen.getByText(/Need to communicate in a different way/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to Settings' })).toBeInTheDocument();
  });

  test('empty state shown when filter produces no results combined with search', () => {
    render(<MessageScreen />);

    fireEvent.click(screen.getByRole('button', { name: 'Family' }));
    const input = screen.getByPlaceholderText('Search messages');
    fireEvent.change(input, { target: { value: 'Amy' } });

    expect(screen.getByText('No messages match your search or filter.')).toBeInTheDocument();
  });
});
