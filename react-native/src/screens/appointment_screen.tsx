import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, AccessibilityInfo } from 'react-native';

const background = '#EAF7F4';
const accent = '#2BBFA5';
const text = '#9E9E9E';
const button = '#0F766E';

type Appointment = {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  group: 'Upcoming' | 'Past' | 'Cancelled';
};

const appointments: Appointment[] = [
  {
    id: '1',
    title: 'Hearing Check-Up',
    date: 'May 15, 2025 – 10:00 AM',
    location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
    status: 'Confirmed',
    group: 'Upcoming',
  },
  {
    id: '2',
    title: 'Hearing Aid Follow-Up',
    date: 'Jun 5, 2025 – 2:00 PM',
    location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
    status: 'Confirmed',
    group: 'Upcoming',
  },
  {
    id: '3',
    title: 'Hearing Test',
    date: 'Apr 10, 2025 – 9:00 AM',
    location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
    status: 'Completed',
    group: 'Past',
  },
  {
    id: '4',
    title: 'Hearing Consultation',
    date: 'Apr 2, 2025 – 11:00 AM',
    location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
    status: 'Cancelled',
    group: 'Cancelled',
  },
];

export const useScreenReader = (message: string, deps: any[] = []) => {
  useEffect(() => {
    if (message) {
      AccessibilityInfo.announceForAccessibility(message);
    }
  }, deps);
};

export default function AppointmentsScreen() {
  const renderCard = (item: Appointment) => (
    <View key={item.id} style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDetail}>{item.date}</Text>
      <Text style={styles.cardDetail}>{item.location}</Text>
      <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>

      {item.group === 'Upcoming' && (
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Calendar</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Header */}
        <Text style={styles.headerTitle}>Appointments</Text>
        <Text style={styles.headerSubtitle}>View and manage your upcoming and past appointments.</Text>

        {/* Book Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>

        {/* Tabs */}
        <View style={styles.tabs}>
          {['Upcoming (2)', 'Past', 'Cancelled'].map((tab) => (
            <TouchableOpacity key={tab} style={styles.tabButton}>
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming */}
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        {appointments.filter(a => a.group === 'Upcoming').map(renderCard)}

        {/* Past */}
        <Text style={styles.sectionTitle}>Past Appointments</Text>
        {appointments.filter(a => a.group === 'Past').map(renderCard)}

        {/* Cancelled */}
        <Text style={styles.sectionTitle}>Cancelled Appointments</Text>
        {appointments.filter(a => a.group === 'Cancelled').map(renderCard)}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Need to reschedule or cancel? Please contact the clinic directly or visit our Help Center for more information.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

function getStatusStyle(status: Appointment['status']) {
  switch (status) {
    case 'Confirmed':
      return { color: accent };
    case 'Completed':
      return { color: '#4CAF50' };
    case 'Cancelled':
      return { color: '#E53935' };
  }
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
  bookButton: {
    backgroundColor: button,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
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
    color: accent,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: accent,
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 16,
  },
  cardDetail: {
    color: text,
    marginTop: 4,
  },
  status: {
    marginTop: 8,
    fontWeight: '700',
  },
  addButton: {
    backgroundColor: button,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 12,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  footer: {
    marginTop: 20,
    padding: 16,
  },
  footerText: {
    color: text,
    textAlign: 'center',
  },
});
function useEffect(arg0: () => void, deps: any[]) {
  throw new Error('Function not implemented.');
}

