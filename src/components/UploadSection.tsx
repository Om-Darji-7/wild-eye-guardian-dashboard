
import React, { useState } from "react";
import { Camera, Upload, X, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface UploadSectionProps {
  title: string;
  type: "image" | "video";
  onFileSelected: (file: File) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  title,
  type,
  onFileSelected,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (file: File) => {
    // Validate file type
    const fileType = type === "image" ? "image/" : "video/";
    if (!file.type.startsWith(fileType)) {
      toast.error(`Please upload a valid ${type} file`);
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size should be less than 10MB");
      return;
    }

    setFile(file);
    onFileSelected(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleProcess = () => {
    if (!file) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`${type === "image" ? "Image" : "Video"} processed successfully`);
    }, 2000);
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-wildlife-purple/80 to-wildlife-purple/40"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Camera className="mr-2" size={20} />
          {title}
        </h3>

        {!file ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging
                ? "border-wildlife-purple bg-wildlife-purple/10"
                : "border-gray-700 hover:border-gray-500"
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <Upload className="h-12 w-12 text-gray-400" />
              <div className="space-y-1">
                <p className="text-lg font-medium text-white">
                  Drag and drop your {type}
                </p>
                <p className="text-sm text-gray-400">
                  or click to browse from your device
                </p>
              </div>
              <input
                id={`${type}-upload`}
                type="file"
                className="hidden"
                accept={type === "image" ? "image/*" : "video/*"}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${type}-upload`}
                className="px-4 py-2 bg-wildlife-purple hover:bg-wildlife-purple/80 text-white rounded-md cursor-pointer"
              >
                Select {type}
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-gray-700">
              <button
                onClick={handleRemoveFile}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={16} />
              </button>
              {type === "image" ? (
                <img
                  src={preview!}
                  alt="Preview"
                  className="w-full object-cover max-h-[300px]"
                />
              ) : (
                <video
                  src={preview!}
                  controls
                  className="w-full max-h-[300px]"
                ></video>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-300">{file.name}</p>
                <p className="text-xs text-gray-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={handleProcess}
                disabled={isProcessing}
                className={`px-4 py-2 rounded-md text-white ${
                  isProcessing
                    ? "bg-gray-600"
                    : "bg-wildlife-blue hover:bg-wildlife-blue/80"
                }`}
              >
                {isProcessing ? "Processing..." : "Process"}
              </button>
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="text-yellow-500 mr-2 mt-0.5" size={16} />
                <p className="text-sm text-yellow-300">
                  Note: This is a frontend demo. In a real implementation, {type}s would be 
                  processed by Python backend services for animal detection.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
