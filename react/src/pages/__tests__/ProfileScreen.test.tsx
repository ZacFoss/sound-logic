import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileScreen from '../ProfileScreen';

describe('ProfileScreen', () => {
  beforeEach(() => vi.clearAllMocks());

  test('renders sidebar navigation', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('CareConnect')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Messages')).toBeInTheDocument();
    expect(screen.getByText('Alerts')).toBeInTheDocument();
    expect(screen.getByText('Appointments')).toBeInTheDocument();
  });

  test('renders page header with My Profile title', () => {
    render(<ProfileScreen />);

    expect(screen.getByRole('heading', { name: /My Profile/i })).toBeInTheDocument();
  });

  test('renders profile info: name, email, and phone', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
    expect(screen.getByText('sarah.johnson@email.com')).toBeInTheDocument();
    expect(screen.getByText('(512) 555-1234')).toBeInTheDocument();
  });

  test('renders avatar image', () => {
    render(<ProfileScreen />);

    const avatar = screen.getByRole('img', { name: 'avatar' });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/80');
  });

  test('Edit Profile button is present', () => {
    render(<ProfileScreen />);
    expect(screen.getByRole('button', { name: 'Edit Profile' })).toBeInTheDocument();
  });

  test('renders Account & Security section with all items', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('Account & Security')).toBeInTheDocument();
    expect(screen.getByText('Account Information')).toBeInTheDocument();
    expect(screen.getByText('Update your personal details')).toBeInTheDocument();
    expect(screen.getByText('Password & Security')).toBeInTheDocument();
    expect(screen.getByText('Change your password and security settings')).toBeInTheDocument();
    expect(screen.getByText('Sign In & Biometrics')).toBeInTheDocument();
    expect(screen.getByText('Manage how you sign in to your account')).toBeInTheDocument();
  });

  test('renders Preferences section with all items', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Notification Preferences')).toBeInTheDocument();
    expect(screen.getByText('Choose how and when you want to be notified')).toBeInTheDocument();
    expect(screen.getByText('Accessibility')).toBeInTheDocument();
    expect(screen.getByText('Customize text size, contrast, and more')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Choose your preferred language (English)')).toBeInTheDocument();
  });

  test('renders Support & Resources section with all items', () => {
    render(<ProfileScreen />);

    expect(screen.getByText('Support & Resources')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();
    expect(screen.getByText('Get help and find answers')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
    expect(screen.getByText('Sign out of your account')).toBeInTheDocument();
  });

  test('notification bell is rendered', () => {
    render(<ProfileScreen />);
    expect(screen.getByText('🔔')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
