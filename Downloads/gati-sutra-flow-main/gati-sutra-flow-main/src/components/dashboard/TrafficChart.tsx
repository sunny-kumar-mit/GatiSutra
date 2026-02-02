import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { hourlyTrafficData } from '@/lib/mockData';

export function TrafficChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="gati-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold">Traffic Flow Today</h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="text-muted-foreground">Vehicles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-success/60" />
            <span className="text-muted-foreground">Avg Speed</span>
          </div>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hourlyTrafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="vehicleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(180, 70%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(180, 70%, 45%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="speedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="hour"
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Area
              type="monotone"
              dataKey="vehicles"
              stroke="hsl(180, 70%, 45%)"
              strokeWidth={2}
              fill="url(#vehicleGradient)"
            />
            <Area
              type="monotone"
              dataKey="avgSpeed"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={2}
              fill="url(#speedGradient)"
              yAxisId={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
