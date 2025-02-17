"use client";

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Drawer } from '../../../components/ui/drawer';

const DashboardContent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">

      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            variant="link"
            className="text-gray-600 hover:text-gray-800 md:hidden"
          >
            Toggle Sidebar
          </Button>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Welcome to the Dashboard</h2>
          <p className="mt-2">This is your main dashboard where you can view all your data.</p>
        </div>
      </div>

      {/* Sidebar Drawer (optional, if using a sidebar drawer from ShadCN) */}
      <Drawer open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        {/* Sidebar content here */}
      </Drawer>
    </div>
  );
};

export default DashboardContent;
