import { useState, useMemo } from "react";
import "./styles.css";

const FILTERS = {
  ALL: "all",
  CAREGIVERS: "caregivers",
  PROVIDERS: "providers",
  FAMILY: "family",
  UNREAD: "unread",
};

const initialMessages = [
  {
    id: 1,
    name: "Amy Johnson",
    role: "Caregiver",
    preview: "Hi Sarah! Just a reminder about your appointment tomorrow at 10 AM.",
    time: "9:30 AM",
    category: "caregivers",
    unread: true,
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    role: "Provider",
    preview: "Your hearing test results are ready. Let me know if you have questions.",
    time: "Yesterday",
    category: "providers",
    unread: false,
  },
  {
    id: 3,
    name: "Linda Smith",
    role: "Family",
    preview: "Mom, how are you feeling today? Call me if you need anything!",
    time: "May 12",
    category: "family",
    unread: false,
  },
  {
    id: 4,
    name: "CareConnect Support",
    role: "Support",
    preview: "Thank you for reaching out.",
    time: "May 10",
    category: "support",
    unread: false,
  },
];

export default function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [search, setSearch] = useState("");

  const unreadCount = messages.filter(m => m.unread).length;

  const filteredMessages = useMemo(() => {
    return messages.filter(m => {
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
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header unreadCount={unreadCount} />
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} unreadCount={unreadCount} />
        <MessageList messages={filteredMessages} />
        <AccessibilityNote />
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
        <NavItem label="Messages" active />
        <NavItem label="Alerts" />
        <NavItem label="Appointments" />
        <NavItem label="Profile" />
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

function Header({ unreadCount }) {
  return (
    <header className="header">
      <div>
        <h1>Messages</h1>
        <p className="subtitle">Stay in touch with your caregivers and providers.</p>
      </div>
      <button className="new-msg-btn">New Message</button>
    </header>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search messages"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
}

function FilterBar({ filter, setFilter, unreadCount }) {
  const btn = (label, value) => (
    <button
      className={`filter-btn ${filter === value ? "active" : ""}`}
      onClick={() => setFilter(value)}
    >
      {label}
    </button>
  );

  return (
    <div className="filter-bar">
      {btn("All", FILTERS.ALL)}
      {btn("Caregivers", FILTERS.CAREGIVERS)}
      {btn("Providers", FILTERS.PROVIDERS)}
      {btn("Family", FILTERS.FAMILY)}
      {btn(`Unread (${unreadCount})`, FILTERS.UNREAD)}
    </div>
  );
}

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map(msg => (
        <MessageCard key={msg.id} msg={msg} />
      ))}
      {messages.length === 0 && (
        <div className="empty-state">No messages match your search or filter.</div>
      )}
    </div>
  );
}

function MessageCard({ msg }) {
  return (
    <div className={`message-card ${msg.unread ? "unread" : ""}`}>
      <div className="msg-header">
        <h3 className="msg-name">{msg.name}</h3>
        <span className="msg-time">{msg.time}</span>
      </div>
      <p className="msg-role">{msg.role}</p>
      <p className="msg-preview">{msg.preview}</p>
    </div>
  );
}

function AccessibilityNote() {
  return (
    <div className="access-note">
      <p>
        Need to communicate in a different way? Use Live Caption, Visual Alerts,
        or Voice Messages in your Accessibility Settings.
      </p>
      <button className="settings-btn">Go to Settings</button>
    </div>
  );
}
