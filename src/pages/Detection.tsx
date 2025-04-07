
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import UploadSection from "../components/UploadSection";
import DetectionResults from "../components/DetectionResults";
import { AlertTriangle, Camera, Server } from "lucide-react";
import { toast } from "sonner";

// Mock animal data for detection results
const mockAnimals = [
  { id: 1, name: "African Elephant", confidence: 98, status: "alive" },
  { id: 2, name: "Lion", confidence: 94, status: "alive" },
  { id: 3, name: "Giraffe", confidence: 86, status: "alive" },
  { id: 4, name: "Zebra", confidence: 72, status: "unknown" },
] as { id: number; name: string; confidence: number; status: "alive" | "dead" | "unknown" }[];

const Detection: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectedAnimals, setDetectedAnimals] = useState<typeof mockAnimals>([]);

  const handleFileSelected = (file: File) => {
    setUploadedFile(file);
    setDetectedAnimals([]);
  };

  const handleProcessImage = () => {
    if (!uploadedFile) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setDetectedAnimals(mockAnimals);
      setIsProcessing(false);
      toast.success("Processing complete");
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-wildlife-dark">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-wildlife-dark-blue border-b border-gray-800 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Animal Detection</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 glass-card rounded-xl overflow-hidden">
              <div className="p-4 flex items-start gap-3 bg-yellow-500/10 border-yellow-500/30">
                <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-white mb-1">Demo Mode Notice</h3>
                  <p className="text-sm text-yellow-300">
                    This is a frontend demonstration. In a production environment, image and video processing 
                    would be handled by Python-based machine learning models on a backend server. The detection 
                    results shown here are simulated for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <UploadSection 
                  title="Upload Image for Detection" 
                  type="image" 
                  onFileSelected={handleFileSelected} 
                />
                
                <UploadSection 
                  title="Upload Video for Detection" 
                  type="video" 
                  onFileSelected={handleFileSelected} 
                />
              </div>
              
              <DetectionResults 
                animals={detectedAnimals} 
                isLoading={isProcessing} 
              />
            </div>
            
            <div className="mt-8 glass-card rounded-xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-purple/80 to-wildlife-purple/40"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Server className="mr-2" size={20} />
                  How It Works
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-wildlife-purple/20 flex items-center justify-center mb-3">
                      <Camera className="text-wildlife-purple" size={20} />
                    </div>
                    <h4 className="font-medium text-white mb-2">1. Image/Video Upload</h4>
                    <p className="text-sm text-gray-300">
                      Upload wildlife imagery from camera traps, drones, or manual sources.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-wildlife-blue/20 flex items-center justify-center mb-3">
                      <Server className="text-wildlife-blue" size={20} />
                    </div>
                    <h4 className="font-medium text-white mb-2">2. AI Processing</h4>
                    <p className="text-sm text-gray-300">
                      Python-based neural networks identify wildlife species, count individuals, and assess their status.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-wildlife-pink/20 flex items-center justify-center mb-3">
                      <AlertTriangle className="text-wildlife-pink" size={20} />
                    </div>
                    <h4 className="font-medium text-white mb-2">3. Real-time Analysis</h4>
                    <p className="text-sm text-gray-300">
                      System alerts rangers to unusual activity, tracks animal movement, and identifies health issues.
                    </p>
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

export default Detection;
