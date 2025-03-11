import Sidebar from "@/components/sidebar";
import { FaBell, FaSearch } from "react-icons/fa";
import Human from "@/assets/human-body.png";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import HeartImg from "@/assets/heart.png";
import LungsImg from "@/assets/lungs.png";
import BloodOxygenImg from "@/assets/blood_oxygen.png";
import SkinTempImg from "@/assets/skin_temp.png";
import BreathingImg from "@/assets/breathing.png";
import MotionPostureImg from "@/assets/motion_posture.png";
import SleepImg from "@/assets/sleep.png";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { name: "Mon", health: 85 },
  { name: "Tue", health: 78 },
  { name: "Wed", health: 82 },
  { name: "Thu", health: 75 },
  { name: "Fri", health: 80 },
  { name: "Sat", health: 90 },
  { name: "Sun", health: 88 },
];

const healthMetrics = {
    "Heart": { image: HeartImg, measurement: "Heart rate: 72 bpm" },
    "Lungs": { image: LungsImg, measurement: "Oxygen level: 98%" },
    "Blood & Oxygen": { image: BloodOxygenImg, measurement: "Blood pressure: 120/80 mmHg" },
    "Skin & Temp": { image: SkinTempImg, measurement: "Body temperature: 36.5°C" },
    "Breathing": { image: BreathingImg, measurement: "Respiratory rate: 16 breaths/min" },
    "Motion & Posture": { image: MotionPostureImg, measurement: "Posture: Upright" },
    "Sleep": { image: SleepImg, measurement: "Sleep quality: Good" }
};

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState<keyof typeof healthMetrics | null>(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-2/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white shadow-sm focus:outline-none"
            />
          </div>
          <FaBell className="text-primary text-xl cursor-pointer" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-blue-600 text-sm text-right cursor-pointer">This Week →</p>

        <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md relative flex justify-center h-full">
                <img alt="Human Anatomy" className="w-80" src={Human} />
            
                {Object.entries({
                    "❤️ Heart": "top-[130px] left-[100px] bg-red-600",
                    "🫁 Lungs": "top-[130px] right-[120px] bg-blue-500",
                    "🩸 Blood & Oxygen": "top-10 right-[80px] bg-green-500",
                    "🌡️ Skin & Temp": "top-[220px] right-[80px] bg-yellow-500",
                    "💨 Breathing": "top-10 left-[120px] bg-purple-500",
                    "🚶 Motion & Posture": "top-[220px] left-[60px] bg-indigo-500",
                    "💤 Sleep": "top-10 items-center bg-teal-500"
                }).map(([label, position]) => (
                    <span
                    key={label}
                    className={`absolute ${position} text-white px-3 py-1 rounded-lg shadow cursor-pointer`}
                    onClick={() => {
                        const metricKey = label.replace(/^[^\w]+/, "").trim(); 
                        setSelectedMetric(metricKey as keyof typeof healthMetrics);
                    }}
                    >
                    {label}
                    </span>
                ))}

            {selectedMetric && (
                <Dialog open={true} onClose={() => setSelectedMetric(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4 text-center">{selectedMetric}</h2>
                        {healthMetrics[selectedMetric]?.image && (
                            <img src={healthMetrics[selectedMetric].image} alt={selectedMetric} className="w-[300px] h-auto mb-4 mx-auto" />
                        )}
                        <p className="text-center">{healthMetrics[selectedMetric]?.measurement || "No data available"}</p>
                        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg" onClick={() => setSelectedMetric(null)}>
                            Close
                        </button>
                    </div>
                </Dialog>
            )}
            </div>

            <div className="space-y-4 h-full flex flex-col justify-between">
                {[
                { name: "Lungs", icon: "🫁", progress: 50 },
                { name: "Heart", icon: "❤️", progress: 80 },
                { name: "Blood", icon: "🩸", progress: 40 },
                ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="ml-4 flex-1">
                    <p className="text-gray-800 font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">Date: 26 Okt 2021</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                        <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${item.progress}%` }}
                        ></div>
                    </div>
                    </div>
                </div>
                ))}
                <p className="text-right text-blue-600 text-sm cursor-pointer">Details →</p>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-bold text-gray-900">Activity</h2>
            <p className="text-sm text-gray-500">Your health levels for the past 7 days</p>
            <div className="mt-4 h-40">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart data={healthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="health" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
                </ResponsiveContainer>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Dashboard;