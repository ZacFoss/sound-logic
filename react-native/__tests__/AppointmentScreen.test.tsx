import React from 'react';
import { render, screen } from '@testing-library/react-native';
import AppointmentScreen from '../src/screens/appointment_screen';

describe('AppointmentScreen', () => {
  it('renders without crashing', () => {
    render(<AppointmentScreen />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(<AppointmentScreen />);
    expect(toJSON()).toBeTruthy();
  });
});