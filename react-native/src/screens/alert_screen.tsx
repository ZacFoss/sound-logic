import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, AccessibilityInfo } from 'react-native';

type AlertItem = {
  id: string;
  type: 'Reminder' | 'Alert' | 'Medication Reminder' | 'Update';
  title: string;
  description: string;
  time: string;
  dateGroup: 'Today' | 'Earlier';
};

const alerts: AlertItem[] = [
  {
    id: '1',
    type: 'Reminder',
    title: 'Hearing Check-Up Tomorrow',
    description: 'You have an appointment tomorrow at 10:00 AM.',
    time: 'May 15, 2025 • 10:00 AM • Hearing Wellness Center',
    dateGroup: 'Today',
  },
  {
    id: '2',
    type: 'Alert',
    title: 'New Message from Amy',
    description: 'Amy sent you a new message about your appointment.',
    time: '9:30 AM',
    dateGroup: 'Today',
  },
  {
    id: '3',
    type: 'Medication Reminder',
    title: 'Take your medication',
    description: 'Don’t forget to take your evening medication.',
    time: '8:00 PM',
    dateGroup: 'Today',
  },
  {
    id: '4',
    type: 'Update',
    title: 'CareConnect Update',
    description: 'We’ve added new accessibility features to improve your experience.',
    time: 'May 12',
    dateGroup: 'Earlier',
  },
];

interface AlertScreenProps {
  visible: boolean;
  message: string;
}

export const AlertScreen: React.FC<AlertScreenProps> = ({ visible, message }) => {
  useEffect(() => {
    if (visible && message) {
      // Announces the alert to screen readers immediately
      AccessibilityInfo.announceForAccessibility(message);
    }
  }, [visible, message]);

  if (!visible) return null;

  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="alert"
      accessibilityLiveRegion="assertive"
    >
      <Text style={styles.type}>{message}</Text>
    </View>
  );
};

export default function AlertsScreen() {
  const renderItem = ({ item }: { item: AlertItem }) => (
    <View style={styles.card}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Alerts & Reminders</Text>
      <Text style={styles.headerSubtitle}>Stay informed and never miss what matters.</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['All', 'Unread (3)', 'Reminders', 'Updates'].map((tab) => (
          <TouchableOpacity key={tab} style={styles.tabButton}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Alerts List */}
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <Text style={styles.sectionTitle}>Today</Text>
        <FlatList
          data={alerts.filter((a) => a.dateGroup === 'Today')}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.sectionTitle}>Earlier</Text>
        <FlatList
          data={alerts.filter((a) => a.dateGroup === 'Earlier')}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Manage your alert preferences</Text>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Customize</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7F4',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2BBFA5',
  },
  headerSubtitle: {
    color: '#9E9E9E',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  tabButton: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  tabText: {
    color: '#2BBFA5',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    color: '#2BBFA5',
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  type: {
    color: '#2BBFA5',
    fontWeight: '700',
    marginBottom: 4,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    marginTop: 6,
    color: '#555',
  },
  time: {
    marginTop: 6,
    color: '#9E9E9E',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  footerText: {
    color: '#9E9E9E',
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 10,
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});
