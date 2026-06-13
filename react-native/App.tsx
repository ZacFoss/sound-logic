import React, {useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import StatusScreen from './src/screens/StatusScreen';
import SignUpScreen from './src/screens/SignUpScreen';

function App() {
  const [screen, setScreen] = useState<'login' | 'status' | 'signup'>('login');

  if (screen === 'status') {
    return <StatusScreen onBack={() => setScreen('login')} />;
  }

  if (screen === 'signup') {
    return <SignUpScreen onBack={() => setScreen('login')} />;
  }

  return (
    <LoginScreen
      onGetStarted={() => setScreen('status')}
      onSignIn={() => setScreen('signup')}
    />
  );
}

export default App;