import React from 'react';
import styles from './HomeScreen.module.css';

const HomeScreen: React.FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.appbar}>
        <button aria-label="Open navigation menu" className={styles.iconBtn}>☰</button>
        <div className={styles.title}><img alt="CareConnect logo" className={styles.logoImg} /></div>
        <div className={styles.actions}><button className={styles.iconBtn}>🔔</button><span className={styles.badge}>3</span></div>
      </header>

      <main className={styles.container}>
        <section className={styles.greeting}>
          <div className={styles.avatar} aria-hidden>👤</div>
          <div className={styles.greetText}>
            <div className={styles.hello}>Hello, Sarah!</div>
            <div className={styles.sub}>Welcome back. You have <span className={styles.highlight}>3 new alerts</span> and <span className={styles.highlightPurple}>2 new messages</span></div>
          </div>
          <button className={styles.edit} aria-label="Edit profile">✎</button>
        </section>

        <h2>Today's Overview</h2>
        <div className={styles.overview}>
          <div className={styles.card}><div className={styles.cardIcon}>🔔</div><div className={styles.cardTitle}>Alerts<br/><strong>3 new</strong></div></div>
          <div className={styles.card}><div className={styles.cardIcon}>💬</div><div className={styles.cardTitle}>Messages<br/><strong>2 new</strong></div></div>
          <div className={styles.card}><div className={styles.cardIcon}>📅</div><div className={styles.cardTitle}>Appointments<br/><strong>1 upcoming</strong></div></div>
        </div>

        <div className={styles.appointment}>
          <div className={styles.apptHead}>
            <div className={styles.apptIcon}>📅</div>
            <div>
              <div className={styles.apptTitle}>Hearing Check-Up</div>
              <div className={styles.apptTime}>May 15, 2025 • 10:00 AM</div>
            </div>
          </div>
          <div className={styles.apptLocation}>Hearing Wellness Center</div>
          <div className={styles.apptActions}><button className={styles.outline} onClick={() => alert('View Details')}>View Details</button></div>
        </div>

        <h3>Quick Access</h3>
        <div className={styles.grid}>
          {[
            ['💬','Messages'],
            ['🔔','Alerts & Reminders'],
            ['📅','Appointments'],
            ['🎧','Hearing Support'],
            ['♿','Accessibility'],
            ['👤','Profile'],
          ].map(([icon,label]) => (
            <button key={label as string} className={styles.quick} onClick={() => alert(label as string)}>
              <div className={styles.quickIcon}>{icon}</div>
              <div>{label}</div>
            </button>
          ))}
        </div>

        <div className={styles.helpRow}>
          <div>
            <div className={styles.helpTitle}>Need help?</div>
            <div className={styles.helpSub}>Contact your caregiver or access support resources.</div>
          </div>
          <div className={styles.chev}>›</div>
        </div>
      </main>

      <nav className={styles.bottomNav}>
        <button className={styles.navItem}>Home</button>
        <button className={styles.navItem}>Messages</button>
        <button className={styles.navItem}>Alerts</button>
        <button className={styles.navItem}>Appointments</button>
        <button className={styles.navItem}>Profile</button>
      </nav>
    </div>
  );
};

export default HomeScreen;