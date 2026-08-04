import React, { useState } from 'react';
import styles from './AppointmentScreen.module.css';

const TABS = {
  UPCOMING: 'upcoming',
  PAST: 'past',
  CANCELLED: 'cancelled',
};

interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

interface AppointmentsData {
  upcoming: Appointment[];
  past: Appointment[];
  cancelled: Appointment[];
}

const appointmentsData: AppointmentsData = {
  upcoming: [
    {
      id: 1,
      title: 'Hearing Check-Up',
      date: 'May 15, 2025',
      time: '10:00 AM',
      location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
      status: 'Confirmed',
    },
    {
      id: 2,
      title: 'Hearing Aid Follow-Up',
      date: 'June 5, 2025',
      time: '2:00 PM',
      location: 'Hearing Wellness Center, 123 Health S., Suite 100, Austin, TX',
      status: 'Confirmed',
    },
  ],
  past: [
    {
      id: 3,
      title: 'Hearing Test',
      date: 'April 10, 2025',
      time: '9:00 AM',
      location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Hearing Test',
      date: 'April 10, 2025',
      time: '9:00 AM',
      location: 'Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701',
      status: 'Cancelled',
    },
  ],
  cancelled: [],
};

const AppointmentScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TABS.UPCOMING);

  const upcomingCount = appointmentsData.upcoming.length;
  const currentAppointments = appointmentsData[activeTab as keyof AppointmentsData];

  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header upcomingCount={upcomingCount} />
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} upcomingCount={upcomingCount} />
        <AppointmentsSection activeTab={activeTab} appointments={currentAppointments} />
      </main>
    </div>
  );
};

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>CareConnect</div>
      <nav className={styles.nav}>
        <NavItem label="Home" />
        <NavItem label="Messages" />
        <NavItem label="Alerts" />
        <NavItem label="Appointments" active />
        <NavItem label="Profile" />
      </nav>
      <button className={styles.preferencesBtn}>Manage your alert preferences</button>
    </aside>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}>{label}</div>
  );
}

function Header({ upcomingCount }: { upcomingCount: number }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>Appointments</h1>
        <p className={styles.subtitle}>View and manage your upcoming, past, and cancelled appointments.</p>
      </div>
      <div className={styles.headerActions}>
        <span className={styles.badge}>Upcoming: {upcomingCount}</span>
        <button className={styles.bookBtn}>Book Appointment</button>
      </div>
    </header>
  );
}

function TabBar({
  activeTab,
  setActiveTab,
  upcomingCount,
}: {
  activeTab: string;
  setActiveTab: (v: string) => void;
  upcomingCount: number;
}) {
  const tabButton = (label: string, value: string, count?: number) => (
    <button
      key={value}
      className={`${styles.tabBtn} ${activeTab === value ? styles.tabBtnActive : ''}`}
      onClick={() => setActiveTab(value)}
    >
      {count !== undefined ? `${label} (${count})` : label}
    </button>
  );

  return (
    <div className={styles.tabBar}>
      {tabButton('Upcoming', TABS.UPCOMING, upcomingCount)}
      {tabButton('Past', TABS.PAST)}
      {tabButton('Cancelled', TABS.CANCELLED)}
    </div>
  );
}

function AppointmentsSection({
  activeTab,
  appointments,
}: {
  activeTab: string;
  appointments: Appointment[];
}) {
  const titleMap: Record<string, string> = {
    [TABS.UPCOMING]: 'Upcoming Appointments',
    [TABS.PAST]: 'Past Appointments',
    [TABS.CANCELLED]: 'Cancelled Appointments',
  };

  return (
    <section className={styles.appointmentsSection}>
      <h2 className={styles.sectionTitle}>{titleMap[activeTab]}</h2>
      {appointments.length === 0 && activeTab === TABS.CANCELLED && (
        <div className={styles.infoBox}>
          Need to reschedule or cancel? Please contact the clinic directly or visit our Help Center
          for more information.
        </div>
      )}
      <div className={styles.appointmentsList}>
        {appointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} activeTab={activeTab} />
        ))}
        {appointments.length === 0 && activeTab !== TABS.CANCELLED && (
          <div className={styles.emptyState}>No appointments in this category.</div>
        )}
      </div>
    </section>
  );
}

function AppointmentCard({
  appointment,
  activeTab,
}: {
  appointment: Appointment;
  activeTab: string;
}) {
  const statusClass: Record<string, string> = {
    confirmed: styles.statusConfirmed,
    completed: styles.statusCompleted,
    cancelled: styles.statusCancelled,
  };

  return (
    <article className={styles.appointmentCard}>
      <div className={styles.appointmentHeader}>
        <h3 className={styles.appointmentTitle}>{appointment.title}</h3>
        <span className={`${styles.statusPill} ${statusClass[appointment.status.toLowerCase()] ?? ''}`}>
          {appointment.status}
        </span>
      </div>
      <p className={styles.appointmentDateTime}>{appointment.date} • {appointment.time}</p>
      <p className={styles.appointmentLocation}>{appointment.location}</p>
      {activeTab === TABS.UPCOMING && (
        <button className={styles.calendarBtn}>Add to Calendar</button>
      )}
    </article>
  );
}

export default AppointmentScreen;
