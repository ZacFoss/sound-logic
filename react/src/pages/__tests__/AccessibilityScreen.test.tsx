import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityScreen from '../AccessibilityScreen';

const LS_KEY = 'cc_accessibility_settings';

describe('AccessibilityScreen', () => {
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  test('renders with default settings and toggles update localStorage', () => {
    render(<AccessibilityScreen />);

    expect(screen.getByRole('heading', { name: /Accessibility/i })).toBeInTheDocument();

    // Check default checkbox states
    const highContrast = screen.getByLabelText(/High Contrast/i).closest('label')?.querySelector('input');
    const darkMode = screen.getByLabelText(/Dark Mode/i).closest('label')?.querySelector('input');
    const colorEnhancement = screen.getByLabelText(/Color Enhancement/i).closest('label')?.querySelector('input');
    const voiceMessages = screen.getByLabelText(/Voice Messages/i).closest('label')?.querySelector('input');

    expect(highContrast).toBeChecked();
    expect(darkMode).not.toBeChecked();
    expect(colorEnhancement).toBeChecked();
    expect(voiceMessages).toBeChecked();

    // Change text size
    const select = screen.getByLabelText('Text size') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'Large' } });
    const stored = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    expect(stored.textSize).toBe('Large');

    // Toggle dark mode
    fireEvent.click(darkMode!);
    const stored2 = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    expect(stored2.darkMode).toBe(true);

    // Contact support button triggers alert
    const contact = screen.getByText(/Contact Support/i);
    fireEvent.click(contact);
    expect(alertSpy).toHaveBeenCalledWith('Contacting support...');
  });

  test('handles malformed localStorage gracefully and falls back to defaults', () => {
    localStorage.setItem(LS_KEY, 'not-json');
    render(<AccessibilityScreen />);

    expect(screen.getByLabelText(/Text size/i)).toHaveValue('Medium');
    const highContrast = screen.getByLabelText(/High Contrast/i).closest('label')?.querySelector('input');
    expect(highContrast).toBeChecked();
  });
});
