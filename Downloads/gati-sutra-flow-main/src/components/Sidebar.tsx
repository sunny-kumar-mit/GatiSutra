import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  TrafficCone,
  Siren,
  Wind,
  Calendar,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/traffic', label: 'Traffic Control', icon: TrafficCone },
  { path: '/emergency', label: 'Emergency', icon: Siren },
  { path: '/pollution', label: 'Pollution & AQI', icon: Wind },
  { path: '/events', label: 'Events', icon: Calendar },
  { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  { path: '/public', label: 'Public View', icon: Users },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 72 : 256 }}
      className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-40 flex flex-col"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <motion.div
          initial={false}
          animate={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : 'auto' }}
          className="overflow-hidden whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gati-gradient flex items-center justify-center">
              <TrafficCone className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg gati-gradient-text">GatiSutra</h1>
              <p className="text-[10px] text-muted-foreground -mt-1">Predict. Prioritize. Protect.</p>
            </div>
          </div>
        </motion.div>
        {isCollapsed && (
          <div className="w-8 h-8 rounded-lg gati-gradient flex items-center justify-center mx-auto">
            <TrafficCone className="h-5 w-5 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full gati-gradient"
                />
              )}
              <item.icon
                className={cn(
                  'h-5 w-5 shrink-0 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                )}
              />
              <motion.span
                initial={false}
                animate={{
                  opacity: isCollapsed ? 0 : 1,
                  width: isCollapsed ? 0 : 'auto',
                }}
                className="overflow-hidden whitespace-nowrap text-sm font-medium"
              >
                {item.label}
              </motion.span>
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-2 border-t border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="w-full justify-center"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>

      {/* AI Badge */}
      <motion.div
        initial={false}
        animate={{ opacity: isCollapsed ? 0 : 1, height: isCollapsed ? 0 : 'auto' }}
        className="p-4 border-t border-sidebar-border overflow-hidden"
      >
        <div className="text-xs text-center text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered
          </span>
        </div>
      </motion.div>
    </motion.aside>
  );
}
