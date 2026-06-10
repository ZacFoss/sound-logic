import 'package:flutter/material.dart';

class HelpCenterScreen extends StatelessWidget {
  const HelpCenterScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.menu, color: Color(0xFF2D8659)),
          onPressed: () {},
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 30,
              height: 30,
              decoration: BoxDecoration(
                color: Color(0xFF2D8659),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Center(
                child: Text(
                  'CC',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
                  ),
                ),
              ),
            ),
            SizedBox(width: 8),
            Text(
              'CareConnect',
              style: TextStyle(
                color: Color(0xFF2D8659),
                fontSize: 18,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
        centerTitle: true,
        actions: [
          Stack(
            children: [
              IconButton(
                icon: Icon(Icons.notifications_outlined, color: Color(0xFF2D8659)),
                onPressed: () {},
              ),
              Positioned(
                right: 8,
                top: 8,
                child: Container(
                  width: 20,
                  height: 20,
                  decoration: BoxDecoration(
                    color: Color(0xFF2D8659),
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      '3',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Header Section
              Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Help Center',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF2D8659),
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          'Find answers and get the\nsupport you need.',
                          style: TextStyle(
                            fontSize: 14,
                            color: Colors.grey[700],
                            height: 1.4,
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: 16),
                  Image.asset(
                    'assets/support_illustration.png',
                    width: 120,
                    height: 120,
                  ),
                ],
              ),
              SizedBox(height: 24),

              // Search Bar
              Container(
                decoration: BoxDecoration(
                  color: Colors.grey[100],
                  borderRadius: BorderRadius.circular(8),
                ),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: 'How can we help you?',
                    prefixIcon: Icon(Icons.search, color: Colors.grey[400]),
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(vertical: 12),
                  ),
                ),
              ),
              SizedBox(height: 24),

              // Categories
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _buildCategoryButton(
                    icon: Icons.description_outlined,
                    label: 'FAQs',
                    color: Color(0xFFD4E8DC),
                    iconColor: Color(0xFF2D8659),
                  ),
                  _buildCategoryButton(
                    icon: Icons.play_circle_outline,
                    label: 'Video\nGuides',
                    color: Color(0xFFE8D4F4),
                    iconColor: Color(0xFF7C3AED),
                  ),
                  _buildCategoryButton(
                    icon: Icons.library_books_outlined,
                    label: 'User\nGuides',
                    color: Color(0xFFD4E4F8),
                    iconColor: Color(0xFF3B82F6),
                  ),
                  _buildCategoryButton(
                    icon: Icons.lightbulb_outline,
                    label: 'Tips &\nTricks',
                    color: Color(0xFFFEF3C7),
                    iconColor: Color(0xFFF59E0B),
                  ),
                  _buildCategoryButton(
                    icon: Icons.chat_bubble_outline,
                    label: 'Contact\nSupport',
                    color: Color(0xFFD4E8DC),
                    iconColor: Color(0xFF2D8659),
                  ),
                ],
              ),
              SizedBox(height: 32),

              // Popular Topics
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Popular Topics',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  TextButton(
                    onPressed: () {},
                    child: Text(
                      'View all >',
                      style: TextStyle(
                        color: Color(0xFF2D8659),
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 12),
              _buildTopicTile(
                icon: Icons.calendar_today_outlined,
                title: 'Managing Appointments',
                subtitle: 'Schedule, reschedule, or cancel your visits',
                iconColor: Color(0xFF2D8659),
              ),
              SizedBox(height: 12),
              _buildTopicTile(
                icon: Icons.notifications_active_outlined,
                title: 'Alerts & Notifications',
                subtitle: 'Manage your alerts and reminders',
                iconColor: Color(0xFF2D8659),
              ),
              SizedBox(height: 12),
              _buildTopicTile(
                icon: Icons.message_outlined,
                title: 'Messaging',
                subtitle: 'Send and receive messages with caregivers',
                iconColor: Color(0xFF2D8659),
              ),
              SizedBox(height: 12),
              _buildTopicTile(
                icon: Icons.person_outline,
                title: 'Account & Profile',
                subtitle: 'Update your information and preferences',
                iconColor: Color(0xFF2D8659),
              ),
              SizedBox(height: 24),

              // Still need help section
              Container(
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey[300]!),
                  borderRadius: BorderRadius.circular(12),
                  color: Colors.grey[50],
                ),
                padding: EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.favorite_border, color: Color(0xFF2D8659), size: 28),
                        SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                'Still need help?',
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text(
                                'Our support team is here for you.',
                                style: TextStyle(
                                  fontSize: 12,
                                  color: Colors.grey[600],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 16),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Color(0xFF2D8659),
                        minimumSize: Size(double.infinity, 44),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.chat_outlined, color: Colors.white, size: 20),
                          SizedBox(width: 8),
                          Text(
                            'Chat with Us',
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 12),
                    Text(
                      'Call us: (512) 555-CARE (2273)',
                      style: TextStyle(fontSize: 12, color: Colors.grey[700]),
                    ),
                    Text(
                      'Email us: support@careconnect.com',
                      style: TextStyle(fontSize: 12, color: Colors.grey[700]),
                    ),
                    Text(
                      'Hours: Mon-Fri, 8am-8pm CT',
                      style: TextStyle(fontSize: 12, color: Colors.grey[700]),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 24),

              // Featured Articles
              Text(
                'Featured Articles',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 12),
              Row(
                children: [
                  Expanded(
                    child: _buildArticleCard(
                      title: 'How to set up\nnotifications',
                      readTime: '3 min read',
                      imageColor: Color(0xFFD4E8DC),
                    ),
                  ),
                  SizedBox(width: 12),
                  Expanded(
                    child: _buildArticleCard(
                      title: 'Joining a video\nappointment',
                      readTime: '4 min read',
                      imageColor: Color(0xFFE8D4F4),
                    ),
                  ),
                  SizedBox(width: 12),
                  Expanded(
                    child: _buildArticleCard(
                      title: 'Managing your\nhearing devices',
                      readTime: '5 min read',
                      imageColor: Color(0xFFD4E4F8),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 24),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.message),
            label: 'Messages',
          ),
          BottomNavigationBarItem(
            icon: Stack(
              children: [
                Icon(Icons.notifications),
                Positioned(
                  right: 0,
                  top: 0,
                  child: Container(
                    width: 8,
                    height: 8,
                    decoration: BoxDecoration(
                      color: Color(0xFF2D8659),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
              ],
            ),
            label: 'Alerts',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.calendar_today),
            label: 'Appointments',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
        selectedItemColor: Color(0xFF2D8659),
        unselectedItemColor: Colors.grey,
      ),
    );
  }

  Widget _buildCategoryButton({
    required IconData icon,
    required String label,
    required Color color,
    required Color iconColor,
  }) {
    return Column(
      children: [
        Container(
          width: 60,
          height: 60,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Icon(icon, color: iconColor, size: 28),
        ),
        SizedBox(height: 8),
        Text(
          label,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }

  Widget _buildTopicTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required Color iconColor,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[50],
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.grey[200]!),
      ),
      padding: EdgeInsets.all(12),
      child: Row(
        children: [
          Icon(icon, color: iconColor, size: 28),
          SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                Text(
                  subtitle,
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey[600],
                  ),
                ),
              ],
            ),
          ),
          Icon(Icons.chevron_right, color: Colors.grey[400]),
        ],
      ),
    );
  }

  Widget _buildArticleCard({
    required String title,
    required String readTime,
    required Color imageColor,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[50],
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: Colors.grey[200]!),
      ),
      child: Column(
        children: [
          Container(
            width: double.infinity,
            height: 80,
            decoration: BoxDecoration(
              color: imageColor,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(8),
                topRight: Radius.circular(8),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    height: 1.3,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  readTime,
                  style: TextStyle(
                    fontSize: 10,
                    color: Colors.grey[600],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
