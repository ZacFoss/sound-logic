import React, { useState, useMemo } from 'react';
import styles from './MessageScreen.module.css';

const FILTERS = {
  ALL: 'all',
  CAREGIVERS: 'caregivers',
  PROVIDERS: 'providers',
  FAMILY: 'family',
  UNREAD: 'unread',
};

interface Message {
  id: number;
  name: string;
  role: string;
  preview: string;
  time: string;
  category: string;
  unread: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: 'Amy Johnson',
    role: 'Caregiver',
    preview: 'Hi Sarah! Just a reminder about your appointment tomorrow at 10 AM.',
    time: '9:30 AM',
    category: 'caregivers',
    unread: true,
  },
  {
    id: 2,
    name: 'Dr. Michael Lee',
    role: 'Provider',
    preview: 'Your hearing test results are ready. Let me know if you have questions.',
    time: 'Yesterday',
    category: 'providers',
    unread: false,
  },
  {
    id: 3,
    name: 'Linda Smith',
    role: 'Family',
    preview: 'Mom, how are you feeling today? Call me if you need anything!',
    time: 'May 12',
    category: 'family',
    unread: false,
  },
  {
    id: 4,
    name: 'CareConnect Support',
    role: 'Support',
    preview: 'Thank you for reaching out.',
    time: 'May 10',
    category: 'support',
    unread: false,
  },
];

const MessageScreen: React.FC = () => {
  const [messages] = useState<Message[]>(initialMessages);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [search, setSearch] = useState('');

  const unreadCount = messages.filter((m) => m.unread).length;

  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      const matchesFilter =
        filter === FILTERS.ALL ||
        (filter === FILTERS.UNREAD && m.unread) ||
        m.category === filter;

      const matchesSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.preview.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [messages, filter, search]);

  return (
    <div className={styles.appShell}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} unreadCount={unreadCount} />
        <MessageList messages={filteredMessages} />
        <AccessibilityNote />
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
        <NavItem label="Messages" active />
        <NavItem label="Alerts" />
        <NavItem label="Appointments" />
        <NavItem label="Profile" />
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
      <div>
        <h1>Messages</h1>
        <p className={styles.subtitle}>Stay in touch with your caregivers and providers.</p>
      </div>
      <button className={styles.newMsgBtn}>New Message</button>
    </header>
  );
}

function SearchBar({ search, setSearch }: { search: string; setSearch: (v: string) => void }) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        placeholder="Search messages"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

function FilterBar({
  filter,
  setFilter,
  unreadCount,
}: {
  filter: string;
  setFilter: (v: string) => void;
  unreadCount: number;
}) {
  const btn = (label: string, value: string) => (
    <button
      key={value}
      className={`${styles.filterBtn} ${filter === value ? styles.filterBtnActive : ''}`}
      onClick={() => setFilter(value)}
    >
      {label}
    </button>
  );

  return (
    <div className={styles.filterBar}>
      {btn('All', FILTERS.ALL)}
      {btn('Caregivers', FILTERS.CAREGIVERS)}
      {btn('Providers', FILTERS.PROVIDERS)}
      {btn('Family', FILTERS.FAMILY)}
      {btn(`Unread (${unreadCount})`, FILTERS.UNREAD)}
    </div>
  );
}

function MessageList({ messages }: { messages: Message[] }) {
  return (
    <div className={styles.messageList}>
      {messages.map((msg) => (
        <MessageCard key={msg.id} msg={msg} />
      ))}
      {messages.length === 0 && (
        <div className={styles.emptyState}>No messages match your search or filter.</div>
      )}
    </div>
  );
}

function MessageCard({ msg }: { msg: Message }) {
  return (
    <div className={`${styles.messageCard} ${msg.unread ? styles.messageUnread : ''}`}>
      <div className={styles.msgHeader}>
        <h2 className={styles.msgName}>{msg.name}</h2>
        <span className={styles.msgTime}>{msg.time}</span>
      </div>
      <p className={styles.msgRole}>{msg.role}</p>
      <p className={styles.msgPreview}>{msg.preview}</p>
    </div>
  );
}

function AccessibilityNote() {
  return (
    <div className={styles.accessNote}>
      <p>
        Need to communicate in a different way? Use Live Caption, Visual Alerts, or Voice Messages
        in your Accessibility Settings.
      </p>
      <button className={styles.settingsBtn}>Go to Settings</button>
    </div>
  );
}

export default MessageScreen;
