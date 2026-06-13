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
      home: AppointmentsScreen(),
    );
  }
}

class AppointmentsScreen extends StatelessWidget {
  const AppointmentsScreen({super.key});

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
          "Appointments",
          style: TextStyle(
            fontSize: 22,
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
              "View and manage your upcoming and past appointments.",
              style: TextStyle(
                fontSize: 14,
                color: textColor,
              ),
            ),
          ),

          const SizedBox(height: 16),

          // Book Appointment Button
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: buttonColor,
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
              child: const Center(
                child: Text(
                  "Book Appointment",
                  style: TextStyle(fontSize: 16),
                ),
              ),
            ),
          ),

          const SizedBox(height: 16),

          // Tabs
          SizedBox(
            height: 40,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _FilterChip(label: "Upcoming (2)", selected: true),
                _FilterChip(label: "Past"),
                _FilterChip(label: "Cancelled"),
              ],
            ),
          ),

          const SizedBox(height: 16),

          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _SectionHeader("Next Appointment"),
                _AppointmentCard(
                  title: "Hearing Check-Up",
                  date: "May 15, 2025 - 10:00 AM",
                  location:
                      "Hearing Wellness Center\n123 Health St., Suite 100, Austin, TX 78701",
                  status: "Confirmed",
                ),
                SizedBox(height: 20),

                _SectionHeader("In 3 weeks"),
                _AppointmentCard(
                  title: "Hearing Aid Follow-Up",
                  date: "Jun 5, 2025 - 2:00 PM",
                  location:
                      "Hearing Wellness Center\n123 Health St., Suite 100, Austin, TX 78701",
                  status: "Confirmed",
                ),

                SizedBox(height: 30),
                _SectionHeader("Past Appointments"),
                _PastAppointmentCard(
                  title: "Hearing Test",
                  date: "Apr 10, 2025 - 9:00 AM",
                  location:
                      "Hearing Wellness Center\n123 Health St., Suite 100, Austin, TX 78701",
                  status: "Completed",
                ),

                SizedBox(height: 30),
                _SectionHeader("Cancelled Appointments"),
                _PastAppointmentCard(
                  title: "Hearing Consultation",
                  date: "Apr 2, 2025 - 11:00 AM",
                  location:
                      "Hearing Wellness Center\n123 Health St., Suite 100, Austin, TX 78701",
                  status: "Cancelled",
                ),

                SizedBox(height: 30),
                Text(
                  "Need to reschedule or cancel?\nPlease contact the clinic directly or visit our Help Center for more information.",
                  style: TextStyle(
                    fontSize: 13,
                    color: textColor,
                  ),
                ),
                SizedBox(height: 20),
              ],
            ),
          ),
        ],
      ),

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 3,
        selectedItemColor: accentColor,
        unselectedItemColor: textColor,
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
            selected ? AppointmentsScreen.accentColor : Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 12),
      ),
    );
  }
}

class _SectionHeader extends StatelessWidget {
  final String title;
  const _SectionHeader(this.title);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}

class _AppointmentCard extends StatelessWidget {
  final String title;
  final String date;
  final String location;
  final String status;

  const _AppointmentCard({
    required this.title,
    required this.date,
    required this.location,
    required this.status,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 6),
          Text(date, style: const TextStyle(color: AppointmentsScreen.textColor)),
          const SizedBox(height: 4),
          Text(location, style: const TextStyle(color: AppointmentsScreen.textColor)),
          const SizedBox(height: 10),
          Text(
            "Status: $status",
            style: const TextStyle(
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
            ),
            child: const Text("Add to Calendar"),
          ),
        ],
      ),
    );
  }
}

class _PastAppointmentCard extends StatelessWidget {
  final String title;
  final String date;
  final String location;
  final String status;

  const _PastAppointmentCard({
    required this.title,
    required this.date,
    required this.location,
    required this.status,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 6),
          Text(date, style: const TextStyle(color: AppointmentsScreen.textColor)),
          const SizedBox(height: 4),
          Text(location, style: const TextStyle(color: AppointmentsScreen.textColor)),
          const SizedBox(height: 10),
          Text(
            "Status: $status",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: status == "Cancelled"
                  ? Colors.red
                  : Colors.green,
            ),
          ),
        ],
      ),
    );
  }
}
