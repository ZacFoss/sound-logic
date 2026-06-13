import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AlertsScreen(),
    );
  }
}

class AlertsScreen extends StatelessWidget {
  const AlertsScreen({super.key});

  static const Color bgColor = Color(0xFFEAF7F4);
  static const Color accentColor = Color(0xFF2BBFA5);
  static const Color buttonColor = Color(0xFF0F766E);
  static const Color textColor = Color(0xFF9E9E9E);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: bgColor,
      appBar: AppBar(
        backgroundColor: bgColor,
        elevation: 0,
        title: const Text(
          "Alerts & Reminders",
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Colors.black87,
          ),
        ),
      ),

      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: Text(
              "Stay informed and never miss what matters",
              style: TextStyle(
                fontSize: 14,
                color: Colors.black54,
              ),
            ),
          ),

          const SizedBox(height: 16),

          // Filter Tabs
          SizedBox(
            height: 40,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _FilterChip(label: "All", selected: true),
                _FilterChip(label: "Unread (3)"),
                _FilterChip(label: "Reminders"),
                _FilterChip(label: "Updates"),
              ],
            ),
          ),

          const SizedBox(height: 16),

          // Alerts List
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _AlertCard(
                  title: "Hearing Check-Up Tomorrow",
                  subtitle:
                      "You have an appointment tomorrow at 10:00 AM.",
                  type: "Reminder",
                  date: "May 15, 2025",
                  time: "10:00 AM",
                  location: "Hearing Wellness Center",
                ),
                _AlertCard(
                  title: "New Message from Amy",
                  subtitle:
                      "Amy sent you a new message about your appointment.",
                  type: "Alert",
                  time: "9:30 AM",
                ),
                _AlertCard(
                  title: "Take your medication",
                  subtitle:
                      "Don’t forget to take your evening medication.",
                  type: "Medication Reminder",
                  time: "8:00 PM",
                ),
                SizedBox(height: 20),
                Text(
                  "Earlier",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                SizedBox(height: 12),
                _AlertCard(
                  title: "CareConnect Update",
                  subtitle:
                      "We’ve added new accessibility features to improve your experience.",
                  type: "Update",
                  date: "May 12",
                ),
              ],
            ),
          ),

          // Footer
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: accentColor.withOpacity(0.1),
            ),
            child: Row(
              children: [
                const Expanded(
                  child: Text(
                    "Manage your alert preferences\nCustomize how and when you receive alerts.",
                    style: TextStyle(
                      fontSize: 13,
                      color: Colors.black54,
                    ),
                  ),
                ),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: buttonColor,
                    padding:
                        const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                  ),
                  child: const Text("Settings"),
                ),
              ],
            ),
          ),
        ],
      ),

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 2,
        selectedItemColor: accentColor,
        unselectedItemColor: Colors.black45,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.message), label: "Messages"),
          BottomNavigationBarItem(icon: Icon(Icons.notifications), label: "Alerts"),
          BottomNavigationBarItem(icon: Icon(Icons.calendar_month), label: "Appointments"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
        ],
      ),
    );
  }
}

class _FilterChip extends StatelessWidget {
  final String label;
  final bool selected;

  const _FilterChip({required this.label, this.selected = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(right: 10),
      child: Chip(
        label: Text(label),
        labelStyle: TextStyle(
          color: selected ? Colors.white : Colors.black54,
        ),
        backgroundColor:
            selected ? AlertsScreen.accentColor : Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 12),
      ),
    );
  }
}

class _AlertCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final String type;
  final String? date;
  final String? time;
  final String? location;

  const _AlertCard({
    required this.title,
    required this.subtitle,
    required this.type,
    this.date,
    this.time,
    this.location,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            type,
            style: const TextStyle(
              fontSize: 12,
              color: AlertsScreen.accentColor,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            title,
            style: const TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            subtitle,
            style: const TextStyle(
              fontSize: 13,
              color: Colors.black54,
            ),
          ),
          if (date != null || time != null || location != null) ...[
            const SizedBox(height: 10),
            if (date != null)
              Text("Date: $date", style: const TextStyle(color: Colors.black54)),
            if (time != null)
              Text("Time: $time", style: const TextStyle(color: Colors.black54)),
            if (location != null)
              Text("Location: $location",
                  style: const TextStyle(color: Colors.black54)),
          ],
        ],
      ),
    );
  }
}
