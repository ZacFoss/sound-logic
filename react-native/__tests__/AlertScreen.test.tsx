import React from 'react';
import { render, screen } from '@testing-library/react-native';
import AlertScreen from '../src/screens/alert_screen';

describe('AlertScreen', () => {
  it('renders without crashing', () => {
    render(<AlertScreen />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(<AlertScreen />);
    expect(toJSON()).toBeTruthy();
  });
});