import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, AccessibilityInfo } from 'react-native';

const accent = '#2BBFA5';
const background = '#EAF7F4';
const text = '#9E9E9E';
const button = '#0F766E';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Header */}
        <Text style={styles.headerTitle}>My Profile</Text>
        <Text style={styles.headerSubtitle}>Manage your information and preferences.</Text>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileDetail}>sarah.johnson@email.com</Text>
            <Text style={styles.profileDetail}>(512) 555-1234</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Sections */}
        <Section title="Account & Security" items={[
          { label: 'Account Information', description: 'Update your personal details' },
          { label: 'Password & Security', description: 'Change your password and security settings' },
          { label: 'Sign In & Biometrics', description: 'Manage how you sign in to your account' },
        ]} />

        <Section title="Preferences" items={[
          { label: 'Notification Preferences', description: 'Choose how and what you want to be notified about' },
          { label: 'Accessibility', description: 'Customize text size, contrast, and more' },
          { label: 'Language', description: 'Choose your preferred language (English)' },
        ]} />

        <Section title="Support & Resources" items={[
          { label: 'Help Center', description: 'Get help and find answers' },
          { label: 'Contact Support', description: 'We’re here to help you' },
          { label: 'Terms & Privacy', description: 'Review our terms of use and privacy policy' },
        ]} />

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

export const useScreenReader = (message: string, deps: any[] = []) => {
  useEffect(() => {
    if (message) {
      AccessibilityInfo.announceForAccessibility(message);
    }
  }, deps);
};

type SectionProps = {
  title: string;
  items: { label: string; description: string }[];
};

function Section({ title, items }: SectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item) => (
        <View key={item.label} style={styles.sectionItem}>
          <Text style={styles.itemLabel}>{item.label}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: accent,
  },
  headerSubtitle: {
    color: text,
    marginBottom: 20,
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
  },
  profileDetail: {
    color: text,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: button,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  editButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: accent,
    marginBottom: 10,
  },
  sectionItem: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemLabel: {
    fontWeight: '700',
  },
  itemDescription: {
    color: text,
    marginTop: 4,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#FF4B4B',
  },
  logoutText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});

