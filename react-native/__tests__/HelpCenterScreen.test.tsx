import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HelpCenterScreen from '../src/screens/HelpCenterScreen';

describe('HelpCenterScreen', () => {
  it('renders without crashing', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Help Center')).toBeTruthy();
  });

  it('displays help center title and subtitle', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Help Center')).toBeTruthy();
    expect(
      screen.getByText('Find answers and get the support you need.'),
    ).toBeTruthy();
  });

  it('renders search bar', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByPlaceholderText('How can we help you?')).toBeTruthy();
  });

  it('displays all quick link buttons', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('FAQs')).toBeTruthy();
    expect(screen.getByText('Video Guides')).toBeTruthy();
    expect(screen.getByText('User Guides')).toBeTruthy();
    expect(screen.getByText('Tips & Tricks')).toBeTruthy();
    expect(screen.getByText('Contact Support')).toBeTruthy();
  });

  it('renders Popular Topics section', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Popular Topics')).toBeTruthy();
    expect(screen.getByText('Managing Appointments')).toBeTruthy();
    expect(screen.getByText('Alerts & Notifications')).toBeTruthy();
    expect(screen.getByText('Messaging')).toBeTruthy();
    expect(screen.getByText('Account & Profile')).toBeTruthy();
  });

  it('renders Still need help support card', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Still need help?')).toBeTruthy();
    expect(
      screen.getByText('Our support team is here for you.'),
    ).toBeTruthy();
  });

  it('displays contact information', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Call us: (512) 555-CARE (2273)')).toBeTruthy();
    expect(
      screen.getByText('Email us: support@careconnect.com'),
    ).toBeTruthy();
  });

  it('renders Chat with Us button', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Chat with Us')).toBeTruthy();
  });

  it('displays contact hours', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Hours: Mon-Fri, 8am-8pm CT')).toBeTruthy();
  });

  it('renders Featured Articles section', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Featured Articles')).toBeTruthy();
    expect(screen.getByText('How to set up notifications')).toBeTruthy();
    expect(screen.getByText('Joining a video appointment')).toBeTruthy();
    expect(screen.getByText('Managing your hearing devices')).toBeTruthy();
  });

  it('renders bottom navigation', () => {
    render(<HelpCenterScreen />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getAllByText('Messages')).toBeTruthy();
    expect(screen.getAllByText('Alerts')).toBeTruthy();
    expect(screen.getAllByText('Appointments')).toBeTruthy();
    expect(screen.getAllByText('Profile')).toBeTruthy();
  });
});