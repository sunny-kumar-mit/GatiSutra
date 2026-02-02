import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Database, Palette, Globe, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-display font-bold gati-gradient-text">
          Settings
        </h1>
        <p className="text-muted-foreground text-sm">
          Configure system preferences and automation rules
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Configure alert preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Critical Alerts</Label>
                <p className="text-xs text-muted-foreground">Accidents, emergencies</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Congestion Warnings</Label>
                <p className="text-xs text-muted-foreground">When congestion exceeds 80%</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>AQI Alerts</Label>
                <p className="text-xs text-muted-foreground">Pollution threshold breaches</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Sound Notifications</Label>
                <p className="text-xs text-muted-foreground">Audio alerts for critical events</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Automation Rules */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Settings className="h-5 w-5 text-primary" />
              Automation
            </CardTitle>
            <CardDescription>AI-powered automation settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto Signal Optimization</Label>
                <p className="text-xs text-muted-foreground">AI adjusts signals automatically</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Emergency Auto-Corridor</Label>
                <p className="text-xs text-muted-foreground">Create green corridors automatically</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>AQI-Based Restrictions</Label>
                <p className="text-xs text-muted-foreground">Auto-restrict heavy vehicles</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Predictive Rerouting</Label>
                <p className="text-xs text-muted-foreground">Suggest routes before congestion</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Thresholds */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Shield className="h-5 w-5 text-primary" />
              Thresholds
            </CardTitle>
            <CardDescription>Alert and action thresholds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Congestion Alert Threshold (%)</Label>
              <Input type="number" defaultValue={75} className="bg-muted/50" />
            </div>
            <div className="space-y-2">
              <Label>AQI Alert Threshold</Label>
              <Input type="number" defaultValue={150} className="bg-muted/50" />
            </div>
            <div className="space-y-2">
              <Label>Emergency Response Time (min)</Label>
              <Input type="number" defaultValue={10} className="bg-muted/50" />
            </div>
          </CardContent>
        </Card>

        {/* Display */}
        <Card className="gati-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Palette className="h-5 w-5 text-primary" />
              Display
            </CardTitle>
            <CardDescription>Interface preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Map Style</Label>
              <Select defaultValue="dark">
                <SelectTrigger className="bg-muted/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="satellite">Satellite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Data Refresh Rate</Label>
              <Select defaultValue="5">
                <SelectTrigger className="bg-muted/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 seconds</SelectItem>
                  <SelectItem value="10">10 seconds</SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Show Animations</Label>
                <p className="text-xs text-muted-foreground">Smooth transitions</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* System Info */}
        <Card className="gati-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <Database className="h-5 w-5 text-primary" />
              System Information
            </CardTitle>
            <CardDescription>Demo system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-xs text-muted-foreground">Version</p>
                <p className="font-medium">1.0.0 Demo</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-medium text-success">Online</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-xs text-muted-foreground">Data Mode</p>
                <p className="font-medium">Simulated</p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30">
                <p className="text-xs text-muted-foreground">AI Engine</p>
                <p className="font-medium">GatiSutra AI v1</p>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="gati-gradient text-white">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
