import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  static const backgroundColor = Color(0xFFEAF7F4);
  static const primaryGreen = Color(0xFF0F766E);
  static const accentGreen = Color(0xFF2BBFA5);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: backgroundColor,
      bottomNavigationBar: BottomNavigationBar(
        selectedItemColor: primaryGreen,
        unselectedItemColor: primaryGreen,
        type: BottomNavigationBarType.fixed,
        currentIndex: 3,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Patient'),
          BottomNavigationBarItem(icon: Icon(Icons.message), label: 'Messages'),
          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
        ],
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  IconButton(
                    tooltip: 'Back',
                    onPressed: () {},
                    icon: const Icon(Icons.arrow_back),
                    color: primaryGreen,
                  ),
                  const SizedBox(width: 8),
                  const Text(
                    'Settings',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: primaryGreen,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 28),
              Center(
                child: Column(
                  children: const [
                    CircleAvatar(
                      radius: 48,
                      backgroundColor: accentGreen,
                      child: Icon(
                        Icons.person,
                        size: 54,
                        color: Colors.white,
                      ),
                    ),
                    SizedBox(height: 12),
                    Text(
                      'Care Giver',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: primaryGreen,
                      ),
                    ),
                    SizedBox(height: 4),
                    Text(
                      'caregiver@careconnect.com',
                      style: TextStyle(
                        fontSize: 15,
                        color: Color(0xFF5F8F82),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              const Text(
                'Account',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: primaryGreen,
                ),
              ),
              const SizedBox(height: 12),
              const SettingsCard(
                icon: Icons.badge_outlined,
                title: 'Personal Information',
                subtitle: 'Name, email, and caregiver role',
              ),
              const SettingsCard(
                icon: Icons.lock_outline,
                title: 'Password & Security',
                subtitle: 'Update password and login settings',
              ),
              const SettingsCard(
                icon: Icons.notifications_none,
                title: 'Notification Preferences',
                subtitle: 'Visual, vibration, and alert settings',
              ),
              const SizedBox(height: 24),
              const Text(
                'Accessibility',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: primaryGreen,
                ),
              ),
              const SizedBox(height: 12),
              const SettingsCard(
                icon: Icons.hearing,
                title: 'Hearing Accessibility',
                subtitle: 'Captions, visual alerts, and vibration support',
              ),
              const SettingsCard(
                icon: Icons.text_fields,
                title: 'Text Size',
                subtitle: 'Adjust readable text for phone or tablet',
              ),
              const SettingsCard(
                icon: Icons.contrast,
                title: 'High Contrast Mode',
                subtitle: 'Improve visibility for important alerts',
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                height: 56,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.logout),
                  label: const Text(
                    'Log Out',
                    style: TextStyle(fontSize: 18),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: primaryGreen,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class SettingsCard extends StatelessWidget {
  const SettingsCard({
    super.key,
    required this.icon,
    required this.title,
    required this.subtitle,
  });

  final IconData icon;
  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: '$title. $subtitle',
      child: Container(
        margin: const EdgeInsets.only(bottom: 14),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: SettingsScreen.accentGreen),
          borderRadius: BorderRadius.circular(18),
        ),
        child: Row(
          children: [
            CircleAvatar(
              backgroundColor: SettingsScreen.backgroundColor,
              child: Icon(
                icon,
                color: SettingsScreen.primaryGreen,
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: SettingsScreen.primaryGreen,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    subtitle,
                    style: const TextStyle(
                      fontSize: 14,
                      color: Color(0xFF5F8F82),
                    ),
                  ),
                ],
              ),
            ),
            const Icon(
              Icons.chevron_right,
              color: SettingsScreen.primaryGreen,
            ),
          ],
        ),
      ),
    );
  }
}