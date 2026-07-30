import React, { useEffect, useState } from 'react';
import styles from './AccessibilityScreen.module.css';

type TextSize = 'Small' | 'Medium' | 'Large' | 'Extra Large';

const LS_KEY = 'cc_accessibility_settings';

const defaultState = {
  highContrast: true,
  darkMode: false,
  colorEnhancement: true,
  voiceMessages: true,
  textSize: 'Medium' as TextSize,
};

const AccessibilityScreen: React.FC = () => {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : defaultState;
    } catch {
      return defaultState;
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  }, [state]);

  const setField = <K extends keyof typeof defaultState>(k: K, v: typeof defaultState[K]) =>
    setState((s) => ({ ...s, [k]: v }));

  return (
    <div className={styles.page}>
      <header className={styles.appbar} role="banner">
        <button aria-label="Open navigation menu" className={styles.iconBtn}>☰</button>
        <div className={styles.title}>
          <div className={styles.logo} aria-hidden>CC</div>
          <div className={styles.appName}>CareConnect</div>
        </div>
        <div className={styles.actions}>
          <button aria-label="Notifications" className={styles.iconBtn}>🔔</button>
          <span className={styles.badge}>3</span>
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.headerRow}>
          <button aria-label="Go back" className={styles.backBtn}>←</button>
          <div>
            <h1 className={styles.h1}>Accessibility</h1>
            <p className={styles.lead}>Customize your experience to meet your needs.</p>
          </div>
          <div className={styles.illustration} aria-hidden>♿</div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Display Settings</h2>

          <div className={styles.tile}>
            <div className={styles.tileLeft}>A</div>
            <div className={styles.tileBody}>
              <div className={styles.tileTitle}>Text Size</div>
              <div className={styles.tileSub}>Adjust the size of text throughout the app</div>
            </div>
            <div className={styles.tileRight}>
              <select
                aria-label="Text size"
                value={state.textSize}
                onChange={(e) => setField('textSize', e.target.value as TextSize)}
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </div>
          </div>

          <div className={styles.toggleRow}>
            <label className={styles.toggleLabel}>
              <div className={styles.toggleIcon}>☀️</div>
              <div className={styles.toggleBody}>
                <div className={styles.toggleTitle}>High Contrast</div>
                <div className={styles.toggleSub}>Increase contrast for better visibility</div>
              </div>
              <input
                type="checkbox"
                checked={state.highContrast}
                onChange={(e) => setField('highContrast', e.target.checked)}
                aria-checked={state.highContrast}
              />
            </label>

            <label className={styles.toggleLabel}>
              <div className={styles.toggleIcon}>🌙</div>
              <div className={styles.toggleBody}>
                <div className={styles.toggleTitle}>Dark Mode</div>
                <div className={styles.toggleSub}>Reduce eye strain in low light</div>
              </div>
              <input
                type="checkbox"
                checked={state.darkMode}
                onChange={(e) => setField('darkMode', e.target.checked)}
                aria-checked={state.darkMode}
              />
            </label>

            <label className={styles.toggleLabel}>
              <div className={styles.toggleIcon}>🎨</div>
              <div className={styles.toggleBody}>
                <div className={styles.toggleTitle}>Color Enhancement</div>
                <div className={styles.toggleSub}>Improve color visibility</div>
              </div>
              <input
                type="checkbox"
                checked={state.colorEnhancement}
                onChange={(e) => setField('colorEnhancement', e.target.checked)}
                aria-checked={state.colorEnhancement}
              />
            </label>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Communication Preferences</h2>

          <label className={styles.toggleLabel}>
            <div className={styles.toggleIcon}>💬</div>
            <div className={styles.toggleBody}>
              <div className={styles.toggleTitle}>Voice Messages</div>
              <div className={styles.toggleSub}>Send and receive voice messages</div>
            </div>
            <input
              type="checkbox"
              checked={state.voiceMessages}
              onChange={(e) => setField('voiceMessages', e.target.checked)}
              aria-checked={state.voiceMessages}
            />
          </label>

          <div className={styles.supportCard} role="region" aria-label="Accessibility support">
            <div>
              <div className={styles.supportTitle}>Need help with accessibility?</div>
              <div className={styles.supportSub}>Contact our support team for personalized assistance.</div>
            </div>
            <div>
              <button className={styles.outlineBtn} onClick={() => alert('Contacting support...')}>
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <nav className={styles.bottomNav} role="navigation" aria-label="Primary">
        <button className={styles.navItem}>Home</button>
        <button className={styles.navItem}>Messages</button>
        <button className={styles.navItem}>Alerts</button>
        <button className={styles.navItem}>Appointments</button>
        <button className={styles.navItem}>Profile</button>
      </nav>
    </div>
  );
};

export default AccessibilityScreen;