
import React from "react";
import { AlertTriangle, Bell, Camera, Eye } from "lucide-react";

interface Alert {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  severity: "high" | "medium" | "low";
  read: boolean;
}

interface AlertsSectionProps {
  alerts: Alert[];
}

const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
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

  return (
    <div className="glass-card rounded-xl overflow-hidden h-full">
      <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-pink/80 to-wildlife-pink/40"></div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Bell className="mr-2" size={20} />
            Real-time Alerts
          </h3>
          
          <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white bg-wildlife-pink/30">
            {alerts.filter(a => !a.read).length} new
          </div>
        </div>

        {alerts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <Bell className="w-12 h-12 mb-3" />
            <p>No alerts at this time</p>
          </div>
        ) : (
          <div className="space-y-4 overflow-auto max-h-[400px] pr-2">
            {alerts.map((alert) => (
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
                  <p className="text-sm text-gray-300 mt-2">{alert.message}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        alert.severity === "high"
                          ? "bg-red-500/20 text-red-400"
                          : alert.severity === "medium"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {alert.severity.toUpperCase()} PRIORITY
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                        <Camera size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertsSection;
