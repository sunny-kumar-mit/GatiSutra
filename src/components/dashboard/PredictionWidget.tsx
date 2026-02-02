import { motion } from 'framer-motion';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';
import { trafficPredictions } from '@/lib/mockData';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function PredictionWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="gati-card p-5 gati-border-glow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="font-display font-semibold">AI Traffic Prediction</h3>
        </div>
        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
          Simulated
        </Badge>
      </div>

      <div className="space-y-3">
        {trafficPredictions.map((prediction, index) => {
          const isIncreasing = index > 0 && prediction.congestionLevel > trafficPredictions[index - 1].congestionLevel;
          const congestionColor =
            prediction.congestionLevel < 50
              ? 'text-success'
              : prediction.congestionLevel < 75
              ? 'text-warning'
              : 'text-destructive';

          return (
            <motion.div
              key={prediction.time}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 text-sm font-medium">{prediction.time}</div>
                <div className="flex items-center gap-1.5">
                  {isIncreasing ? (
                    <TrendingUp className="h-4 w-4 text-destructive" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-success" />
                  )}
                  <span className={cn('font-semibold', congestionColor)}>
                    {prediction.congestionLevel}%
                  </span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {prediction.confidence}% confidence
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Based on historical data, weather, and current conditions
      </p>
    </motion.div>
  );
}
