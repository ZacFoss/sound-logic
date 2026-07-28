import { useState } from "react";
import "./styles.css";

const TABS = {
  UPCOMING: "upcoming",
  PAST: "past",
  CANCELLED: "cancelled",
};

const appointmentsData = {
  upcoming: [
    {
      id: 1,
      title: "Hearing Check-Up",
      date: "May 15, 2025",
      time: "10:00 AM",
      location: "Hearing Wellness Center, 123 Health St., Sutin, TX 78701",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Hearing Aid Follow-Up",
      date: "June 5, 2025",
      time: "2:00 PM",
      location: "Hearing Wellness Center, 123 Health S., Suite 100, Austin, TX",
      status: "Confirmed",
    },
  ],
  past: [
    {
      id: 3,
      title: "Hearing Test",
      date: "April 10, 2025",
      time: "9:00 AM",
      location:
        "Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701",
      status: "Completed",
    },
    {
      id: 4,
      title: "Hearing Test",
      date: "April 10, 2025",
      time: "9:00 AM",
      location:
        "Hearing Wellness Center, 123 Health St., Suite 100, Austin, TX 78701",
      status: "Cancelled",
    },
  ],
  cancelled: [],
};

export default function App() {
  const [activeTab, setActiveTab] = useState(TABS.UPCOMING);

  const upcomingCount = appointmentsData.upcoming.length;

  const currentAppointments = appointmentsData[activeTab];

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header upcomingCount={upcomingCount} />
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} upcomingCount={upcomingCount} />
        <AppointmentsSection activeTab={activeTab} appointments={currentAppointments} />
      </main>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">CareConnect</div>
      <nav className="nav">
        <NavItem label="Home" />
        <NavItem label="Messages" />
        <NavItem label="Alerts" />
        <NavItem label="Appointments" active />
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

function Header({ upcomingCount }) {
  return (
    <header className="header">
      <div>
        <h1>Appointments</h1>
        <p className="subtitle">
          View and manage your upcoming, past, and cancelled appointments.
        </p>
      </div>
      <div className="header-actions">
        <span className="badge">Upcoming: {upcomingCount}</span>
        <button className="book-btn">Book Appointment</button>
      </div>
    </header>
  );
}

function TabBar({ activeTab, setActiveTab, upcomingCount }) {
  const tabButton = (label, value, count) => (
    <button
      className={`tab-btn ${activeTab === value ? "tab-btn-active" : ""}`}
      onClick={() => setActiveTab(value)}
    >
      {count !== undefined ? `${label} (${count})` : label}
    </button>
  );

  return (
    <div className="tab-bar">
      {tabButton("Upcoming", TABS.UPCOMING, upcomingCount)}
      {tabButton("Past", TABS.PAST)}
      {tabButton("Cancelled", TABS.CANCELLED)}
    </div>
  );
}

function AppointmentsSection({ activeTab, appointments }) {
  const titleMap = {
    [TABS.UPCOMING]: "Upcoming Appointments",
    [TABS.PAST]: "Past Appointments",
    [TABS.CANCELLED]: "Cancelled Appointments",
  };

  return (
    <section className="appointments-section">
      <h2 className="section-title">{titleMap[activeTab]}</h2>
      {appointments.length === 0 && activeTab === TABS.CANCELLED && (
        <div className="info-box">
          Need to reschedule or cancel? Please contact the clinic directly or
          visit our Help Center for more information.
        </div>
      )}
      <div className="appointments-list">
        {appointments.map((appt) => (
          <AppointmentCard key={appt.id} appointment={appt} activeTab={activeTab} />
        ))}
        {appointments.length === 0 && activeTab !== TABS.CANCELLED && (
          <div className="empty-state">No appointments in this category.</div>
        )}
      </div>
    </section>
  );
}

function AppointmentCard({ appointment, activeTab }) {
  const showAddToCalendar = activeTab === TABS.UPCOMING;

  return (
    <article className="appointment-card">
      <div className="appointment-header">
        <h3 className="appointment-title">{appointment.title}</h3>
        <span className={`status-pill status-${appointment.status.toLowerCase()}`}>
          {appointment.status}
        </span>
      </div>
      <p className="appointment-date-time">
        {appointment.date} • {appointment.time}
      </p>
      <p className="appointment-location">{appointment.location}</p>
      {showAddToCalendar && (
        <button className="calendar-btn">Add to Calendar</button>
      )}
    </article>
  );
}
