import React, { useState } from 'react';
import styles from './ProfileScreen.module.css';

interface Profile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

interface SectionItem {
  label: string;
  desc: string;
}

const ProfileScreen: React.FC = () => {
  const [profile] = useState<Profile>({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(512) 555-1234',
    avatar: 'https://via.placeholder.com/80',
  });

  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <ProfileHeader profile={profile} />
        <SectionGroup />
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
        <NavItem label="Appointments" />
        <NavItem label="Profile" active />
      </nav>
    </aside>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}>{label}</div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Profile</h1>
      <div className={styles.headerIcons}>
        <div className={styles.bell}>
          🔔
          <span className={styles.badge}>2</span>
        </div>
      </div>
    </header>
  );
}

function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className={styles.profileHeader}>
      <img src={profile.avatar} alt="avatar" className={styles.avatar} />
      <div className={styles.profileInfo}>
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
      </div>
      <button className={styles.editBtn}>Edit Profile</button>
    </div>
  );
}

function SectionGroup() {
  return (
    <div className={styles.sections}>
      <Section
        title="Account & Security"
        items={[
          { label: 'Account Information', desc: 'Update your personal details' },
          { label: 'Password & Security', desc: 'Change your password and security settings' },
          { label: 'Sign In & Biometrics', desc: 'Manage how you sign in to your account' },
        ]}
      />
      <Section
        title="Preferences"
        items={[
          { label: 'Notification Preferences', desc: 'Choose how and when you want to be notified' },
          { label: 'Accessibility', desc: 'Customize text size, contrast, and more' },
          { label: 'Language', desc: 'Choose your preferred language (English)' },
        ]}
      />
      <Section
        title="Support & Resources"
        items={[
          { label: 'Help Center', desc: 'Get help and find answers' },
          { label: 'Log Out', desc: 'Sign out of your account' },
        ]}
      />
    </div>
  );
}

function Section({ title, items }: { title: string; items: SectionItem[] }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.sectionItems}>
        {items.map((item, i) => (
          <div key={i} className={styles.sectionItem}>
            <h4>{item.label}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileScreen;
