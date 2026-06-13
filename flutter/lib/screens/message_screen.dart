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
      home: MessagesScreen(),
    );
  }
}

class MessagesScreen extends StatelessWidget {
  const MessagesScreen({super.key});

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
        title: Row(
          children: [
            const Text(
              "CareConnect",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
            const Spacer(),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: buttonColor,
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
              child: const Text("New Message"),
            ),
            const SizedBox(width: 12),
            Stack(
              children: [
                const Icon(Icons.notifications, size: 28, color: Colors.black87),
                Positioned(
                  right: 0,
                  top: 0,
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    decoration: const BoxDecoration(
                      color: accentColor,
                      shape: BoxShape.circle,
                    ),
                    child: const Text(
                      "3",
                      style: TextStyle(fontSize: 10, color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),

      body: Column(
        children: [
          // Search bar
          Padding(
            padding: const EdgeInsets.all(16),
            child: TextField(
              decoration: InputDecoration(
                hintText: "Search messages...",
                hintStyle: const TextStyle(color: textColor),
                prefixIcon: const Icon(Icons.search, color: textColor),
                filled: true,
                fillColor: Colors.white,
                contentPadding: const EdgeInsets.symmetric(vertical: 0),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(14),
                  borderSide: BorderSide.none,
                ),
              ),
            ),
          ),

          // Filter buttons
          SizedBox(
            height: 40,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _FilterChip(label: "All", selected: true),
                _FilterChip(label: "Caregivers"),
                _FilterChip(label: "Providers"),
                _FilterChip(label: "Family"),
                _FilterChip(label: "Unread"),
              ],
            ),
          ),

          const SizedBox(height: 12),

          // Message list
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              children: const [
                _MessageTile(
                  name: "Amy Johnson",
                  role: "Caregiver",
                  message:
                      "Hi Sarah! Just a reminder about your appointment tomorrow at 10 AM.",
                  time: "9:30 AM",
                ),
                _MessageTile(
                  name: "Dr. Michael Lee",
                  role: "Provider",
                  message:
                      "Your hearing test results are ready. Let me know if you have questions.",
                  time: "Yesterday",
                ),
                _MessageTile(
                  name: "Linda Smith",
                  role: "Daughter",
                  message:
                      "Mom, how are you feeling today? Call me if you need anything!",
                  time: "May 12",
                ),
                _MessageTile(
                  name: "CareConnect Support",
                  role: "Support",
                  message:
                      "Thank you for reaching out. Here are some helpful resources.",
                  time: "May 10",
                ),
                _MessageTile(
                  name: "Susan Wilson",
                  role: "Sister",
                  message:
                      "I’ll be visiting this weekend. Looking forward to it!",
                  time: "May 8",
                ),
              ],
            ),
          ),

          // Accessibility footer
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
                    "Need to communicate in a different way?\nUse Live Caption, Visual Alerts, or Voice Messages in your Accessibility Settings.",
                    style: TextStyle(
                      fontSize: 13,
                      color: textColor,
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
                  child: const Text("Go to Settings"),
                ),
              ],
            ),
          ),
        ],
      ),

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 1,
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
          color: selected ? Colors.white : MessagesScreen.textColor,
        ),
        backgroundColor:
            selected ? MessagesScreen.accentColor : Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 12),
      ),
    );
  }
}

class _MessageTile extends StatelessWidget {
  final String name;
  final String role;
  final String message;
  final String time;

  const _MessageTile({
    required this.name,
    required this.role,
    required this.message,
    required this.time,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 22,
            backgroundColor: MessagesScreen.accentColor.withOpacity(0.2),
            child: const Icon(Icons.person, color: MessagesScreen.accentColor),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "$name • $role",
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  message,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: 13,
                    color: MessagesScreen.textColor,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 8),
          Text(
            time,
            style: const TextStyle(
              fontSize: 12,
              color: MessagesScreen.textColor,
            ),
          ),
        ],
      ),
    );
  }
}
