import React, { useMemo, useState } from 'react';
import styles from './HelpCenterScreen.module.css';

type Topic = { id: string; title: string; subtitle: string };

const DEFAULT_TOPICS: Topic[] = [
  { id: 't1', title: 'Managing Appointments', subtitle: 'Schedule, reschedule, or cancel your visits' },
  { id: 't2', title: 'Alerts & Notifications', subtitle: 'Manage your alerts and reminders' },
  { id: 't3', title: 'Messaging', subtitle: 'Send and receive messages with caregivers' },
  { id: 't4', title: 'Account & Profile', subtitle: 'Update your information and preferences' },
];

const CATEGORIES = ['FAQs', 'Video Guides', 'User Guides', 'Tips & Tricks', 'Contact Support'];

const HelpCenterScreen: React.FC = () => {
  const [q, setQ] = useState('');
  const [topics] = useState<Topic[]>(DEFAULT_TOPICS);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return topics;
    return topics.filter((t) => t.title.toLowerCase().includes(term) || t.subtitle.toLowerCase().includes(term));
  }, [q, topics]);

  return (
    <div className={styles.page}>
      <header className={styles.appbar} role="banner">
        <button aria-label="Open navigation menu" className={styles.iconBtn}>☰</button>
        <div className={styles.title}><div className={styles.logo}>CC</div><div className={styles.appName}>CareConnect</div></div>
        <div className={styles.actions}><button className={styles.iconBtn}>🔔</button><span className={styles.badge}>3</span></div>
      </header>

      <main className={styles.container}>
        <section className={styles.headerRow}>
          <div>
            <h1 className={styles.h1}>Help Center</h1>
            <p className={styles.lead}>Find answers and get the support you need.</p>
          </div>
          <div className={styles.illustration} aria-hidden>🆘</div>
        </section>

        <div className={styles.searchRow}>
          <input
            aria-label="Search help center"
            placeholder="How can we help you?"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className={styles.searchInput}
            onKeyDown={(e) => { if (e.key === 'Enter') alert('Search: ' + q); }}
          />
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((c) => (
            <button key={c} className={styles.category} onClick={() => alert(c)}>
              <div className={styles.catIcon}>📄</div>
              <div className={styles.catLabel}>{c}</div>
            </button>
          ))}
        </div>

        <div className={styles.sectionHeader}>
          <h2>Popular Topics</h2>
          <button className={styles.linkBtn} onClick={() => alert('View all topics')}>View all &gt;</button>
        </div>

        <div className={styles.topicList}>
          {filtered.map((t) => (
            <div key={t.id} className={styles.topic} role="button" tabIndex={0} onClick={() => alert(t.title)}>
              <div className={styles.topicIcon}>📅</div>
              <div className={styles.topicBody}>
                <div className={styles.tTitle}>{t.title}</div>
                <div className={styles.tSub}>{t.subtitle}</div>
              </div>
              <div className={styles.chev}>›</div>
            </div>
          ))}
        </div>

        <div className={styles.helpBox}>
          <div>
            <div className={styles.hTitle}>Still need help?</div>
            <div className={styles.hSub}>Our support team is here for you.</div>
          </div>
          <div>
            <button className={styles.primary} onClick={() => alert('Start chat')}>Chat with Us</button>
            <div className={styles.contact}>Call: (512) 555-CARE • Email: support@careconnect.com</div>
          </div>
        </div>

        <h3>Featured Articles</h3>
        <div className={styles.articles}>
          <article className={styles.card}><div className={styles.img} style={{background:'#D4E8DC'}} /><div className={styles.cardBody}><div className={styles.cardTitle}>How to set up notifications</div><div className={styles.read}>3 min read</div></div></article>
          <article className={styles.card}><div className={styles.img} style={{background:'#E8D4F4'}} /><div className={styles.cardBody}><div className={styles.cardTitle}>Joining a video appointment</div><div className={styles.read}>4 min read</div></div></article>
          <article className={styles.card}><div className={styles.img} style={{background:'#D4E4F8'}} /><div className={styles.cardBody}><div className={styles.cardTitle}>Managing your hearing devices</div><div className={styles.read}>5 min read</div></div></article>
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

export default HelpCenterScreen;