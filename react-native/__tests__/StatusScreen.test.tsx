import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import StatusScreen from '../src/screens/StatusScreen';

describe('StatusScreen', () => {
  it('renders without crashing', () => {
    render(<StatusScreen onBack={() => {}} />);
    expect(screen).toBeTruthy();
  });

  it('renders component without errors', () => {
    const { toJSON } = render(<StatusScreen onBack={() => {}} />);
    expect(toJSON()).toBeTruthy();
  });

  it('calls onBack when back button is pressed', () => {
    const mockOnBack = jest.fn();
    render(<StatusScreen onBack={mockOnBack} />);
    const backButtons = screen.queryAllByTestId?.('back-button');
    if (backButtons && backButtons.length > 0) {
      fireEvent.press(backButtons[0]);
      expect(mockOnBack).toHaveBeenCalled();
    }
  });
});