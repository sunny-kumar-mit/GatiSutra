# GatiSutra | Smart AI Traffic Management System

<div align="center">

**An intelligent, AI-powered traffic management platform for Pune Smart City**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Modules](#-key-modules)
- [Screenshots](#-screenshots)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**GatiSutra** is a comprehensive Smart City Traffic Management System designed specifically for **Pune, Maharashtra**. It leverages AI and real-time data to optimize traffic flow, manage emergencies, monitor air quality, and promote sustainable transportation across the city.

### Why GatiSutra?

Pune is ranked as the **3rd most congested city in the world**. GatiSutra addresses this challenge by:

- **Real-time Traffic Monitoring** across 18 major junctions
- **AI-Powered Signal Optimization** to reduce congestion
- **Emergency Green Corridors** for ambulances, fire trucks, and police vehicles
- **Air Quality Monitoring** with AQI-based traffic restrictions
- **Stolen Vehicle Detection** and rash driving alerts
- **Predictive Analytics** for traffic forecasting
- **Public Transport Integration** (Pune Metro, PMPML)

---

## ✨ Features

### 🚦 Traffic Control Center
- **18 Real Pune Junctions** with live status monitoring
- **AI Auto Mode** for intelligent signal optimization
- **Manual Override** for individual junction control
- **Congestion Level Tracking** with color-coded indicators
- **Real-time Vehicle Count** and wait time analytics

### 🚨 Emergency Response
- **Green Corridor Management** for emergency vehicles
- **Live Vehicle Tracking** (Ambulance, Fire, Police)
- **Route Optimization** via FC Road, JM Road corridors
- **Pune Hospital Integration** (Sassoon, Ruby Hall, KEM, etc.)
- **ETA Predictions** and priority-based routing

### 🌿 Pollution & Sustainability
- **Real-time AQI Monitoring** across Pune zones
- **Pollutant Breakdown** (PM2.5, PM10, NO₂, O₃, CO)
- **Zone-wise AQI** for Hinjewadi, Hadapsar, Koregaon Park, etc.
- **Green Initiatives Tracking** (Pune Metro, EV Charging Network)
- **Heavy Vehicle Restrictions** during high AQI

### 🔍 Advanced Analytics
- **Traffic Predictions** with confidence scores
- **Hourly Traffic Patterns** and weekly trends
- **Zone-wise Congestion Analysis**
- **Accident Hotspot Identification**
- **Performance Metrics Dashboard**

### 🎯 Smart Alerts
- **Accident Detection** with multi-vehicle tracking
- **Rash Driving Alerts** with vehicle number plate recognition
- **Stolen Vehicle Detection** via CCTV integration
- **Event Management** (Ganesh Visarjan, marathons, etc.)
- **Severity-based Prioritization** (Low, Medium, High, Critical)

### 👁️ Public View
- **Citizen-facing Dashboard** for real-time traffic updates
- **Route Planning** with congestion avoidance
- **Public Transport Status** (Metro, Bus)
- **AQI Information** for health awareness

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion 12.30.0** - Smooth animations
- **Lucide React** - Beautiful icon library

### Routing & State
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Server state management

### Maps & Visualization
- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 5.0.0** - React bindings for Leaflet
- **Recharts 2.15.4** - Data visualization charts

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **PostCSS & Autoprefixer** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16+ and **npm** v7+ installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd gati-sutra-flow-main
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > **Note:** The `--legacy-peer-deps` flag is required due to React version compatibility with `react-leaflet`. This is already configured in `.npmrc`.

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at **http://localhost:5173** (or the next available port).

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |

---

## 📁 Project Structure

```
gati-sutra-flow-main/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── dashboard/       # Dashboard-specific widgets
│   │   │   ├── AQIWidget.tsx
│   │   │   ├── AlertsPanel.tsx
│   │   │   ├── CityMap.tsx
│   │   │   ├── EmergencyPanel.tsx
│   │   │   ├── JunctionGrid.tsx
│   │   │   ├── PredictionWidget.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   └── TrafficChart.tsx
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Top navigation bar
│   │   ├── Sidebar.tsx      # Side navigation menu
│   │   ├── ThemeToggle.tsx  # Light/Dark mode toggle
│   │   └── NavLink.tsx      # Navigation link component
│   ├── pages/               # Route pages
│   │   ├── Dashboard.tsx    # Main traffic control center
│   │   ├── TrafficControl.tsx  # Junction management
│   │   ├── Emergency.tsx    # Emergency vehicle tracking
│   │   ├── Pollution.tsx    # AQI & sustainability
│   │   ├── Events.tsx       # Event management
│   │   ├── Analytics.tsx    # Traffic analytics
│   │   ├── PublicView.tsx   # Citizen-facing view
│   │   ├── Settings.tsx     # System settings
│   │   └── NotFound.tsx     # 404 page
│   ├── lib/
│   │   ├── mockData.ts      # Pune-specific mock data
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & Tailwind
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── .npmrc                   # npm configuration
└── README.md                # This file
```

---

## 🔑 Key Modules

### 1. Traffic Control Dashboard
**File:** `src/pages/Dashboard.tsx`

Displays real-time overview of Pune's traffic system:
- Live stats (52,890 vehicles, avg speed 24 km/h)
- Interactive city map with junction markers
- Active alerts panel
- Traffic flow charts
- AQI widget
- Emergency vehicle panel
- AI predictions

### 2. Junction Management
**File:** `src/pages/TrafficControl.tsx`

Manage 18 Pune traffic junctions:
- Swargate Bus Stand, Hinjewadi IT Park, Kharadi Bypass
- Shivajinagar, Katraj Chowk, FC Road Junction
- AI Auto Mode vs Manual Control
- Signal timing adjustments
- Congestion level visualization

### 3. Emergency Response System
**File:** `src/pages/Emergency.tsx`

Green corridor management:
- Track PUNE-108 ambulances, PMC Fire trucks, Police PCR
- Route visualization (Koregaon Park → Sassoon Hospital)
- Signal clearance automation
- Hospital network integration
- Priority-based routing

### 4. Pollution Monitoring
**File:** `src/pages/Pollution.tsx`

Air quality and sustainability:
- Real-time AQI for Pune (current: 118 - Moderate)
- Zone-wise monitoring (Hinjewadi, Hadapsar, Aundh, etc.)
- Pollutant breakdown (PM2.5, PM10, NO₂, O₃, CO)
- Green initiatives (Pune Metro, EV charging, AQI-based restrictions)

### 5. Mock Data System
**File:** `src/lib/mockData.ts`

Comprehensive Pune-specific data:
- 18 real junction coordinates
- Emergency vehicle fleet
- AQI data and pollutant levels
- Traffic predictions
- Hourly/weekly traffic patterns
- Alert system (accidents, congestion, stolen vehicles)

---

## 🎨 Screenshots

> **Note:** Add screenshots of your application here to showcase the UI.

---

## ⚙️ Configuration

### Theme Configuration
The application supports **Light** and **Dark** modes. Default is set to **Light mode**.

**Toggle theme:** Click the sun/moon icon in the header.

**Customize theme:** Edit `src/index.css` to modify color tokens:
```css
:root {
  --primary: 180 70% 35%;      /* Teal primary color */
  --gati-gradient-start: 180 70% 35%;
  --gati-gradient-end: 200 80% 45%;
  /* ... more tokens */
}
```

### Map Configuration
**Default center:** Pune city center (18.5204°N, 73.8567°E)

Update in `src/lib/mockData.ts`:
```typescript
export const cityCenter = { lat: 18.5204, lng: 73.8567 };
```

### Environment Variables
Create a `.env` file for API keys (if integrating real APIs):
```env
VITE_MAPS_API_KEY=your_api_key_here
VITE_TRAFFIC_API_URL=https://api.example.com
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Pune Smart City** for inspiration
- **shadcn/ui** for beautiful components
- **Leaflet** for mapping capabilities
- **Lovable.dev** for initial project scaffolding

---

## 📞 Contact

**GatiSutra Team**

- **Project Repository:** [GitHub](https://github.com/sunny-kumar-mit/GatiSutra)
- **Issues:** [Report a bug](https://github.com/sunny-kumar-mit/GatiSutra/issues)

---

<div align="center">

**Built with ❤️ for Pune Smart City**

*Making Pune's roads safer, cleaner, and more efficient*

</div>
