import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AccessibilityScreen from '../src/screens/AccessibilityScreen';

describe('AccessibilityScreen', () => {
  it('renders without crashing', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Accessibility')).toBeTruthy();
  });

  it('displays accessibility title and subtitle', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Accessibility')).toBeTruthy();
    expect(
      screen.getByText('Customize your experience to meet your needs.'),
    ).toBeTruthy();
  });

  it('renders Display Settings section', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Display Settings')).toBeTruthy();
  });

  it('displays Text Size setting', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Text Size')).toBeTruthy();
    expect(
      screen.getByText('Adjust the size of text throughout the app'),
    ).toBeTruthy();
  });

  it('displays High Contrast toggle', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('High Contrast')).toBeTruthy();
    expect(
      screen.getByText('Increase contrast for better visibility'),
    ).toBeTruthy();
  });

  it('displays Dark Mode toggle', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Dark Mode')).toBeTruthy();
    expect(
      screen.getByText('Reduce eye strain in low light'),
    ).toBeTruthy();
  });

  it('displays Color Enhancement toggle', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Color Enhancement')).toBeTruthy();
    expect(
      screen.getByText('Improve color visibility'),
    ).toBeTruthy();
  });

  it('renders Hearing Support section', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Hearing Support')).toBeTruthy();
    expect(screen.getByText('Live Caption')).toBeTruthy();
    expect(screen.getByText('Visual Alerts')).toBeTruthy();
    expect(screen.getByText('Sound & Vibration Settings')).toBeTruthy();
  });

  it('renders Communication Preferences section', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Communication Preferences')).toBeTruthy();
    expect(screen.getByText('Voice Messages')).toBeTruthy();
    expect(screen.getByText('Sign Language Resources')).toBeTruthy();
    expect(screen.getByText('Hearing Health Tips')).toBeTruthy();
  });

  it('displays support card with Contact Support button', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Need help with accessibility?')).toBeTruthy();
    expect(
      screen.getByText(
        'Contact our support team for personalized assistance.',
      ),
    ).toBeTruthy();
    expect(screen.getByText('Contact Support')).toBeTruthy();
  });

  it('renders bottom navigation with profile active', () => {
    render(<AccessibilityScreen />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getAllByText('Messages')).toBeTruthy();
    expect(screen.getAllByText('Alerts')).toBeTruthy();
    expect(screen.getAllByText('Appointments')).toBeTruthy();
    expect(screen.getAllByText('Profile')).toBeTruthy();
  });
});