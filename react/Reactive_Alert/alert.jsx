import React, { useState, useMemo } from "react";
import "./styles.css";

const ALERT_TYPES = {
  REMINDER: "Reminder",
  ALERT: "Alert",
  MEDICATION: "Medication Reminder",
};

const FILTERS = {
  ALL: "All",
  UNREAD: "Unread",
  REMINDERS: "Reminders",
  UPDATES: "Updates",
};

const initialAlerts = [
  {
    id: 1,
    type: ALERT_TYPES.REMINDER,
    title: "Hearing Check-Up Tomorrow",
    description: "You have an appointment tomorrow.",
    details: "May 15, 2025 | 10:00 AM | Hearing Wellness Center",
    time: "9:30 AM",
    category: "Reminders",
    unread: true,
  },
  {
    id: 2,
    type: ALERT_TYPES.ALERT,
    title: "New Message from Amy",
    description: "Amy sent you a new message about your appointment.",
    time: "9:30 AM",
    category: "Updates",
    unread: true,
  },
  {
    id: 3,
    type: ALERT_TYPES.MEDICATION,
    title: "Take your medication",
    description: "Don’t forget to take your medication.",
    time: "8:00 PM",
    category: "Reminders",
    unread: false,
  },
];

function App() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  const unreadCount = useMemo(
    () => alerts.filter((a) => a.unread).length,
    [alerts]
  );

  const filteredAlerts = useMemo(() => {
    switch (activeFilter) {
      case FILTERS.UNREAD:
        return alerts.filter((a) => a.unread);
      case FILTERS.REMINDERS:
        return alerts.filter((a) => a.category === "Reminders");
      case FILTERS.UPDATES:
        return alerts.filter((a) => a.category === "Updates");
      default:
        return alerts;
    }
  }, [alerts, activeFilter]);

  const markAsRead = (id) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              unread: false,
            }
          : a
      )
    );
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header unreadCount={unreadCount} />
        <FilterBar
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          unreadCount={unreadCount}
        />
        <section className="alerts-section">
          <h2 className="section-title">Today</h2>
          <div className="alerts-list">
            {filteredAlerts.map((alert) => (
              <AlertCard
                key={alert.id}
                alert={alert}
                onMarkAsRead={markAsRead}
              />
            ))}
            {filteredAlerts.length === 0 && (
              <div className="empty-state">
                No alerts match your current filter.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">CareConnect</div>
      <nav className="nav">
        <NavItem label="Home" active />
        <NavItem label="Messages" />
        <NavItem label="Alerts" />
        <NavItem label="Appointments" />
        <NavItem label="Profile" />
      </nav>
      <button className="preferences-btn">
        Manage your alert preferences
      </button>
    </aside>
  );
}

function NavItem({ label, active }) {
  return (
    <div className={`nav-item ${active ? "nav-item-active" : ""}`}>
      {label}
    </div>
  );
}

function Header({ unreadCount }) {
  return (
    <header className="header">
      <div>
        <h1>Alerts &amp; Reminders</h1>
        <p className="subtitle">Stay informed and never miss what matters.</p>
      </div>
      <div className="header-meta">
        <span className="badge">
          {unreadCount} unread
        </span>
      </div>
    </header>
  );
}

function FilterBar({ activeFilter, setActiveFilter, unreadCount }) {
  return (
    <div className="filter-bar">
      <FilterButton
        label="All"
        value={FILTERS.ALL}
        activeFilter={activeFilter}
        onClick={setActiveFilter}
      />
      <FilterButton
        label={`Unread (${unreadCount})`}
        value={FILTERS.UNREAD}
        activeFilter={activeFilter}
        onClick={setActiveFilter}
      />
      <FilterButton
        label="Reminders"
        value={FILTERS.REMINDERS}
        activeFilter={activeFilter}
        onClick={setActiveFilter}
      />
      <FilterButton
        label="Updates"
        value={FILTERS.UPDATES}
        activeFilter={activeFilter}
        onClick={setActiveFilter}
      />
    </div>
  );
}

function FilterButton({ label, value, activeFilter, onClick }) {
  const isActive = activeFilter === value;
  return (
    <button
      className={`filter-btn ${isActive ? "filter-btn-active" : ""}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
}

function AlertCard({ alert, onMarkAsRead }) {
  return (
    <article
      className={`alert-card ${alert.unread ? "alert-unread" : ""}`}
    >
      <div className="alert-header">
        <span className="alert-type">{alert.type}</span>
        <span className="alert-time">{alert.time}</span>
      </div>
      <h3 className="alert-title">{alert.title}</h3>
      <p className="alert-description">{alert.description}</p>
      {alert.details && (
        <p className="alert-details">{alert.details}</p>
      )}
      <div className="alert-footer">
        {alert.unread && (
          <button
            className="mark-read-btn"
            onClick={() => onMarkAsRead(alert.id)}
          >
            Mark as read
          </button>
        )}
      </div>
    </article>
  );
}

export default App;
