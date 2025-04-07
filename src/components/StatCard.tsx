
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subvalue?: string;
  icon?: React.ReactNode;
  color: "purple" | "blue" | "pink" | "teal";
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subvalue,
  icon,
  color,
}) => {
  const colorMap = {
    purple: "from-wildlife-purple/80 to-wildlife-purple/40",
    blue: "from-wildlife-blue/80 to-wildlife-blue/40",
    pink: "from-wildlife-pink/80 to-wildlife-pink/40",
    teal: "from-wildlife-teal/80 to-wildlife-teal/40",
  };

  return (
    <div className={`rounded-xl overflow-hidden glass-card`}>
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${colorMap[color]}`}
      ></div>
      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-white flex items-end gap-2">
              {value}
              {subvalue && (
                <span className="text-sm text-gray-400 mb-1">{subvalue}</span>
              )}
            </h3>
          </div>
          {icon && (
            <div className="flex items-start">
              <div
                className={`p-2 rounded-full bg-gradient-to-br ${colorMap[color]} bg-opacity-50`}
              >
                {icon}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
