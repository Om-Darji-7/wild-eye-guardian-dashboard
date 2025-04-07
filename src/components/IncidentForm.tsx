
import React, { useState } from "react";
import { Camera, MapPin, Upload, Send, X, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const IncidentForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file");
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      
      setImage(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !location || !incidentType) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Incident report submitted successfully");
      setIsSubmitting(false);
      setTitle("");
      setDescription("");
      setLocation("");
      setIncidentType("");
      setImage(null);
      setPreview(null);
    }, 1500);
  };

  const incidentTypes = [
    { value: "poaching", label: "Poaching" },
    { value: "injury", label: "Animal Injury" },
    { value: "death", label: "Animal Death" },
    { value: "illegal_activity", label: "Illegal Activity" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-blue/80 to-wildlife-blue/40"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <AlertTriangle className="mr-2" size={20} />
          Report Incident
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
              Incident Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-wildlife-blue focus:border-wildlife-blue bg-gray-800 text-white text-sm"
              placeholder="Brief title describing the incident"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="incidentType" className="block text-sm font-medium text-gray-300 mb-1">
                Incident Type *
              </label>
              <select
                id="incidentType"
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-wildlife-blue focus:border-wildlife-blue bg-gray-800 text-white text-sm"
                required
              >
                <option value="">Select incident type</option>
                {incidentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                Location *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-wildlife-blue focus:border-wildlife-blue bg-gray-800 text-white text-sm"
                  placeholder="GPS coordinates or description"
                  required
                />
                <MapPin className="absolute left-3 top-2.5 text-gray-400" size={16} />
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-wildlife-blue focus:border-wildlife-blue bg-gray-800 text-white text-sm"
              placeholder="Detailed description of the incident"
              required
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Image Evidence (optional)
            </label>
            {!image ? (
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-gray-500">
                <div className="flex flex-col items-center space-y-2">
                  <Camera className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Drag and drop an image or click to browse</p>
                  </div>
                  <input
                    id="incident-image"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="incident-image"
                    className="px-3 py-1.5 bg-wildlife-blue hover:bg-wildlife-blue/80 text-white rounded-md cursor-pointer text-sm"
                  >
                    Select image
                  </label>
                </div>
              </div>
            ) : (
              <div className="relative rounded-lg overflow-hidden border border-gray-700">
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
                <img
                  src={preview!}
                  alt="Preview"
                  className="w-full object-cover max-h-[200px]"
                />
              </div>
            )}
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting
                  ? "bg-gray-600"
                  : "bg-wildlife-blue hover:bg-wildlife-blue/80"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Submit Report
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
