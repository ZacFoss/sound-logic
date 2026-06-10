import 'package:flutter/material.dart';

class AccessibilityScreen extends StatefulWidget {
  const AccessibilityScreen({Key? key}) : super(key: key);

  @override
  State<AccessibilityScreen> createState() => _AccessibilityScreenState();
}

class _AccessibilityScreenState extends State<AccessibilityScreen> {
  bool highContrastEnabled = true;
  bool darkModeEnabled = false;
  bool colorEnhancementEnabled = true;
  bool voiceMessagesEnabled = true;
  String textSize = 'Medium';

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
                  IconButton(
                    icon: Icon(Icons.arrow_back, color: Color(0xFF2D8659), size: 28),
                    onPressed: () {},
                    padding: EdgeInsets.zero,
                    constraints: BoxConstraints(),
                  ),
                  SizedBox(width: 8),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Accessibility',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF2D8659),
                          ),
                        ),
                        SizedBox(height: 4),
                        Text(
                          'Customize your experience to\nmeet your needs.',
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
                  Expanded(
                    child: Image.asset(
                      'assets/accessibility_illustration.png',
                      width: 100,
                      height: 100,
                      fit: BoxFit.contain,
                    ),
                  ),
                ],
              ),
              SizedBox(height: 32),

              // Display Settings Section
              _buildSectionHeader('Display Settings'),
              SizedBox(height: 12),

              // Text Size
              _buildSettingsTile(
                icon: Icons.text_fields,
                iconColor: Color(0xFFD4E8DC),
                iconBgColor: Color(0xFF2D8659),
                title: 'Text Size',
                subtitle: 'Adjust the size of text throughout the app',
                trailing: Container(
                  decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey[300]!),
                    borderRadius: BorderRadius.circular(24),
                  ),
                  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'A',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.grey[600],
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      SizedBox(width: 8),
                      Text(
                        textSize,
                        style: TextStyle(
                          fontSize: 14,
                          color: Color(0xFF2D8659),
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      SizedBox(width: 8),
                      Text(
                        'A',
                        style: TextStyle(
                          fontSize: 18,
                          color: Color(0xFF2D8659),
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              SizedBox(height: 12),

              // High Contrast
              _buildToggleSetting(
                icon: Icons.brightness_4,
                iconColor: Color(0xFF2D8659),
                title: 'High Contrast',
                subtitle: 'Increase contrast for better visibility',
                value: highContrastEnabled,
                onChanged: (value) {
                  setState(() {
                    highContrastEnabled = value;
                  });
                },
              ),
              SizedBox(height: 12),

              // Dark Mode
              _buildToggleSetting(
                icon: Icons.nights_stay,
                iconColor: Color(0xFF2D8659),
                title: 'Dark Mode',
                subtitle: 'Reduce eye strain in low light',
                value: darkModeEnabled,
                onChanged: (value) {
                  setState(() {
                    darkModeEnabled = value;
                  });
                },
              ),
              SizedBox(height: 12),

              // Color Enhancement
              _buildToggleSetting(
                icon: Icons.palette,
                iconColor: Color(0xFF2D8659),
                title: 'Color Enhancement',
                subtitle: 'Improve color visibility',
                value: colorEnhancementEnabled,
                onChanged: (value) {
                  setState(() {
                    colorEnhancementEnabled = value;
                  });
                },
              ),
              SizedBox(height: 32),

              // Hearing Support Section
              _buildSectionHeader('Hearing Support'),
              SizedBox(height: 12),

              // Live Caption
              _buildSettingsTile(
                icon: Icons.closed_caption,
                iconColor: Color(0xFFE8D4F4),
                iconBgColor: Color(0xFF7C3AED),
                title: 'Live Caption',
                subtitle: 'Show captions for messages and alerts',
              ),
              SizedBox(height: 12),

              // Visual Alerts
              _buildSettingsTile(
                icon: Icons.devices,
                iconColor: Color(0xFFD4E4F8),
                iconBgColor: Color(0xFF3B82F6),
                title: 'Visual Alerts',
                subtitle: 'Receive visual alerts for notifications',
              ),
              SizedBox(height: 12),

              // Sound & Vibration Settings
              _buildSettingsTile(
                icon: Icons.volume_up,
                iconColor: Color(0xFFD4E8DC),
                iconBgColor: Color(0xFF2D8659),
                title: 'Sound & Vibration Settings',
                subtitle: 'Customize alert sounds and vibrations',
              ),
              SizedBox(height: 32),

              // Communication Preferences Section
              _buildSectionHeader('Communication Preferences'),
              SizedBox(height: 12),

              // Voice Messages
              _buildToggleSetting(
                icon: Icons.message,
                iconColor: Color(0xFFF59E0B),
                title: 'Voice Messages',
                subtitle: 'Send and receive voice messages',
                value: voiceMessagesEnabled,
                onChanged: (value) {
                  setState(() {
                    voiceMessagesEnabled = value;
                  });
                },
              ),
              SizedBox(height: 12),

              // Sign Language Resources
              _buildSettingsTile(
                icon: Icons.sign_language,
                iconColor: Color(0xFFD4E4F8),
                iconBgColor: Color(0xFF3B82F6),
                title: 'Sign Language Resources',
                subtitle: 'Access helpful sign language videos',
              ),
              SizedBox(height: 12),

              // Hearing Health Tips
              _buildSettingsTile(
                icon: Icons.help_outline,
                iconColor: Color(0xFFE8D4F4),
                iconBgColor: Color(0xFF7C3AED),
                title: 'Hearing Health Tips',
                subtitle: 'Helpful tips and resources',
              ),
              SizedBox(height: 32),

              // Support Section
              Container(
                decoration: BoxDecoration(
                  color: Color(0xFFD4E8DC),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Color(0xFFC1D9CC)),
                ),
                padding: EdgeInsets.all(16),
                child: Row(
                  children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        color: Color(0xFF2D8659),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Icon(Icons.help, color: Colors.white, size: 24),
                    ),
                    SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Need help with accessibility?',
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w600,
                              color: Color(0xFF2D8659),
                            ),
                          ),
                          Text(
                            'Contact our support team for personalized assistance.',
                            style: TextStyle(
                              fontSize: 12,
                              color: Color(0xFF2D8659),
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(width: 12),
                    ElevatedButton(
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.white,
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20),
                          side: BorderSide(color: Color(0xFF2D8659), width: 1.5),
                        ),
                        padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      ),
                      child: Text(
                        'Contact Support',
                        style: TextStyle(
                          color: Color(0xFF2D8659),
                          fontWeight: FontWeight.w600,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 32),
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

  Widget _buildSectionHeader(String title) {
    return Text(
      title,
      style: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.bold,
        color: Colors.black,
      ),
    );
  }

  Widget _buildSettingsTile({
    required IconData icon,
    required Color iconColor,
    required Color iconBgColor,
    required String title,
    required String subtitle,
    Widget? trailing,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[50],
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.grey[200]!),
      ),
      padding: EdgeInsets.all(12),
      child: Row(
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: iconColor,
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, color: iconBgColor, size: 24),
          ),
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
                SizedBox(height: 4),
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
          SizedBox(width: 12),
          trailing ?? Icon(Icons.chevron_right, color: Colors.grey[400]),
        ],
      ),
    );
  }

  Widget _buildToggleSetting({
    required IconData icon,
    required Color iconColor,
    required String title,
    required String subtitle,
    required bool value,
    required Function(bool) onChanged,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.grey[50],
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.grey[200]!),
      ),
      padding: EdgeInsets.all(12),
      child: Row(
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: Colors.grey[200],
              borderRadius: BorderRadius.circular(8),
            ),
            child: Icon(icon, color: iconColor, size: 24),
          ),
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
                SizedBox(height: 4),
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
          SizedBox(width: 12),
          Switch(
            value: value,
            onChanged: onChanged,
            activeColor: Color(0xFF2D8659),
            inactiveThumbColor: Colors.grey[300],
            inactiveTrackColor: Colors.grey[300],
          ),
        ],
      ),
    );
  }
}
