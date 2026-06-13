import React, {useState} from 'react';
import {validateSignUpForm} from '../utils/validation';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../theme/colors';

type SignUpScreenProps = {
  onBack: () => void;
};

const SignUpScreen = ({onBack}: SignUpScreenProps) => {
      const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [communicationMethod, setCommunicationMethod] =
  useState('Text');
  const [hearingLevel, setHearingLevel] =
  useState('Moderate');
 
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
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subtitle}>
          Free, private, and takes less than two minutes.
        </Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
            style={styles.input}
            placeholder="e.g. Joyce Smith"
            value={fullName}
            onChangeText={setFullName}
        />

        <TextInput
            style={styles.input}
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />

        <TextInput
            style={styles.input}
            placeholder="At least 6 characters"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
        />

        <Text style={styles.sectionTitle}>Accessibility Preferences</Text>
        <Text style={styles.sectionSubtitle}>
          Tell us how you communicate best.
        </Text>

        <Text style={styles.smallLabel}>Preferred Communication Method</Text>

<View style={styles.choiceRow}>
  {[
    {icon: '💬', label: 'Text'},
    {icon: '👁', label: 'Visual Alerts'},
    {icon: '📳', label: 'Vibration Alerts'},
  ].map(item => (
    <TouchableOpacity
      key={item.label}
      style={[
        styles.choiceCard,
        communicationMethod === item.label && styles.selectedCard,
      ]}
      onPress={() => setCommunicationMethod(item.label)}>
      <Text style={styles.choiceIcon}>{item.icon}</Text>
      <Text style={styles.choiceText}>{item.label}</Text>
    </TouchableOpacity>
  ))}
</View>

        <Text style={styles.smallLabel}>Hearing Support Level</Text>

<View style={styles.levelRow}>
  {['Mild', 'Moderate', 'Severe'].map(level => (
    <TouchableOpacity
      key={level}
      style={[
        styles.levelCard,
        hearingLevel === level && styles.selectedCard,
      ]}
      onPress={() => setHearingLevel(level)}>
      <Text style={styles.levelIcon}>👂</Text>
      <Text style={styles.levelText}>{level}</Text>
    </TouchableOpacity>
  ))}
</View>

        <TouchableOpacity
  style={styles.createButton}
  onPress={() =>
    setMessage(
      validateSignUpForm({
        fullName,
        email,
        password,
        confirmPassword,
   }) +
      `\n\nCommunication: ${communicationMethod}\nHearing Level: ${hearingLevel}`,
    )
  }>
  <Text style={styles.createButtonText}>Create Account</Text>
</TouchableOpacity>

{message ? <Text style={styles.messageText}>{message}</Text> : null}

        <View style={styles.divider} />

        <TouchableOpacity onPress={onBack}>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>

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
    paddingVertical: 26,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  backText: {
    color: colors.primaryGreen,
    fontSize: 34,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.primaryGreen,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  brand: {
    textAlign: 'center',
    color: colors.primaryGreen,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 22,
  },
  title: {
    textAlign: 'center',
    color: colors.primaryGreen,
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: colors.darkText,
    fontSize: 16,
    marginBottom: 24,
  },
  label: {
    color: colors.darkText,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 18,
  },
  sectionTitle: {
    color: colors.darkText,
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: colors.grayText,
    fontSize: 14,
    marginBottom: 18,
  },
  smallLabel: {
    color: colors.darkText,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  choiceRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },
  choiceCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: colors.softMint,
    borderColor: colors.primaryGreen,
  },
  choiceIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  choiceText: {
    color: colors.darkText,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  levelRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  levelCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  levelIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  levelText: {
    color: colors.darkText,
    fontSize: 12,
    fontWeight: '700',
  },
  createButton: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  createButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 18,
  },
  signInText: {
    textAlign: 'center',
    color: colors.grayText,
    fontSize: 15,
    marginBottom: 22,
  },
  signInLink: {
    color: colors.primaryGreen,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  privacyTitle: {
    textAlign: 'center',
    color: colors.grayText,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4,
  },
  privacyText: {
    textAlign: 'center',
    color: colors.grayText,
    fontSize: 13,
    marginBottom: 20,
  },
  messageText: {
  textAlign: 'center',
  color: colors.primaryGreen,
  fontSize: 15,
  fontWeight: '700',
  marginBottom: 18,
},
});

export default SignUpScreen;