import 'package:flutter/material.dart';

class StatusScreen extends StatelessWidget {
  const StatusScreen({super.key});

  static const background = Color(0xFFF7FFFC);
  static const primaryGreen = Color(0xFF0F766E);
  static const softMint = Color(0xFFEAF7F4);
  static const darkText = Color(0xFF111827);
  static const grayText = Color(0xFF4B5563);
  static const borderGreen = Color(0xFF2BBFA5);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
          child: Column(
            children: const [
              _LogoHeader(),
              SizedBox(height: 44),
              Text(
                'Welcome to CareConnect!',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 32,
                  fontWeight: FontWeight.w900,
                  color: primaryGreen,
                ),
              ),
              SizedBox(height: 14),
              Text(
                'How are you using CareConnect right now?',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 19,
                  color: darkText,
                ),
              ),
              SizedBox(height: 18),
              Text(
                'Your choice is remembered. You can switch at\nany time from inside the app.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16,
                  height: 1.4,
                  color: grayText,
                ),
              ),
              SizedBox(height: 40),
              _RoleCard(
                icon: Icons.forum_outlined,
                title: 'I am the Receiver',
                description:
                    'I want tools to help me communicate, get alerts, manage appointments, and stay connected.',
                badgeIcon: Icons.hearing,
                badgeText: 'Designed for people with hearing loss',
              ),
              SizedBox(height: 28),
              _RoleCard(
                icon: Icons.diversity_3_outlined,
                title: 'I am the Caregiver',
                description:
                    'I want to support my loved one, manage their care, and stay informed.',
                badgeIcon: Icons.verified_user_outlined,
                badgeText: 'Tools to help you provide better care',
              ),
              SizedBox(height: 34),
              _PrivacyNotice(),
              SizedBox(height: 24),
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
    return Column(
      children: [
        Container(
          width: 62,
          height: 62,
          decoration: BoxDecoration(
            color: StatusScreen.primaryGreen,
            borderRadius: BorderRadius.circular(16),
          ),
          child: const Center(
            child: Text(
              'CC',
              style: TextStyle(
                color: Colors.white,
                fontSize: 30,
                fontWeight: FontWeight.w900,
              ),
            ),
          ),
        ),
        const SizedBox(height: 12),
        const Text(
          'CareConnect',
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: StatusScreen.primaryGreen,
          ),
        ),
      ],
    );
  }
}

class _RoleCard extends StatelessWidget {
  const _RoleCard({
    required this.icon,
    required this.title,
    required this.description,
    required this.badgeIcon,
    required this.badgeText,
  });

  final IconData icon;
  final String title;
  final String description;
  final IconData badgeIcon;
  final String badgeText;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: '$title. $description. $badgeText',
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: StatusScreen.borderGreen,
            width: 1.4,
          ),
        ),
        child: Column(
          children: [
            Row(
              children: [
                CircleAvatar(
                  radius: 48,
                  backgroundColor: StatusScreen.softMint,
                  child: Icon(
                    icon,
                    color: StatusScreen.primaryGreen,
                    size: 46,
                  ),
                ),
                const SizedBox(width: 22),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: const TextStyle(
                          fontSize: 23,
                          fontWeight: FontWeight.w900,
                          color: StatusScreen.primaryGreen,
                        ),
                      ),
                      const SizedBox(height: 14),
                      Text(
                        description,
                        style: const TextStyle(
                          fontSize: 16,
                          height: 1.45,
                          color: StatusScreen.darkText,
                        ),
                      ),
                    ],
                  ),
                ),
                const Icon(
                  Icons.chevron_right,
                  color: StatusScreen.primaryGreen,
                  size: 36,
                ),
              ],
            ),
            const SizedBox(height: 24),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: StatusScreen.softMint,
                borderRadius: BorderRadius.circular(24),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    badgeIcon,
                    color: StatusScreen.primaryGreen,
                    size: 22,
                  ),
                  const SizedBox(width: 8),
                  Flexible(
                    child: Text(
                      badgeText,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: StatusScreen.primaryGreen,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PrivacyNotice extends StatelessWidget {
  const _PrivacyNotice();

  @override
  Widget build(BuildContext context) {
    return const Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        CircleAvatar(
          radius: 28,
          backgroundColor: StatusScreen.softMint,
          child: Icon(
            Icons.lock_outline,
            color: StatusScreen.primaryGreen,
            size: 28,
          ),
        ),
        SizedBox(width: 16),
        Expanded(
          child: Text(
            'This does not affect what information is stored — only which view you see first.',
            style: TextStyle(
              fontSize: 16,
              height: 1.45,
              color: StatusScreen.grayText,
            ),
          ),
        ),
      ],
    );
  }
}