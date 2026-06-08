import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

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
    const CircleAvatar(
      backgroundColor: primaryGreen,
      child: Text(
        'CC',
        style: TextStyle(color: Colors.white),
      ),
    ),
    const SizedBox(width: 12),
    const Expanded(
      child: Text(
        'CareConnect',
        style: TextStyle(
          fontSize: 22,
          fontWeight: FontWeight.bold,
          color: primaryGreen,
        ),
        overflow: TextOverflow.ellipsis,
      ),
    ),

    IconButton(
      tooltip: 'Profile settings',
      onPressed: () {},
      icon: const CircleAvatar(
        radius: 18,
        backgroundColor: Color(0xFF2BBFA5),
        child: Icon(
          Icons.person,
          color: Colors.white,
          size: 22,
        ),
      ),
    ),

    IconButton(
      tooltip: 'Search',
      onPressed: () {},
      icon: const Icon(Icons.search),
      color: primaryGreen,
    ),

    IconButton(
      tooltip: 'Notifications',
      onPressed: () {},
      icon: const Icon(Icons.notifications),
      color: primaryGreen,
    ),
  ],
),

              const SizedBox(height: 32),

              const Text(
                'Friday, May 29',
                style: TextStyle(
                  fontSize: 16,
                  color: Color(0xFF5F8F82),
                ),
              ),

              const SizedBox(height: 12),

              const Text(
                'Good Morning,',
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                  color: primaryGreen,
                ),
              ),

              const Text(
                'Care Giver',
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                  color: accentGreen,
                ),
              ),

              const SizedBox(height: 28),

              Row(
                children: [
                  const Text(
                    'Active Alerts',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: primaryGreen,
                    ),
                  ),
                  const Spacer(),
                  TextButton(
                    onPressed: () {},
                    child: const Text('View All'),
                  ),
                ],
              ),

              const SizedBox(height: 12),

              const AlertCard(
                title: 'Missed Medication',
                subtitle: 'Care Receiver · 8:00 AM',
                status: 'Overdue',
                icon: Icons.warning_amber_rounded,
                backgroundColor: Color(0xFFFFE0C2),
                borderColor: Color(0xFFD97706),
              ),

              const SizedBox(height: 14),

              const AlertCard(
                title: 'Vitals Check',
                subtitle: 'Care Receiver · 2:00 PM',
                status: 'Due Soon',
                icon: Icons.access_time,
                backgroundColor: Color(0xFFFFFFB3),
                borderColor: Color(0xFFCA8A04),
              ),

              const SizedBox(height: 14),

              const AlertCard(
                title: 'Hearing Aid Inserted',
                subtitle: 'Care Receiver · 12:00 PM',
                status: 'Completed',
                icon: Icons.check_circle_outline,
                backgroundColor: Color(0xFFCFFAFE),
                borderColor: Color(0xFF0891B2),
              ),

              const SizedBox(height: 28),

              const Text(
                'Message From Receiver',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: primaryGreen,
                ),
              ),

              const SizedBox(height: 12),

              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: primaryGreen,
                  borderRadius: BorderRadius.circular(18),
                ),
                child: const Text(
                  'I need my vitals checked soon, and are you able to administer my medication?',
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.white,
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

class AlertCard extends StatelessWidget {
  const AlertCard({
    super.key,
    required this.title,
    required this.subtitle,
    required this.status,
    required this.icon,
    required this.backgroundColor,
    required this.borderColor,
  });

  final String title;
  final String subtitle;
  final String status;
  final IconData icon;
  final Color backgroundColor;
  final Color borderColor;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: '$title alert. $status. $subtitle',
      button: true,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: backgroundColor,
          border: Border.all(color: borderColor),
          borderRadius: BorderRadius.circular(18),
        ),
        child: Row(
          children: [
            Icon(icon, color: borderColor),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: borderColor,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    subtitle,
                    style: TextStyle(color: borderColor),
                  ),
                ],
              ),
            ),
            Text(
              status,
              style: TextStyle(color: borderColor),
            ),
          ],
        ),
      ),
    );
  }
}