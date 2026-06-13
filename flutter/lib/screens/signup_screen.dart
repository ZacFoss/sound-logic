import 'package:flutter/material.dart';

class SignupScreen extends StatelessWidget {
  const SignupScreen({super.key});

  static const background = Color(0xFFF7FFFC);
  static const primaryGreen = Color(0xFF0F766E);
  static const softMint = Color(0xFFEAF7F4);
  static const darkText = Color(0xFF111827);
  static const grayText = Color(0xFF4B5563);
  static const borderGray = Color(0xFFD1D5DB);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      body: SafeArea(
        child: SingleChildScrollView(
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              IconButton(
                tooltip: 'Back',
                onPressed: () {},
                icon: const Icon(Icons.arrow_back),
                color: primaryGreen,
              ),

              const Center(child: _LogoHeader()),

              const SizedBox(height: 22),

              const Center(
                child: Text(
                  'Create your account',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.w900,
                    color: primaryGreen,
                  ),
                ),
              ),

              const SizedBox(height: 6),

              const Center(
                child: Text(
                  'Free, private, and takes less than two minutes.',
                  style: TextStyle(
                    fontSize: 15,
                    color: darkText,
                  ),
                ),
              ),

              const SizedBox(height: 28),

              const _InputLabel('Full Name'),
              const SizedBox(height: 8),
              const _AppTextField(
                hintText: 'e.g. Joyce Smith',
                icon: Icons.person_outline,
                isFocused: true,
              ),

              const SizedBox(height: 18),

              const _InputLabel('Email Address'),
              const SizedBox(height: 8),
              const _AppTextField(
                hintText: 'you@example.com',
                icon: Icons.email_outlined,
              ),

              const SizedBox(height: 18),

              const _InputLabel('Password'),
              const SizedBox(height: 8),
              const _AppTextField(
                hintText: 'At least 6 characters',
                icon: Icons.lock_outline,
                obscureText: true,
                suffixIcon: Icons.visibility_outlined,
              ),

              const SizedBox(height: 18),

              const _InputLabel('Confirm Password'),
              const SizedBox(height: 8),
              const _AppTextField(
                hintText: 'Confirm your password',
                icon: Icons.lock_outline,
                obscureText: true,
                suffixIcon: Icons.visibility_outlined,
              ),

              const SizedBox(height: 26),

              const Text(
                'Accessibility Preferences',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: darkText,
                ),
              ),
              const SizedBox(height: 4),
              const Text(
                'Tell us how you communicate best.',
                style: TextStyle(
                  fontSize: 14,
                  color: darkText,
                ),
              ),

              const SizedBox(height: 18),

              const Text(
                'Preferred Communication Method',
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                  color: darkText,
                ),
              ),

              const SizedBox(height: 10),

              const Row(
                children: [
                  Expanded(
                    child: _ChoiceCard(
                      icon: Icons.chat_bubble,
                      title: 'Text',
                      subtitle: '(Preferred)',
                      selected: true,
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: _ChoiceCard(
                      icon: Icons.visibility_outlined,
                      title: 'Visual\nAlerts',
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: _ChoiceCard(
                      icon: Icons.phone_android,
                      title: 'Vibration\nAlerts',
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 22),

              const Row(
                children: [
                  Text(
                    'Hearing Support Level',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                      color: darkText,
                    ),
                  ),
                  SizedBox(width: 6),
                  Icon(
                    Icons.info_outline,
                    color: primaryGreen,
                    size: 18,
                  ),
                ],
              ),

              const SizedBox(height: 10),

              const Row(
                children: [
                  Expanded(
                    child: _HearingLevelCard(
                      title: 'Mild',
                      selected: false,
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: _HearingLevelCard(
                      title: 'Moderate',
                      selected: true,
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: _HearingLevelCard(
                      title: 'Severe',
                      selected: false,
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: _HearingLevelCard(
                      title: 'Profound',
                      selected: false,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 24),

              SizedBox(
                width: double.infinity,
                height: 58,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.person_add_alt_1),
                  label: const Text(
                    'Create Account',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: primaryGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                    elevation: 4,
                  ),
                ),
              ),

              const SizedBox(height: 26),

              const Divider(),

              const SizedBox(height: 14),

              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    'Already have an account? ',
                    style: TextStyle(
                      fontSize: 15,
                      color: darkText,
                    ),
                  ),
                  GestureDetector(
                    onTap: () {},
                    child: const Text(
                      'Sign In',
                      style: TextStyle(
                        fontSize: 15,
                        color: primaryGreen,
                        fontWeight: FontWeight.bold,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 24),

              const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.lock, color: primaryGreen, size: 17),
                  SizedBox(width: 8),
                  Text(
                    'Your privacy is important.',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.bold,
                      color: grayText,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 4),

              const Center(
                child: Text(
                  'Your information is secure and never shared.',
                  style: TextStyle(
                    fontSize: 13,
                    color: grayText,
                  ),
                ),
              ),

              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}

class _LogoHeader extends StatelessWidget {
  const _LogoHeader();

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 42,
          height: 42,
          decoration: BoxDecoration(
            color: SignupScreen.primaryGreen,
            borderRadius: BorderRadius.circular(10),
          ),
          child: const Center(
            child: Text(
              'CC',
              style: TextStyle(
                color: Colors.white,
                fontSize: 21,
                fontWeight: FontWeight.w900,
              ),
            ),
          ),
        ),
        const SizedBox(width: 10),
        const Text(
          'CareConnect',
          style: TextStyle(
            fontSize: 19,
            fontWeight: FontWeight.bold,
            color: SignupScreen.primaryGreen,
          ),
        ),
      ],
    );
  }
}

class _InputLabel extends StatelessWidget {
  const _InputLabel(this.text);

  final String text;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        fontSize: 15,
        fontWeight: FontWeight.bold,
        color: SignupScreen.darkText,
      ),
    );
  }
}

class _AppTextField extends StatelessWidget {
  const _AppTextField({
    required this.hintText,
    required this.icon,
    this.obscureText = false,
    this.suffixIcon,
    this.isFocused = false,
  });

  final String hintText;
  final IconData icon;
  final bool obscureText;
  final IconData? suffixIcon;
  final bool isFocused;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 54,
      child: TextField(
        obscureText: obscureText,
        decoration: InputDecoration(
          hintText: hintText,
          prefixIcon: Icon(icon, color: SignupScreen.primaryGreen),
          suffixIcon: suffixIcon == null
              ? null
              : Icon(suffixIcon, color: SignupScreen.grayText),
          filled: true,
          fillColor: Colors.white,
          contentPadding: const EdgeInsets.symmetric(horizontal: 14),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(9),
            borderSide: BorderSide(
              color: isFocused
                  ? SignupScreen.primaryGreen
                  : SignupScreen.borderGray,
              width: isFocused ? 1.5 : 1,
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(9),
            borderSide: const BorderSide(
              color: SignupScreen.primaryGreen,
              width: 2,
            ),
          ),
        ),
      ),
    );
  }
}

class _ChoiceCard extends StatelessWidget {
  const _ChoiceCard({
    required this.icon,
    required this.title,
    this.subtitle,
    this.selected = false,
  });

  final IconData icon;
  final String title;
  final String? subtitle;
  final bool selected;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 74,
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: selected ? SignupScreen.softMint : Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: selected
              ? SignupScreen.primaryGreen
              : SignupScreen.borderGray,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, color: SignupScreen.primaryGreen, size: 22),
          const SizedBox(height: 4),
          Text(
            title,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.bold,
              height: 1.05,
              color: SignupScreen.darkText,
            ),
          ),
          if (subtitle != null)
            Text(
              subtitle!,
              style: const TextStyle(
                fontSize: 10,
                color: SignupScreen.primaryGreen,
              ),
            ),
        ],
      ),
    );
  }
}

class _HearingLevelCard extends StatelessWidget {
  const _HearingLevelCard({
    required this.title,
    required this.selected,
  });

  final String title;
  final bool selected;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 78,
      decoration: BoxDecoration(
        color: selected ? SignupScreen.softMint : Colors.white,
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: selected
              ? SignupScreen.primaryGreen
              : SignupScreen.borderGray,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.hearing,
            color: SignupScreen.primaryGreen,
            size: 28,
          ),
          const SizedBox(height: 6),
          Text(
            title,
            style: const TextStyle(
              fontSize: 13,
              fontWeight: FontWeight.bold,
              color: SignupScreen.darkText,
            ),
          ),
        ],
      ),
    );
  }
}