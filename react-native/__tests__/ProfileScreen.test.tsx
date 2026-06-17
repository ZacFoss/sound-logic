import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ProfileScreen from '../src/screens/profile_screen';

describe('ProfileScreen', () => {
  it('renders without crashing', () => {
    render(<ProfileScreen />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(<ProfileScreen />);
    expect(toJSON()).toBeTruthy();
  });
});