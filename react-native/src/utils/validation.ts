export type SignUpForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function validateSignUpForm(form: SignUpForm): string {
  if (!form.fullName.trim()) {
    return 'Full name is required.';
  }

  if (!form.email.includes('@')) {
    return 'Enter a valid email address.';
  }

  if (form.password.length < 6) {
    return 'Password must be at least 6 characters.';
  }

  if (form.password !== form.confirmPassword) {
    return 'Passwords do not match.';
  }

  return 'Account ready to create.';
}