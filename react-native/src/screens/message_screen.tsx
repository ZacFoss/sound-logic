import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, AccessibilityInfo } from 'react-native';

const messages = [
  { id: '1', name: 'Amy Johnson', role: 'Caregiver', message: 'Hi Sarah! Just a reminder about your appointment tomorrow at 10 AM.', time: '9:30 AM' },
  { id: '2', name: 'Dr. Michael Lee', role: 'Provider', message: 'Your hearing test results are ready. Let me know if you have questions.', time: 'Yesterday' },
  { id: '3', name: 'Linda Smith', role: 'Daughter', message: 'Mom, how are you feeling today? Call me if you need anything!', time: 'May 12' },
  { id: '4', name: 'CareConnect Support', role: 'Support', message: 'Thank you for reaching out. Here are some helpful resources.', time: 'May 10' },
  { id: '5', name: 'Susan Wilson', role: 'Sister', message: 'I’ll be visiting this weekend. Looking forward to it!', time: 'May 8' },
];

type MessageItem = {
  id: string;
  name: string;
  role: string;
  message: string;
  time: string;
};

export const useScreenReader = (message: string, deps: any[] = []) => {
  useEffect(() => {
    if (message) {
      AccessibilityInfo.announceForAccessibility(message);
    }
  }, deps);
};

export default function MessagesScreen() {
  const renderItem = ({ item}: {item: MessageItem}) => (
    <View style={styles.messageCard}>
      <View style={styles.messageHeader}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.role}>{item.role}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>CareConnect</Text>
        <TouchableOpacity style={styles.newMessageButton}>
          <Text style={styles.newMessageText}>New Message</Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#9E9E9E"
      />

      {/* Filters */}
      <View style={styles.filters}>
        {['All', 'Caregivers', 'Providers', 'Family', 'Unread'].map((f) => (
          <TouchableOpacity key={f} style={styles.filterButton}>
            <Text style={styles.filterText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      {/* Accessibility Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Need to communicate in a different way? Use Live Caption, Visual Alerts, or Voice Messages in your Accessibility Settings.
        </Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsButtonText}>Go to Settings</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2BBFA5',
  },
  newMessageButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  newMessageText: {
    color: 'white',
    fontWeight: '600',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
    color: '#333',
  },
  filters: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  filterText: {
    color: '#2BBFA5',
    fontWeight: '600',
  },
  messageCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
  },
  time: {
    color: '#9E9E9E',
  },
  role: {
    color: '#2BBFA5',
    fontWeight: '600',
    marginTop: 4,
  },
  message: {
    marginTop: 6,
    color: '#555',
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
  settingsButton: {
    backgroundColor: '#0F766E',
    paddingVertical: 10,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});

