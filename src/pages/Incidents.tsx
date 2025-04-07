
import React from "react";
import Sidebar from "../components/Sidebar";
import IncidentForm from "../components/IncidentForm";
import { AlertTriangle, Filter, Eye } from "lucide-react";

// Mock incident data
const mockIncidents = [
  {
    id: 1,
    title: "Elephant with injury spotted",
    type: "Animal Injury",
    location: "Zone A - Northern Perimeter",
    date: "2025-04-05",
    status: "open",
    priority: "high",
  },
  {
    id: 2,
    title: "Potential poachers detected",
    type: "Illegal Activity",
    location: "Zone C - Eastern Border",
    date: "2025-04-03",
    status: "investigating",
    priority: "high",
  },
  {
    id: 3,
    title: "Dead zebra found near water source",
    type: "Animal Death",
    location: "Zone B - Central Watering Hole",
    date: "2025-04-01",
    status: "resolved",
    priority: "medium",
  },
  {
    id: 4,
    title: "Lion with snare around neck",
    type: "Animal Injury",
    location: "Zone D - Southern Plains",
    date: "2025-03-28",
    status: "resolved",
    priority: "high",
  },
  {
    id: 5,
    title: "Unauthorized vehicle spotted",
    type: "Illegal Activity",
    location: "Zone A - Western Access Road",
    date: "2025-03-25",
    status: "resolved",
    priority: "medium",
  },
];

const Incidents: React.FC = () => {
  return (
    <div className="flex h-screen bg-wildlife-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-wildlife-dark-blue border-b border-gray-800 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Incident Reports</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-blue/80 to-wildlife-blue/40"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-white flex items-center">
                        <AlertTriangle className="mr-2" size={20} />
                        Recent Incidents
                      </h3>
                      
                      <button className="flex items-center px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md text-sm">
                        <Filter size={16} className="mr-2" />
                        Filter
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Priority</th>
                            <th className="px-4 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {mockIncidents.map((incident) => (
                            <tr key={incident.id} className="text-gray-300 text-sm">
                              <td className="px-4 py-3 whitespace-nowrap">
                                {incident.title}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {incident.type}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {incident.location}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {incident.date}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    incident.status === "open"
                                      ? "bg-wildlife-blue/20 text-wildlife-blue"
                                      : incident.status === "investigating"
                                      ? "bg-wildlife-purple/20 text-wildlife-purple"
                                      : "bg-gray-600/20 text-gray-400"
                                  }`}
                                >
                                  {incident.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    incident.priority === "high"
                                      ? "bg-red-500/20 text-red-400"
                                      : incident.priority === "medium"
                                      ? "bg-amber-500/20 text-amber-400"
                                      : "bg-green-500/20 text-green-400"
                                  }`}
                                >
                                  {incident.priority.toUpperCase()}
                                </span>
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                <button className="p-1 text-gray-400 hover:text-white rounded-full hover:bg-gray-700">
                                  <Eye size={16} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="text-sm text-gray-400">
                        Showing 5 of 24 incidents
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md text-sm">
                          Previous
                        </button>
                        <button className="px-3 py-1 bg-wildlife-blue hover:bg-wildlife-blue/80 text-white rounded-md text-sm">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <IncidentForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Incidents;
