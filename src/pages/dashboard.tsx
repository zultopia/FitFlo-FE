import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-gray-600 mt-2">This is your main dashboard content.</p>
      </div>
    </div>
  );
};

export default Dashboard;