import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccessibilityScreen from './pages/AccessibilityScreen';
import HelpCenterScreen from './pages/HelpCenterScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <header style={{padding:10}}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/help">Help</Link> | <Link to="/accessibility">Accessibility</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/help" element={<HelpCenterScreen />} />
        <Route path="/accessibility" element={<AccessibilityScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
