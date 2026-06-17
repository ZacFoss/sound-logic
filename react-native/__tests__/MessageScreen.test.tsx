import React from 'react';
import { render, screen } from '@testing-library/react-native';
import MessageScreen from '../src/screens/message_screen';

describe('MessageScreen', () => {
  it('renders without crashing', () => {
    render(<MessageScreen />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(<MessageScreen />);
    expect(toJSON()).toBeTruthy();
  });
});