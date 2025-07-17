import React, { useState } from 'react';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { AuthScreen } from './components/screens/AuthScreen';
import { Layout } from './components/Layout';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { CampaignsScreen } from './components/screens/CampaignsScreen';
import { EarningsScreen } from './components/screens/EarningsScreen';
import { NotificationsScreen } from './components/screens/NotificationsScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
export function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Handle authentication
  const handleAuth = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };
  // Handle screen navigation
  const navigateTo = screen => {
    setCurrentScreen(screen);
  };
  // Show onboarding and auth screens if not authenticated
  if (!isAuthenticated) {
    if (currentScreen === 'onboarding') {
      return <OnboardingScreen onComplete={() => setCurrentScreen('auth')} />;
    }
    return <AuthScreen onAuth={handleAuth} />;
  }
  // Render main app with bottom navigation
  return <Layout currentScreen={currentScreen} navigateTo={navigateTo}>
      {currentScreen === 'dashboard' && <DashboardScreen />}
      {currentScreen === 'campaigns' && <CampaignsScreen />}
      {currentScreen === 'earnings' && <EarningsScreen />}
      {currentScreen === 'notifications' && <NotificationsScreen />}
      {currentScreen === 'profile' && <ProfileScreen />}
    </Layout>;
}