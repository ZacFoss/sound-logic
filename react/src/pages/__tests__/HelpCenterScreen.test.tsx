import { render, screen, fireEvent } from '@testing-library/react';
import HelpCenterScreen from '../HelpCenterScreen';

describe('HelpCenterScreen', () => {
  it('renders without crashing and displays header', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByRole('heading', { level: 1, name: /help center/i })).toBeDefined();
  });

  it('allows user to type in the search bar', () => {
    render(<HelpCenterScreen />);
    const searchInput = screen.getByPlaceholderText(/how can we help you\?/i);
    fireEvent.change(searchInput, { target: { value: 'appointments' } });
    expect((searchInput as HTMLInputElement).value).toBe('appointments');
  });
});