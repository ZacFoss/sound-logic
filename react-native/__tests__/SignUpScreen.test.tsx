import React from 'react';
import renderer, {act} from 'react-test-renderer';
import SignUpScreen from '../src/screens/SignUpScreen';

describe('SignUpScreen', () => {
  it('renders the sign up screen', async () => {
    let tree: renderer.ReactTestRenderer;

    await act(async () => {
      tree = renderer.create(<SignUpScreen onBack={jest.fn()} />);
    });

    expect(tree!.toJSON()).toBeTruthy();
  });
});