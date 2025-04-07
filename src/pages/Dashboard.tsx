
import React from "react";
import { Camera, BarChart2, AlertTriangle, MapPin, Bell } from "lucide-react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import AlertsSection from "../components/AlertsSection";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from "recharts";

const detectionsData = [
  { name: "Apr", elephant: 12, lion: 8, zebra: 22, rhino: 5 },
  { name: "May", elephant: 18, lion: 12, zebra: 28, rhino: 10 },
  { name: "Jun", elephant: 14, lion: 7, zebra: 32, rhino: 8 },
  { name: "Jul", elephant: 22, lion: 14, zebra: 42, rhino: 12 },
  { name: "Aug", elephant: 28, lion: 16, zebra: 38, rhino: 14 },
  { name: "Sep", elephant: 24, lion: 18, zebra: 36, rhino: 16 },
];

const incidentsData = [
  { name: "Mon", incidents: 4 },
  { name: "Tue", incidents: 3 },
  { name: "Wed", incidents: 7 },
  { name: "Thu", incidents: 5 },
  { name: "Fri", incidents: 9 },
  { name: "Sat", incidents: 2 },
  { name: "Sun", incidents: 3 },
];

const mockAlerts = [
  {
    id: 1,
    title: "Elephant detected in restricted area",
    message: "Camera 05 detected elephant movement in zone B, which is marked as a restricted area.",
    timestamp: "10 min ago",
    severity: "high",
    read: false,
  },
  {
    id: 2,
    title: "Possible poaching activity",
    message: "Unusual human movement detected near the southern perimeter. Security dispatched.",
    timestamp: "25 min ago",
    severity: "high",
    read: false,
  },
  {
    id: 3,
    title: "Lion pride moved to water area",
    message: "The main pride has moved to the eastern watering hole. 8 individuals identified.",
    timestamp: "1 hour ago",
    severity: "medium",
    read: true,
  },
  {
    id: 4,
    title: "Drone battery low",
    message: "Drone #3 battery at 15%. Returning to base for recharge.",
    timestamp: "3 hours ago",
    severity: "low",
    read: true,
  },
] as { id: number; title: string; message: string; timestamp: string; severity: 'high' | 'medium' | 'low'; read: boolean; }[];

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-green-900/80 to-emerald-700/90">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-gray-800/60 px-6 py-4 bg-black/20 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-black/30">
                <Bell size={20} />
              </button>
              <span className="text-gray-300">|</span>
              <p className="text-gray-200">Welcome, Wildlife Ranger</p>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-green-900/80 to-emerald-700/90">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Animals Detected"
                value="1,248"
                color="purple"
                icon={<Camera size={20} className="text-white" />}
              />
              <StatCard
                title="Species Monitored"
                value="24"
                color="blue"
                icon={<BarChart2 size={20} className="text-white" />}
              />
              <StatCard
                title="Active Alerts"
                value="8"
                color="pink"
                icon={<Bell size={20} className="text-white" />}
              />
              <StatCard
                title="Reported Incidents"
                value="32"
                subvalue="this month"
                color="teal"
                icon={<AlertTriangle size={20} className="text-white" />}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Wildlife Detection Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={detectionsData}>
                      <defs>
                        <linearGradient id="colorElephant" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9b5de5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#9b5de5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorLion" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f15bb5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f15bb5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorZebra" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#00b4d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRhino" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00f5d4" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#00f5d4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#343957', color: 'white' }} />
                      <Area type="monotone" dataKey="elephant" stroke="#9b5de5" fillOpacity={1} fill="url(#colorElephant)" />
                      <Area type="monotone" dataKey="lion" stroke="#f15bb5" fillOpacity={1} fill="url(#colorLion)" />
                      <Area type="monotone" dataKey="zebra" stroke="#00b4d8" fillOpacity={1} fill="url(#colorZebra)" />
                      <Area type="monotone" dataKey="rhino" stroke="#00f5d4" fillOpacity={1} fill="url(#colorRhino)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Weekly Incidents</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={incidentsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#343957" vertical={false} />
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#343957' }} />
                      <Bar dataKey="incidents" fill="#00b4d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AlertsSection alerts={mockAlerts} />
              
              <div className="glass-card rounded-xl overflow-hidden border border-white/10">
                <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-teal/80 to-wildlife-teal/40"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <MapPin className="mr-2" size={20} />
                    Monitoring Zones
                  </h3>
                  
                  <div className="bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
                    <div className="relative aspect-video">
                      <img 
                        src="/lovable-uploads/c1b3e7be-43e2-44fa-8d5a-06416526e0d7.png"
                        alt="Wildlife monitoring zones"
                        className="object-cover w-full h-full opacity-70"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center bg-black/50 p-4 rounded-lg">
                          <p className="text-white">Interactive map would be displayed here</p>
                          <p className="text-sm text-gray-300">Showing 5 active monitoring zones</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex flex-wrap gap-2">
                      <div className="px-3 py-1 rounded-full bg-wildlife-purple/20 text-wildlife-purple text-xs font-medium">
                        Zone A: Active
                      </div>
                      <div className="px-3 py-1 rounded-full bg-wildlife-blue/20 text-wildlife-blue text-xs font-medium">
                        Zone B: Active
                      </div>
                      <div className="px-3 py-1 rounded-full bg-wildlife-pink/20 text-wildlife-pink text-xs font-medium">
                        Zone C: Active
                      </div>
                      <div className="px-3 py-1 rounded-full bg-wildlife-teal/20 text-wildlife-teal text-xs font-medium">
                        Zone D: Active
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gray-600/20 text-gray-400 text-xs font-medium">
                        Zone E: Offline
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
