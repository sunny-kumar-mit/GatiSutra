// Mock data for GatiSutra Smart Traffic Management System - Pune City

export interface Junction {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'green' | 'yellow' | 'red';
  congestionLevel: number; // 0-100
  avgSpeed: number; // km/h
  vehicleCount: number;
  waitTime: number; // seconds
}

export interface Alert {
  id: string;
  type: 'accident' | 'congestion' | 'aqi' | 'emergency' | 'event' | 'rash_driving' | 'stolen_vehicle';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  location: string;
  timestamp: Date;
  isActive: boolean;
}

export interface EmergencyVehicle {
  id: string;
  type: 'ambulance' | 'fire' | 'police';
  callSign: string;
  currentLocation: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  status: 'responding' | 'en_route' | 'on_scene' | 'returning';
  eta: number; // minutes
  priority: number;
}

export interface AQIData {
  current: number;
  pm25: number;
  pm10: number;
  no2: number;
  o3: number;
  co: number;
  status: 'good' | 'moderate' | 'unhealthy' | 'hazardous';
  lastUpdated: Date;
}

export interface TrafficPrediction {
  time: string;
  congestionLevel: number;
  confidence: number;
}

export interface TrafficStats {
  totalVehicles: number;
  avgSpeed: number;
  totalAccidents: number;
  emergencyResponses: number;
  greenCorridorsActive: number;
  congestionReduction: number;
}

// City center coordinates - Pune, Maharashtra, India
export const cityCenter = { lat: 18.5204, lng: 73.8567 };

// Pune's 18 Famous Traffic Hotspots with actual coordinates
export const junctions: Junction[] = [
  // Swargate - Major bus terminus, extremely congested
  { id: 'j1', name: 'Swargate Bus Stand', lat: 18.5018, lng: 73.8636, status: 'red', congestionLevel: 92, avgSpeed: 8, vehicleCount: 645, waitTime: 210 },
  
  // Hinjewadi IT Park - Major tech hub
  { id: 'j2', name: 'Hinjewadi IT Park', lat: 18.5912, lng: 73.7380, status: 'red', congestionLevel: 88, avgSpeed: 12, vehicleCount: 567, waitTime: 180 },
  
  // Kharadi Bypass - Eastern IT corridor
  { id: 'j3', name: 'Kharadi Bypass', lat: 18.5535, lng: 73.9406, status: 'yellow', congestionLevel: 65, avgSpeed: 25, vehicleCount: 342, waitTime: 55 },
  
  // Shivajinagar - Central business district
  { id: 'j4', name: 'Shivajinagar ST Stand', lat: 18.5308, lng: 73.8475, status: 'yellow', congestionLevel: 72, avgSpeed: 18, vehicleCount: 423, waitTime: 85 },
  
  // Pune-Satara Road (Katraj)
  { id: 'j5', name: 'Katraj Chowk', lat: 18.4575, lng: 73.8675, status: 'red', congestionLevel: 85, avgSpeed: 14, vehicleCount: 498, waitTime: 145 },
  
  // FC Road & JM Road intersection
  { id: 'j6', name: 'FC Road Junction', lat: 18.5237, lng: 73.8410, status: 'yellow', congestionLevel: 58, avgSpeed: 22, vehicleCount: 287, waitTime: 48 },
  
  // Senapati Bapat Road
  { id: 'j7', name: 'Senapati Bapat Marg', lat: 18.5362, lng: 73.8297, status: 'yellow', congestionLevel: 62, avgSpeed: 20, vehicleCount: 312, waitTime: 52 },
  
  // Sinhagad Road
  { id: 'j8', name: 'Sinhagad Road Chowk', lat: 18.4898, lng: 73.8247, status: 'red', congestionLevel: 78, avgSpeed: 15, vehicleCount: 412, waitTime: 95 },
  
  // Pune-Nagar Road (Wagholi side)
  { id: 'j9', name: 'Pune-Nagar Road', lat: 18.5707, lng: 73.9700, status: 'yellow', congestionLevel: 55, avgSpeed: 28, vehicleCount: 245, waitTime: 42 },
  
  // Hadapsar-Solapur Road
  { id: 'j10', name: 'Hadapsar Junction', lat: 18.5089, lng: 73.9260, status: 'yellow', congestionLevel: 68, avgSpeed: 22, vehicleCount: 356, waitTime: 65 },
  
  // Karve Road (Kothrud)
  { id: 'j11', name: 'Karve Road', lat: 18.5074, lng: 73.8077, status: 'green', congestionLevel: 35, avgSpeed: 38, vehicleCount: 178, waitTime: 22 },
  
  // Paud Road
  { id: 'j12', name: 'Paud Phata', lat: 18.5150, lng: 73.7936, status: 'green', congestionLevel: 42, avgSpeed: 32, vehicleCount: 198, waitTime: 28 },
  
  // Bajirao Road
  { id: 'j13', name: 'Bajirao Road', lat: 18.5160, lng: 73.8553, status: 'yellow', congestionLevel: 52, avgSpeed: 25, vehicleCount: 267, waitTime: 38 },
  
  // Neelayam Chowk
  { id: 'j14', name: 'Neelayam Chowk', lat: 18.4856, lng: 73.8512, status: 'red', congestionLevel: 82, avgSpeed: 12, vehicleCount: 445, waitTime: 125 },
  
  // Wakad Bridge
  { id: 'j15', name: 'Wakad Bridge', lat: 18.5950, lng: 73.7650, status: 'yellow', congestionLevel: 60, avgSpeed: 24, vehicleCount: 298, waitTime: 50 },
  
  // Nashik Phata (Pimpri-Chinchwad)
  { id: 'j16', name: 'Nashik Phata', lat: 18.6298, lng: 73.7997, status: 'yellow', congestionLevel: 58, avgSpeed: 26, vehicleCount: 278, waitTime: 45 },
  
  // Bund Garden Road
  { id: 'j17', name: 'Bund Garden Road', lat: 18.5370, lng: 73.8850, status: 'green', congestionLevel: 38, avgSpeed: 35, vehicleCount: 189, waitTime: 25 },
  
  // Viman Nagar
  { id: 'j18', name: 'Viman Nagar Chowk', lat: 18.5679, lng: 73.9143, status: 'green', congestionLevel: 32, avgSpeed: 40, vehicleCount: 156, waitTime: 18 },
];

export const alerts: Alert[] = [
  {
    id: 'a1',
    type: 'accident',
    severity: 'high',
    title: 'Multi-vehicle collision on NH-48',
    description: '4 vehicles involved near Chandni Chowk flyover. Traffic diverted via Bavdhan.',
    location: 'Chandni Chowk, Kothrud',
    timestamp: new Date(Date.now() - 15 * 60000),
    isActive: true,
  },
  {
    id: 'a2',
    type: 'congestion',
    severity: 'critical',
    title: 'Severe congestion at Swargate',
    description: 'Expected delay of 35 minutes. Use Metro or alternate routes via Sarasbaug.',
    location: 'Swargate Bus Terminus',
    timestamp: new Date(Date.now() - 5 * 60000),
    isActive: true,
  },
  {
    id: 'a3',
    type: 'aqi',
    severity: 'high',
    title: 'AQI exceeds safe limit in Hadapsar',
    description: 'AQI at 165. Heavy vehicle restrictions in effect. Construction dust control activated.',
    location: 'Hadapsar Industrial Area',
    timestamp: new Date(Date.now() - 30 * 60000),
    isActive: true,
  },
  {
    id: 'a4',
    type: 'emergency',
    severity: 'critical',
    title: 'Emergency corridor active',
    description: 'Ambulance en route to Sassoon Hospital. Green corridor via FC Road → JM Road.',
    location: 'Koregaon Park → Sassoon Hospital',
    timestamp: new Date(Date.now() - 2 * 60000),
    isActive: true,
  },
  {
    id: 'a5',
    type: 'event',
    severity: 'medium',
    title: 'Ganesh Visarjan procession',
    description: 'Multiple pandals procession towards Lakdi Pool. Traffic diversions planned.',
    location: 'Deccan to Lakdi Pool',
    timestamp: new Date(Date.now() - 60 * 60000),
    isActive: true,
  },
  {
    id: 'a6',
    type: 'rash_driving',
    severity: 'medium',
    title: 'Rash driving detected on ORR',
    description: 'Vehicle MH-12-AB-4567 flagged for lane violations and overspeeding at 95 km/h.',
    location: 'Outer Ring Road, Wakad',
    timestamp: new Date(Date.now() - 8 * 60000),
    isActive: true,
  },
  {
    id: 'a7',
    type: 'stolen_vehicle',
    severity: 'high',
    title: 'Stolen vehicle spotted',
    description: 'Vehicle MH-14-XY-9012 spotted on CCTV. Patrol units notified.',
    location: 'Hinjewadi Phase 2 Entry',
    timestamp: new Date(Date.now() - 12 * 60000),
    isActive: true,
  },
  {
    id: 'a8',
    type: 'congestion',
    severity: 'high',
    title: 'IT Park exit congestion',
    description: 'Hinjewadi Phase 1-3 exits heavily congested. 45-min delay expected.',
    location: 'Hinjewadi IT Park',
    timestamp: new Date(Date.now() - 3 * 60000),
    isActive: true,
  },
];

export const emergencyVehicles: EmergencyVehicle[] = [
  {
    id: 'ev1',
    type: 'ambulance',
    callSign: 'PUNE-108-A',
    currentLocation: { lat: 18.5370, lng: 73.8850 }, // Koregaon Park
    destination: { lat: 18.5308, lng: 73.8475 }, // Sassoon Hospital
    status: 'en_route',
    eta: 6,
    priority: 1,
  },
  {
    id: 'ev2',
    type: 'fire',
    callSign: 'PMC-FIRE-01',
    currentLocation: { lat: 18.5089, lng: 73.9260 }, // Hadapsar
    destination: { lat: 18.5018, lng: 73.8636 }, // Swargate area
    status: 'responding',
    eta: 14,
    priority: 1,
  },
  {
    id: 'ev3',
    type: 'police',
    callSign: 'PCR-100',
    currentLocation: { lat: 18.5912, lng: 73.7380 }, // Hinjewadi
    destination: { lat: 18.5950, lng: 73.7650 }, // Wakad
    status: 'en_route',
    eta: 8,
    priority: 2,
  },
  {
    id: 'ev4',
    type: 'ambulance',
    callSign: 'PUNE-108-B',
    currentLocation: { lat: 18.4575, lng: 73.8675 }, // Katraj
    destination: { lat: 18.5074, lng: 73.8077 }, // KEM Hospital, Kothrud
    status: 'on_scene',
    eta: 0,
    priority: 1,
  },
  {
    id: 'ev5',
    type: 'police',
    callSign: 'TRAFFIC-PATROL-05',
    currentLocation: { lat: 18.5535, lng: 73.9406 }, // Kharadi
    destination: { lat: 18.5679, lng: 73.9143 }, // Viman Nagar
    status: 'returning',
    eta: 5,
    priority: 3,
  },
];

// Pune's moderate AQI data (typically moderate to unhealthy)
export const aqiData: AQIData = {
  current: 118,
  pm25: 48,
  pm10: 86,
  no2: 38,
  o3: 28,
  co: 1.4,
  status: 'moderate',
  lastUpdated: new Date(),
};

export const trafficPredictions: TrafficPrediction[] = [
  { time: '15 mins', congestionLevel: 72, confidence: 95 },
  { time: '30 mins', congestionLevel: 78, confidence: 91 },
  { time: '1 hour', congestionLevel: 65, confidence: 84 },
  { time: '2 hours', congestionLevel: 52, confidence: 76 },
];

// Pune is 3rd most congested city in the world - stats reflect this
export const trafficStats: TrafficStats = {
  totalVehicles: 52890,
  avgSpeed: 24, // Pune avg 33 mins for 10km = ~18-20 km/h during peak
  totalAccidents: 4,
  emergencyResponses: 15,
  greenCorridorsActive: 2,
  congestionReduction: 14,
};

export const hourlyTrafficData = [
  { hour: '00:00', vehicles: 3200, avgSpeed: 52 },
  { hour: '02:00', vehicles: 2100, avgSpeed: 58 },
  { hour: '04:00', vehicles: 1500, avgSpeed: 60 },
  { hour: '06:00', vehicles: 12000, avgSpeed: 42 },
  { hour: '08:00', vehicles: 38000, avgSpeed: 18 }, // Peak morning - IT office rush
  { hour: '10:00', vehicles: 42000, avgSpeed: 22 },
  { hour: '12:00', vehicles: 35000, avgSpeed: 28 },
  { hour: '14:00', vehicles: 32000, avgSpeed: 30 },
  { hour: '16:00', vehicles: 36000, avgSpeed: 24 },
  { hour: '18:00', vehicles: 48000, avgSpeed: 15 }, // Peak evening - IT exit rush
  { hour: '20:00', vehicles: 38000, avgSpeed: 28 },
  { hour: '22:00', vehicles: 18000, avgSpeed: 45 },
];

export const weeklyTrends = [
  { day: 'Mon', congestion: 78, accidents: 5 },
  { day: 'Tue', congestion: 74, accidents: 3 },
  { day: 'Wed', congestion: 76, accidents: 4 },
  { day: 'Thu', congestion: 75, accidents: 4 },
  { day: 'Fri', congestion: 88, accidents: 7 }, // Highest - weekend travel
  { day: 'Sat', congestion: 62, accidents: 3 },
  { day: 'Sun', congestion: 48, accidents: 2 },
];

// Pune-specific zone data for analytics
export const congestionByZone = [
  { name: 'Hinjewadi-Wakad', value: 28 },
  { name: 'Central Pune', value: 24 },
  { name: 'Kharadi-Hadapsar', value: 22 },
  { name: 'PCMC', value: 16 },
  { name: 'Katraj-Sinhagad', value: 10 },
];

export function getAQIStatus(aqi: number): 'good' | 'moderate' | 'unhealthy' | 'hazardous' {
  if (aqi <= 50) return 'good';
  if (aqi <= 100) return 'moderate';
  if (aqi <= 200) return 'unhealthy';
  return 'hazardous';
}

export function getAQILabel(status: string): string {
  const labels: Record<string, string> = {
    good: 'Good',
    moderate: 'Moderate',
    unhealthy: 'Unhealthy',
    hazardous: 'Hazardous',
  };
  return labels[status] || 'Unknown';
}

export function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}
