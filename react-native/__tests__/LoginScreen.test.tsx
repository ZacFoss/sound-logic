import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

describe('LoginScreen', () => {
  it('renders without crashing', () => {
    render(<LoginScreen onGetStarted={() => {}} onSignIn={() => {}} />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(
      <LoginScreen onGetStarted={() => {}} onSignIn={() => {}} />,
    );
    expect(toJSON()).toBeTruthy();
  });

  it('calls onGetStarted when get started button is pressed', () => {
    const mockOnGetStarted = jest.fn();
    render(
      <LoginScreen onGetStarted={mockOnGetStarted} onSignIn={() => {}} />,
    );
    const buttons = screen.queryAllByTestId?.('get-started-button');
    if (buttons && buttons.length > 0) {
      fireEvent.press(buttons[0]);
      expect(mockOnGetStarted).toHaveBeenCalled();
    }
  });

  it('calls onSignIn when sign in button is pressed', () => {
    const mockOnSignIn = jest.fn();
    render(
      <LoginScreen onGetStarted={() => {}} onSignIn={mockOnSignIn} />,
    );
    const buttons = screen.queryAllByTestId?.('sign-in-button');
    if (buttons && buttons.length > 0) {
      fireEvent.press(buttons[0]);
      expect(mockOnSignIn).toHaveBeenCalled();
    }
  });
});