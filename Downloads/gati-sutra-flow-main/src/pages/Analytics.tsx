import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  PieChart,
  Activity,
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import { weeklyTrends, hourlyTrafficData, congestionByZone } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const COLORS = ['hsl(180, 70%, 45%)', 'hsl(142, 76%, 36%)', 'hsl(45, 93%, 47%)', 'hsl(199, 89%, 48%)', 'hsl(280, 60%, 50%)'];

// Pune-specific AI insights
const aiInsights = [
  { metric: 'Hinjewadi Delay', change: '+18 min', description: 'Evening rush extends beyond 8 PM', trend: 'negative' as const },
  { metric: 'Avg Commute Time', change: '33 min/10km', description: 'Pune ranks 3rd globally in congestion', trend: 'negative' as const },
  { metric: 'Metro Impact', change: '-18%', description: 'Purple Line reducing road congestion', trend: 'positive' as const },
  { metric: 'Accident Reduction', change: '-15%', description: 'AI alerts improving response times', trend: 'positive' as const },
];

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-display font-bold gati-gradient-text">
            Pune Analytics & Insights
          </h1>
          <p className="text-muted-foreground text-sm">
            AI-powered traffic analytics for Pune Smart City
          </p>
        </div>
        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
          Data: Last 7 Days (Simulated)
        </Badge>
      </motion.div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiInsights.map((insight, index) => (
          <motion.div
            key={insight.metric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="gati-card p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{insight.metric}</span>
              {insight.trend === 'positive' ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : insight.trend === 'negative' ? (
                <TrendingDown className="h-4 w-4 text-destructive" />
              ) : (
                <Activity className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <p className={`text-2xl font-display font-bold ${insight.trend === 'positive' ? 'text-success' : insight.trend === 'negative' ? 'text-destructive' : 'text-primary'}`}>
              {insight.change}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{insight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Trends */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <BarChart3 className="h-5 w-5 text-primary" />
              Weekly Traffic Trends - Pune
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="congestion" fill="hsl(180, 70%, 45%)" radius={[4, 4, 0, 0]} name="Congestion %" />
                  <Bar dataKey="accidents" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} name="Accidents" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Friday sees highest congestion due to weekend travel rush
            </p>
          </CardContent>
        </Card>

        {/* Congestion by Zone - Pune specific */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <PieChart className="h-5 w-5 text-primary" />
              Congestion by Pune Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={congestionByZone}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {congestionByZone.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {congestionByZone.map((zone, index) => (
                <div key={zone.name} className="flex items-center gap-1.5 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-muted-foreground">{zone.name}</span>
                  <span className="font-medium">{zone.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hourly Pattern */}
        <Card className="gati-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Activity className="h-5 w-5 text-primary" />
              24-Hour Traffic Pattern - Pune
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyTrafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(v) => `${v / 1000}k`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="vehicles"
                    stroke="hsl(180, 70%, 45%)"
                    strokeWidth={2}
                    dot={false}
                    name="Vehicles"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="avgSpeed"
                    stroke="hsl(142, 76%, 36%)"
                    strokeWidth={2}
                    dot={false}
                    name="Avg Speed (km/h)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1 rounded-full bg-primary" />
                <span className="text-muted-foreground">Vehicle Count</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-1 rounded-full bg-success" />
                <span className="text-muted-foreground">Avg Speed (km/h)</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Peak congestion: 8-10 AM (IT office rush) and 6-8 PM (Hinjewadi exit)
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsPage;
