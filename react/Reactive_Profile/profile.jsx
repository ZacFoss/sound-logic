import { useState } from "react";
import "./styles.css";

export default function App() {
  const [profile] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(512) 555-1234",
    avatar: "https://via.placeholder.com/80",
  });

  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header />
        <ProfileHeader profile={profile} />
        <SectionGroup />
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
        <NavItem label="Appointments" />
        <NavItem label="Profile" active />
      </nav>
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

function Header() {
  return (
    <header className="header">
      <h1>My Profile</h1>
      <div className="header-icons">
        <div className="bell">
          🔔
          <span className="badge">2</span>
        </div>
      </div>
    </header>
  );
}

function ProfileHeader({ profile }) {
  return (
    <div className="profile-header">
      <img src={profile.avatar} alt="avatar" className="avatar" />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </div>
      <button className="edit-btn">Edit Profile</button>
    </div>
  );
}

function SectionGroup() {
  return (
    <div className="sections">
      <Section
        title="Account & Security"
        items={[
          { label: "Account Information", desc: "Update your personal details" },
          { label: "Password & Security", desc: "Change your password and security settings" },
          { label: "Sign In & Biometrics", desc: "Manage how you sign in to your account" },
        ]}
      />

      <Section
        title="Preferences"
        items={[
          { label: "Notification Preferences", desc: "Choose how and when you want to be notified" },
          { label: "Accessibility", desc: "Customize text size, contrast, and more" },
          { label: "Language", desc: "Choose your preferred language (English)" },
        ]}
      />

      <Section
        title="Support & Resources"
        items={[
          { label: "Help Center", desc: "Get help and find answers" },
          { label: "Log Out", desc: "Sign out of your account" },
        ]}
      />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      <div className="section-items">
        {items.map((item, i) => (
          <div key={i} className="section-item">
            <h4>{item.label}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
