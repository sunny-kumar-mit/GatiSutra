import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Dashboard from '@/pages/Dashboard';
import TrafficControl from '@/pages/TrafficControl';
import EmergencyPage from '@/pages/Emergency';
import PollutionPage from '@/pages/Pollution';
import EventsPage from '@/pages/Events';
import AnalyticsPage from '@/pages/Analytics';
import PublicView from '@/pages/PublicView';
import SettingsPage from '@/pages/Settings';
import NotFound from '@/pages/NotFound';

const queryClient = new QueryClient();

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const sidebarWidth = sidebarCollapsed ? 72 : 256;

  // Initialize dark mode
  useEffect(() => {
    const stored = localStorage.getItem('gati-theme');
    const prefersDark = stored === 'dark' || (!stored);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Sidebar
              isCollapsed={sidebarCollapsed}
              onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <Header sidebarWidth={sidebarWidth} />
            <main
              className="pt-16 transition-all duration-300"
              style={{ marginLeft: sidebarWidth }}
            >
              <div className="p-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/traffic" element={<TrafficControl />} />
                  <Route path="/emergency" element={<EmergencyPage />} />
                  <Route path="/pollution" element={<PollutionPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/public" element={<PublicView />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
