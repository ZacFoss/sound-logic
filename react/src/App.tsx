import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccessibilityScreen from './pages/AccessibilityScreen';
import AlertScreen from './pages/AlertScreen';
import AppointmentScreen from './pages/AppointmentScreen';
import HelpCenterScreen from './pages/HelpCenterScreen';
import HomeScreen from './pages/HomeScreen';
import MessageScreen from './pages/MessageScreen';
import ProfileScreen from './pages/ProfileScreen';

function App() {
  return (
    <BrowserRouter>
      <header style={{padding:10}}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/help">Help</Link> | <Link to="/accessibility">Accessibility</Link> | <Link to="/alerts">Alerts</Link> | <Link to="/appointments">Appointments</Link> | <Link to="/messages">Messages</Link> | <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/help" element={<HelpCenterScreen />} />
        <Route path="/accessibility" element={<AccessibilityScreen />} />
        <Route path="/alerts" element={<AlertScreen />} />
        <Route path="/appointments" element={<AppointmentScreen />} />
        <Route path="/messages" element={<MessageScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
