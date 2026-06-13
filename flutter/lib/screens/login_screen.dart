import 'package:flutter/material.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  static const background = Color(0xFFF7FFFC);
  static const primaryGreen = Color(0xFF0F766E);
  static const accentGreen = Color(0xFF2BBFA5);
  static const softMint = Color(0xFFEAF7F4);
  static const darkText = Color(0xFF111827);
  static const grayText = Color(0xFF4B5563);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: background,
      body: SafeArea(
        child: SingleChildScrollView(
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 18),
          child: Column(
            children: [
              const SizedBox(height: 20),

              const _Logo(),

              const SizedBox(height: 32),

              const Text(
                'Stay connected\nthrough\naccessible care.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 38,
                  height: 1.15,
                  fontWeight: FontWeight.w900,
                  color: primaryGreen,
                ),
              ),

              const SizedBox(height: 20),

              const Text(
                'CareConnect helps receivers and caregivers\ncommunicate clearly with visual alerts,\nmessaging, and hearing accessibility tools.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 17,
                  height: 1.45,
                  color: grayText,
                ),
              ),

              const SizedBox(height: 30),

              SizedBox(
                width: double.infinity,
                height: 58,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.arrow_circle_right_outlined, size: 30),
                  label: const Text(
                    'Get Started',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
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

              const SizedBox(height: 14),

              SizedBox(
                width: double.infinity,
                height: 58,
                child: OutlinedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.login, size: 30),
                  label: const Text(
                    'Sign In',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: primaryGreen,
                    side: const BorderSide(color: primaryGreen, width: 1.5),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 28),

              const Row(
                children: [
                  Expanded(child: Divider(color: Color(0xFFC7E8DD))),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 12),
                    child: Text(
                      'Accessibility First',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: primaryGreen,
                      ),
                    ),
                  ),
                  Icon(Icons.favorite_border, color: primaryGreen),
                  Expanded(child: Divider(color: Color(0xFFC7E8DD))),
                ],
              ),

              const SizedBox(height: 22),

              const Column(
                children: [
                  _FeatureCard(
                    icon: Icons.notifications_none,
                    title: 'Visual Alerts',
                    description:
                        'Important notifications without relying on sound.',
                  ),
                  SizedBox(height: 12),
                  _FeatureCard(
                    icon: Icons.chat_bubble_outline,
                    title: 'Accessible Messaging',
                    description:
                        'Clear communication between caregivers and receivers.',
                  ),
                  SizedBox(height: 12),
                  _FeatureCard(
                    icon: Icons.accessibility_new,
                    title: 'Custom Accessibility',
                    description:
                        'Adjust text size, vibration, and visual preferences.',
                  ),
                ],
              ),

              const SizedBox(height: 24),

              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: softMint,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFC7E8DD)),
                ),
                child: const Row(
                  children: [
                    CircleAvatar(
                      radius: 30,
                      backgroundColor: Color(0xFFDDF5ED),
                      child: Icon(
                        Icons.support_agent,
                        color: primaryGreen,
                        size: 34,
                      ),
                    ),
                    SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Need help getting started?',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: primaryGreen,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text(
                            'Chat with the CareConnect Assistant anytime for guidance.',
                            style: TextStyle(
                              fontSize: 15,
                              height: 1.35,
                              color: darkText,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Icon(Icons.chevron_right, color: primaryGreen, size: 34),
                  ],
                ),
              ),

              const SizedBox(height: 24),

              const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.lock, color: primaryGreen, size: 18),
                  SizedBox(width: 8),
                  Text(
                    'Your privacy is important.',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.bold,
                      color: grayText,
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 4),

              const Text(
                'Your information is secure and never shared.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: grayText,
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

class _Logo extends StatelessWidget {
  const _Logo();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 70,
          height: 70,
          decoration: BoxDecoration(
            color: LoginScreen.primaryGreen,
            borderRadius: BorderRadius.circular(18),
          ),
          child: const Center(
            child: Text(
              'CC',
              style: TextStyle(
                color: Colors.white,
                fontSize: 34,
                fontWeight: FontWeight.w900,
              ),
            ),
          ),
        ),
        const SizedBox(height: 10),
        const Text(
          'CareConnect',
          style: TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.bold,
            color: LoginScreen.primaryGreen,
          ),
        ),
      ],
    );
  }
}

class _FeatureCard extends StatelessWidget {
  const _FeatureCard({
    required this.icon,
    required this.title,
    required this.description,
  });

  final IconData icon;
  final String title;
  final String description;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: '$title. $description',
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: const Color(0xFFDDEEE8)),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 8,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 28,
              backgroundColor: LoginScreen.softMint,
              child: Icon(
                icon,
                color: LoginScreen.primaryGreen,
                size: 30,
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    softWrap: true,
                    overflow: TextOverflow.visible,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: LoginScreen.primaryGreen,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    description,
                    softWrap: true,
                    overflow: TextOverflow.visible,
                    style: const TextStyle(
                      fontSize: 14,
                      height: 1.35,
                      color: LoginScreen.darkText,
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