
import React from "react";
import Sidebar from "../components/Sidebar";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Activity, BarChart2, Camera, Circle } from "lucide-react";

const animalData = [
  { name: "Elephant", count: 142, status: { alive: 138, dead: 4, unknown: 0 } },
  { name: "Lion", count: 78, status: { alive: 72, dead: 3, unknown: 3 } },
  { name: "Giraffe", count: 96, status: { alive: 90, dead: 2, unknown: 4 } },
  { name: "Zebra", count: 254, status: { alive: 235, dead: 9, unknown: 10 } },
  { name: "Rhino", count: 36, status: { alive: 33, dead: 1, unknown: 2 } },
];

const monthlyData = [
  { name: "Jan", alive: 480, dead: 12, unknown: 8 },
  { name: "Feb", alive: 496, dead: 15, unknown: 9 },
  { name: "Mar", alive: 510, dead: 10, unknown: 8 },
  { name: "Apr", alive: 522, dead: 8, unknown: 10 },
  { name: "May", alive: 548, dead: 14, unknown: 12 },
  { name: "Jun", alive: 568, dead: 9, unknown: 7 },
];

const statusDistribution = [
  { name: "Alive", value: 568, color: "#00f5d4" },
  { name: "Dead", value: 19, color: "#f15bb5" },
  { name: "Unknown", value: 19, color: "#9b5de5" },
];

const Status: React.FC = () => {
  return (
    <div className="flex h-screen bg-wildlife-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-wildlife-dark-blue border-b border-gray-800 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Status Analysis</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Activity className="mr-2" size={20} />
                  Status Overview
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {statusDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#343957' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {statusDistribution.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <BarChart2 className="mr-2" size={20} />
                  Monthly Status Trends
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#343957" />
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#343957' }} />
                      <Area type="monotone" dataKey="alive" stackId="1" stroke="#00f5d4" fill="#00f5d4" />
                      <Area type="monotone" dataKey="dead" stackId="1" stroke="#f15bb5" fill="#f15bb5" />
                      <Area type="monotone" dataKey="unknown" stackId="1" stroke="#9b5de5" fill="#9b5de5" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 lg:col-span-1 md:col-span-2 lg:row-span-2">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Camera className="mr-2" size={20} />
                  Animal Status Distribution
                </h3>
                
                <div className="space-y-6">
                  {animalData.map((animal) => (
                    <div key={animal.name} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-white">{animal.name}</h4>
                        <span className="text-sm font-medium text-gray-300">Total: {animal.count}</span>
                      </div>
                      
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="flex h-full">
                          <div
                            className="bg-wildlife-teal h-full" 
                            style={{ width: `${(animal.status.alive / animal.count) * 100}%` }}
                          ></div>
                          <div
                            className="bg-wildlife-pink h-full"
                            style={{ width: `${(animal.status.dead / animal.count) * 100}%` }}
                          ></div>
                          <div
                            className="bg-wildlife-purple h-full"
                            style={{ width: `${(animal.status.unknown / animal.count) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 mt-2 gap-2 text-xs text-gray-300">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-wildlife-teal mr-2"></div>
                          <span>Alive: {animal.status.alive}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-wildlife-pink mr-2"></div>
                          <span>Dead: {animal.status.dead}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-wildlife-purple mr-2"></div>
                          <span>Unknown: {animal.status.unknown}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 lg:col-span-2 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Activity className="mr-2" size={20} />
                  Mortality Rate Analysis
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#343957" />
                      <XAxis dataKey="name" stroke="#6c7293" />
                      <YAxis stroke="#6c7293" yAxisId="left" />
                      <YAxis stroke="#6c7293" yAxisId="right" orientation="right" />
                      <Tooltip contentStyle={{ backgroundColor: '#1A1F2C', borderColor: '#343957' }} />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="alive" stroke="#00f5d4" activeDot={{ r: 8 }} />
                      <Line yAxisId="right" type="monotone" dataKey="dead" stroke="#f15bb5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Circle className="mr-2" size={20} />
                Status Indicators
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-wildlife-teal/20 flex items-center justify-center mb-3">
                    <Circle className="text-wildlife-teal" size={20} />
                  </div>
                  <h4 className="font-medium text-white mb-2">Alive</h4>
                  <p className="text-sm text-gray-300">
                    Animals detected with normal movement patterns, respiration, and thermal signatures.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-wildlife-pink/20 flex items-center justify-center mb-3">
                    <Circle className="text-wildlife-pink" size={20} />
                  </div>
                  <h4 className="font-medium text-white mb-2">Dead</h4>
                  <p className="text-sm text-gray-300">
                    Animals with no movement, no thermal signature, or visual confirmation of death.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-wildlife-purple/20 flex items-center justify-center mb-3">
                    <Circle className="text-wildlife-purple" size={20} />
                  </div>
                  <h4 className="font-medium text-white mb-2">Unknown</h4>
                  <p className="text-sm text-gray-300">
                    Animals with unclear indicators, partial visibility, or inconclusive detection results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Status;
