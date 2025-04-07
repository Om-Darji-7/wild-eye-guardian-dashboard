
import React from "react";
import Sidebar from "../components/Sidebar";
import { AlertTriangle, Bell, Camera, Eye, Filter, ToggleLeft, Map, Settings } from "lucide-react";

// Mock alerts for the page
const alertsData = [
  {
    id: 1,
    title: "Elephant detected in restricted area",
    message: "Camera 05 detected elephant movement in zone B, which is marked as a restricted area.",
    timestamp: "10 min ago",
    severity: "high",
    type: "boundary",
    camera: "Camera 05",
    location: "Zone B - Eastern Sector",
    read: false,
  },
  {
    id: 2,
    title: "Possible poaching activity",
    message: "Unusual human movement detected near the southern perimeter. Security dispatched.",
    timestamp: "25 min ago",
    severity: "high",
    type: "security",
    camera: "Drone 03",
    location: "Zone D - Southern Perimeter",
    read: false,
  },
  {
    id: 3,
    title: "Lion pride moved to water area",
    message: "The main pride has moved to the eastern watering hole. 8 individuals identified.",
    timestamp: "1 hour ago",
    severity: "medium",
    type: "movement",
    camera: "Camera 12",
    location: "Zone A - Eastern Watering Hole",
    read: true,
  },
  {
    id: 4,
    title: "Drone battery low",
    message: "Drone #3 battery at 15%. Returning to base for recharge.",
    timestamp: "3 hours ago",
    severity: "low",
    type: "system",
    camera: "Drone 03",
    location: "Zone C - Central Plains",
    read: true,
  },
  {
    id: 5,
    title: "Injured zebra detected",
    message: "Camera 08 has detected a zebra with a possible leg injury. Recommend inspection.",
    timestamp: "5 hours ago",
    severity: "medium",
    type: "health",
    camera: "Camera 08",
    location: "Zone B - Western Grasslands",
    read: true,
  },
  {
    id: 6,
    title: "New rhino calf spotted",
    message: "Camera 15 has detected a new rhino calf with mother. This is the third calf this year.",
    timestamp: "8 hours ago",
    severity: "low",
    type: "wildlife",
    camera: "Camera 15",
    location: "Zone A - Northern Hills",
    read: true,
  },
  {
    id: 7,
    title: "Potential boundary fence breach",
    message: "Sensors indicate potential damage to the fence in Section F-7. Maintenance team notified.",
    timestamp: "10 hours ago",
    severity: "high",
    type: "infrastructure",
    camera: "Sensor Array 04",
    location: "Zone E - Western Boundary",
    read: true,
  },
  {
    id: 8,
    title: "Unusual temperature spike",
    message: "Thermal cameras detect unusual heat signature in dense vegetation area. Possible fire risk.",
    timestamp: "12 hours ago",
    severity: "medium",
    type: "environmental",
    camera: "Thermal Camera 02",
    location: "Zone C - Southern Forest",
    read: true,
  },
] as const;

// Alert filter types
const alertTypes = [
  { value: "all", label: "All Alerts", icon: Bell },
  { value: "boundary", label: "Boundary Alerts", icon: Map },
  { value: "security", label: "Security Threats", icon: AlertTriangle },
  { value: "health", label: "Animal Health", icon: AlertTriangle },
  { value: "system", label: "System Alerts", icon: Settings },
];

const Alerts: React.FC = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "from-red-500/80 to-red-500/40";
      case "medium":
        return "from-amber-500/80 to-amber-500/40";
      case "low":
        return "from-green-500/80 to-green-500/40";
      default:
        return "from-gray-500/80 to-gray-500/40";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500/20 text-red-400";
      case "medium":
        return "bg-amber-500/20 text-amber-400";
      case "low":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="flex h-screen bg-wildlife-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-wildlife-dark-blue border-b border-gray-800 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Real-time Alerts</h1>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white bg-wildlife-pink">
                {alertsData.filter(a => !a.read).length} new
              </span>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-wildlife-blue hover:bg-wildlife-blue/80 text-white rounded-md text-sm">
                <Bell size={16} />
                Test Alert System
              </button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl overflow-hidden sticky top-6">
                <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-blue/80 to-wildlife-blue/40"></div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Filter className="mr-2" size={18} />
                    Filter Alerts
                  </h3>
                  
                  <div className="space-y-1 mb-4">
                    {alertTypes.map((type) => (
                      <button
                        key={type.value}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                          type.value === "all"
                            ? "bg-wildlife-blue text-white"
                            : "text-gray-400 hover:bg-gray-800"
                        }`}
                      >
                        <type.icon size={16} />
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 mt-4">
                    <h4 className="text-sm font-medium text-white mb-3">Priority Level</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">High Priority</span>
                        <ToggleLeft size={20} className="text-wildlife-purple" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Medium Priority</span>
                        <ToggleLeft size={20} className="text-wildlife-purple" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Low Priority</span>
                        <ToggleLeft size={20} className="text-wildlife-purple" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 mt-4">
                    <h4 className="text-sm font-medium text-white mb-3">Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Unread Only</span>
                        <ToggleLeft size={20} className="text-wildlife-purple" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full py-2 bg-wildlife-purple hover:bg-wildlife-purple/80 text-white rounded-md">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-pink/80 to-wildlife-pink/40"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Bell className="mr-2" size={20} />
                      Alert Feed
                    </h3>
                    
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1.5 text-sm text-gray-300 hover:text-white">
                        Mark all as read
                      </button>
                      <div className="h-4 border-r border-gray-700"></div>
                      <button className="px-3 py-1.5 text-sm text-gray-300 hover:text-white">
                        Settings
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {alertsData.map((alert) => (
                      <div
                        key={alert.id}
                        className={`relative rounded-lg border ${
                          alert.read ? "border-gray-700" : "border-wildlife-pink"
                        } overflow-hidden`}
                      >
                        <div
                          className={`h-1 w-full bg-gradient-to-r ${getSeverityColor(
                            alert.severity
                          )}`}
                        ></div>
                        <div className="p-4 bg-gray-800/50">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-white flex items-center">
                              {!alert.read && (
                                <span className="w-2 h-2 bg-wildlife-pink rounded-full mr-2"></span>
                              )}
                              {alert.title}
                            </h4>
                            <span className="text-xs text-gray-400">{alert.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-300 mt-2 mb-3">{alert.message}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-400 mt-3">
                            <div className="flex items-center gap-1">
                              <Camera size={12} />
                              <span>{alert.camera}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Map size={12} />
                              <span>{alert.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <AlertTriangle size={12} />
                              <span>{alert.type}</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                            <span
                              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getSeverityBadge(
                                alert.severity
                              )}`}
                            >
                              {alert.severity.toUpperCase()} PRIORITY
                            </span>
                            <div className="flex space-x-2">
                              <button className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                                <Eye size={16} />
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                                <Camera size={16} />
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                                <Map size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-400">
                      Showing 8 of 24 alerts
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md text-sm">
                        Previous
                      </button>
                      <button className="px-3 py-1.5 bg-wildlife-pink hover:bg-wildlife-pink/80 text-white rounded-md text-sm">
                        Next
                      </button>
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

export default Alerts;
