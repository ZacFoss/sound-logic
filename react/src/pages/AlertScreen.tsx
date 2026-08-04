import React, { useState, useMemo } from 'react';
import styles from './AlertScreen.module.css';

const ALERT_TYPES = {
  REMINDER: 'Reminder',
  ALERT: 'Alert',
  MEDICATION: 'Medication Reminder',
};

const FILTERS = {
  ALL: 'All',
  UNREAD: 'Unread',
  REMINDERS: 'Reminders',
  UPDATES: 'Updates',
};

interface Alert {
  id: number;
  type: string;
  title: string;
  description: string;
  details?: string;
  time: string;
  category: string;
  unread: boolean;
}

const initialAlerts: Alert[] = [
  {
    id: 1,
    type: ALERT_TYPES.REMINDER,
    title: 'Hearing Check-Up Tomorrow',
    description: 'You have an appointment tomorrow.',
    details: 'May 15, 2025 | 10:00 AM | Hearing Wellness Center',
    time: '9:30 AM',
    category: 'Reminders',
    unread: true,
  },
  {
    id: 2,
    type: ALERT_TYPES.ALERT,
    title: 'New Message from Amy',
    description: 'Amy sent you a new message about your appointment.',
    time: '9:30 AM',
    category: 'Updates',
    unread: true,
  },
  {
    id: 3,
    type: ALERT_TYPES.MEDICATION,
    title: 'Take your medication',
    description: "Don't forget to take your medication.",
    time: '8:00 PM',
    category: 'Reminders',
    unread: false,
  },
];

const AlertScreen: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  const unreadCount = useMemo(() => alerts.filter((a) => a.unread).length, [alerts]);

  const filteredAlerts = useMemo(() => {
    switch (activeFilter) {
      case FILTERS.UNREAD:
        return alerts.filter((a) => a.unread);
      case FILTERS.REMINDERS:
        return alerts.filter((a) => a.category === 'Reminders');
      case FILTERS.UPDATES:
        return alerts.filter((a) => a.category === 'Updates');
      default:
        return alerts;
    }
  }, [alerts, activeFilter]);

  const markAsRead = (id: number) => {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, unread: false } : a)));
  };

  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header unreadCount={unreadCount} />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} unreadCount={unreadCount} />
        <section className={styles.alertsSection}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.alertsList}>
            {filteredAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} onMarkAsRead={markAsRead} />
            ))}
            {filteredAlerts.length === 0 && (
              <div className={styles.emptyState}>No alerts match your current filter.</div>
            )}
          </div>
        </section>
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
        <NavItem label="Alerts" active />
        <NavItem label="Appointments" />
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

function Header({ unreadCount }: { unreadCount: number }) {
  return (
    <header className={styles.header}>
      <div>
        <h1>Alerts &amp; Reminders</h1>
        <p className={styles.subtitle}>Stay informed and never miss what matters.</p>
      </div>
      <div className={styles.headerMeta}>
        <span className={styles.badge}>{unreadCount} unread</span>
      </div>
    </header>
  );
}

function FilterBar({
  activeFilter,
  setActiveFilter,
  unreadCount,
}: {
  activeFilter: string;
  setActiveFilter: (v: string) => void;
  unreadCount: number;
}) {
  return (
    <div className={styles.filterBar}>
      <FilterButton label="All" value={FILTERS.ALL} activeFilter={activeFilter} onClick={setActiveFilter} />
      <FilterButton label={`Unread (${unreadCount})`} value={FILTERS.UNREAD} activeFilter={activeFilter} onClick={setActiveFilter} />
      <FilterButton label="Reminders" value={FILTERS.REMINDERS} activeFilter={activeFilter} onClick={setActiveFilter} />
      <FilterButton label="Updates" value={FILTERS.UPDATES} activeFilter={activeFilter} onClick={setActiveFilter} />
    </div>
  );
}

function FilterButton({
  label,
  value,
  activeFilter,
  onClick,
}: {
  label: string;
  value: string;
  activeFilter: string;
  onClick: (v: string) => void;
}) {
  const isActive = activeFilter === value;
  return (
    <button
      className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
}

function AlertCard({ alert, onMarkAsRead }: { alert: Alert; onMarkAsRead: (id: number) => void }) {
  return (
    <article className={`${styles.alertCard} ${alert.unread ? styles.alertUnread : ''}`}>
      <div className={styles.alertHeader}>
        <span className={styles.alertType}>{alert.type}</span>
        <span className={styles.alertTime}>{alert.time}</span>
      </div>
      <h3 className={styles.alertTitle}>{alert.title}</h3>
      <p className={styles.alertDescription}>{alert.description}</p>
      {alert.details && <p className={styles.alertDetails}>{alert.details}</p>}
      <div className={styles.alertFooter}>
        {alert.unread && (
          <button className={styles.markReadBtn} onClick={() => onMarkAsRead(alert.id)}>
            Mark as read
          </button>
        )}
      </div>
    </article>
  );
}

export default AlertScreen;
