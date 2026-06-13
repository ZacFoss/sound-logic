import {validateSignUpForm} from '../src/utils/validation';

describe('validateSignUpForm', () => {
  it('requires a full name', () => {
    expect(
      validateSignUpForm({
        fullName: '',
        email: 'test@email.com',
        password: 'password',
        confirmPassword: 'password',
      }),
    ).toBe('Full name is required.');
  });

  it('requires a valid email', () => {
    expect(
      validateSignUpForm({
        fullName: 'Rashaad Bell',
        email: 'invalid-email',
        password: 'password',
        confirmPassword: 'password',
      }),
    ).toBe('Enter a valid email address.');
  });

  it('requires a password with at least 6 characters', () => {
    expect(
      validateSignUpForm({
        fullName: 'Rashaad Bell',
        email: 'test@email.com',
        password: '123',
        confirmPassword: '123',
      }),
    ).toBe('Password must be at least 6 characters.');
  });

  it('requires matching passwords', () => {
    expect(
      validateSignUpForm({
        fullName: 'Rashaad Bell',
        email: 'test@email.com',
        password: 'password',
        confirmPassword: 'different',
      }),
    ).toBe('Passwords do not match.');
  });

  it('accepts a valid form', () => {
    expect(
      validateSignUpForm({
        fullName: 'Rashaad Bell',
        email: 'test@email.com',
        password: 'password',
        confirmPassword: 'password',
      }),
    ).toBe('Account ready to create.');
  });
});