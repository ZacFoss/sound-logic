import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import AccessibilityScreen from '../AccessibilityScreen';

const LS_KEY = 'cc_accessibility_settings';

describe('AccessibilityScreen', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    // mock alert so clicks don't show real dialogs
    // @ts-ignore
    window.alert = vi.fn();
  });

  test('renders headings and controls with default state', () => {
    render(<AccessibilityScreen />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Accessibility/i })).toBeInTheDocument();

    const select = screen.getByLabelText('Text size') as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.value).toBe('Medium');

    const highContrast = screen.getByRole('checkbox', { name: /High Contrast/i }) as HTMLInputElement;
    expect(highContrast.checked).toBe(true);

    const darkMode = screen.getByRole('checkbox', { name: /Dark Mode/i }) as HTMLInputElement;
    expect(darkMode.checked).toBe(false);
  });

  test('changing a control updates localStorage and state', () => {
    const spy = vi.spyOn(Storage.prototype, 'setItem');
    render(<AccessibilityScreen />);

    const highContrast = screen.getByRole('checkbox', { name: /High Contrast/i }) as HTMLInputElement;
    // toggle off
    fireEvent.click(highContrast);
    expect(highContrast.checked).toBe(false);

    // effect writes to localStorage; check setItem was called
    expect(spy).toHaveBeenCalled();
    // ensure localStorage holds a JSON with the key
    const raw = localStorage.getItem(LS_KEY);
    expect(raw).toBeTruthy();
    const parsed = raw ? JSON.parse(raw) : null;
    expect(parsed).toHaveProperty('highContrast', false);
  });

  test('Contact Support button triggers alert', () => {
    render(<AccessibilityScreen />);
    const btn = screen.getByRole('button', { name: /Contact Support/i });
    fireEvent.click(btn);
    // @ts-ignore
    expect(window.alert).toHaveBeenCalledWith('Contacting support...');
  });
});
