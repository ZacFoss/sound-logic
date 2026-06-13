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

type LoginScreenProps = {
  onGetStarted: () => void;
  onSignIn: () => void;
};

const LoginScreen = ({onGetStarted, onSignIn}: LoginScreenProps) => {
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        
        {/* Logo */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>CC</Text>
        </View>

        <Text style={styles.brand}>CareConnect</Text>

        {/* Headline */}
        <Text style={styles.title}>
          Stay connected{'\n'}
          through{'\n'}
          accessible care.
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          CareConnect helps receivers and caregivers communicate clearly with
          visual alerts, messaging, and hearing accessibility tools.
        </Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton} onPress={onGetStarted}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={onSignIn}>
          <Text style={styles.secondaryButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.dividerRow}>
  <View style={styles.line} />
  <Text style={styles.dividerText}>Accessibility First</Text>
  <Text style={styles.heart}>♡</Text>
  <View style={styles.line} />
</View>

<View style={styles.featureCard}>
  <View style={styles.featureIconCircle}>
    <Text style={styles.featureIcon}>🔔</Text>
  </View>
  <View style={styles.featureTextArea}>
    <Text style={styles.featureTitle}>Visual Alerts</Text>
    <Text style={styles.featureDescription}>
      Important notifications without relying on sound.
    </Text>
  </View>
</View>

<View style={styles.featureCard}>
  <View style={styles.featureIconCircle}>
    <Text style={styles.featureIcon}>💬</Text>
  </View>
  <View style={styles.featureTextArea}>
    <Text style={styles.featureTitle}>Accessible Messaging</Text>
    <Text style={styles.featureDescription}>
      Clear communication between caregivers and receivers.
    </Text>
  </View>
</View>

<View style={styles.featureCard}>
  <View style={styles.featureIconCircle}>
    <Text style={styles.featureIcon}>♿</Text>
  </View>
  <View style={styles.featureTextArea}>
    <Text style={styles.featureTitle}>Custom Accessibility</Text>
    <Text style={styles.featureDescription}>
      Adjust text size, vibration, and visual preferences.
    </Text>
  </View>
</View>

<View style={styles.helpCard}>
  <View style={styles.featureIconCircle}>
    <Text style={styles.featureIcon}>🎧</Text>
  </View>
  <View style={styles.featureTextArea}>
    <Text style={styles.helpTitle}>Need help getting started?</Text>
    <Text style={styles.featureDescription}>
      Chat with the CareConnect Assistant anytime for guidance.
    </Text>
  </View>
  <Text style={styles.chevron}>›</Text>
</View>

<Text style={styles.privacyTitle}>🔒 Your privacy is important.</Text>
<Text style={styles.privacyText}>
  Your information is secure and never shared.
</Text>
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
    paddingVertical: 40,
    alignItems: 'center',
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.softMint,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primaryGreen,
  },

  brand: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primaryGreen,
    marginBottom: 30,
  },

  title: {
    fontSize: 46,
    fontWeight: '800',
    color: colors.primaryGreen,
    textAlign: 'center',
    lineHeight: 54,
    marginBottom: 24,
  },

  subtitle: {
    fontSize: 20,
    color: colors.grayText,
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 36,
  },

  primaryButton: {
    width: '100%',
    backgroundColor: colors.primaryGreen,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 16,
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '700',
  },

  secondaryButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.primaryGreen,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: colors.primaryGreen,
    fontSize: 24,
    fontWeight: '700',
  },
  dividerRow: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 30,
  marginBottom: 20,
},

line: {
  flex: 1,
  height: 1,
  backgroundColor: '#C7E8DD',
},

dividerText: {
  marginHorizontal: 10,
  color: colors.primaryGreen,
  fontSize: 16,
  fontWeight: '700',
},

heart: {
  color: colors.primaryGreen,
  fontSize: 28,
  marginRight: 10,
},

featureCard: {
  width: '100%',
  backgroundColor: colors.white,
  borderColor: colors.lightBorder,
  borderWidth: 1,
  borderRadius: 18,
  padding: 16,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 14,
},

featureIconCircle: {
  width: 62,
  height: 62,
  borderRadius: 31,
  backgroundColor: colors.softMint,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 16,
},

featureIcon: {
  fontSize: 28,
},

featureTextArea: {
  flex: 1,
},

featureTitle: {
  color: colors.primaryGreen,
  fontSize: 20,
  fontWeight: '800',
  marginBottom: 4,
},

featureDescription: {
  color: colors.darkText,
  fontSize: 15,
  lineHeight: 22,
},

helpCard: {
  width: '100%',
  backgroundColor: colors.softMint,
  borderColor: '#C7E8DD',
  borderWidth: 1,
  borderRadius: 18,
  padding: 16,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
  marginBottom: 24,
},

helpTitle: {
  color: colors.primaryGreen,
  fontSize: 20,
  fontWeight: '800',
  marginBottom: 4,
},

chevron: {
  color: colors.primaryGreen,
  fontSize: 42,
  fontWeight: '300',
},

privacyTitle: {
  color: colors.grayText,
  fontSize: 15,
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: 4,
},

privacyText: {
  color: colors.grayText,
  fontSize: 14,
  textAlign: 'center',
  marginBottom: 20,
},
});

export default LoginScreen;