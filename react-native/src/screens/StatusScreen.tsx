import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../theme/colors';

type StatusScreenProps = {
  onBack: () => void;
};

const StatusScreen = ({onBack}: StatusScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>CC</Text>
        </View>

        <Text style={styles.brand}>CareConnect</Text>

        <Text style={styles.title}>Welcome to CareConnect!</Text>

        <Text style={styles.helperText}>
          Your choice is remembered. You can switch at any time from inside the
          app.
        </Text>

        <View style={styles.roleCard}>
          <Text style={styles.roleIcon}>💬</Text>
          <View style={styles.roleTextArea}>
            <Text style={styles.roleTitle}>I am the Care Receiver</Text>
            <Text style={styles.roleDescription}>
              I want tools to help me communicate, get alerts, manage
              appointments, and stay connected.
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                👂 Designed for people with hearing loss
              </Text>
            </View>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.roleCard}>
          <Text style={styles.roleIcon}>👥</Text>
          <View style={styles.roleTextArea}>
            <Text style={styles.roleTitle}>I am the Caregiver</Text>
            <Text style={styles.roleDescription}>
              I want to support my loved one, manage their care, and stay
              informed.
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                🛡 Tools to help you provide better care
              </Text>
            </View>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.privacyRow}>
          <Text style={styles.privacyIcon}>🔒</Text>
          <Text style={styles.privacyText}>
            This does not affect what information is stored only which view
            you see first.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backText: {
    fontSize: 34,
    color: colors.primaryGreen,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.softMint,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    color: colors.primaryGreen,
    fontSize: 28,
    fontWeight: '800',
  },
  brand: {
    color: colors.primaryGreen,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 34,
  },
  title: {
    color: colors.primaryGreen,
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: colors.darkText,
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 14,
  },
  helperText: {
    color: colors.grayText,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 34,
  },
  roleCard: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.accentGreen,
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  roleIcon: {
    fontSize: 42,
    marginRight: 14,
  },
  roleTextArea: {
    flex: 1,
  },
  roleTitle: {
    color: colors.primaryGreen,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10,
  },
  roleDescription: {
    color: colors.darkText,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },
  badge: {
    backgroundColor: colors.softMint,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  badgeText: {
    color: colors.primaryGreen,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  chevron: {
    color: colors.primaryGreen,
    fontSize: 38,
    marginLeft: 8,
  },
  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  privacyIcon: {
    fontSize: 26,
    marginRight: 12,
  },
  privacyText: {
    flex: 1,
    color: colors.grayText,
    fontSize: 15,
    lineHeight: 22,
  },
});

export default StatusScreen;