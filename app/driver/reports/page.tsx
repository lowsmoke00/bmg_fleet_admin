"use client";

import { DriverReportsAnalytics } from "@/components/driver/reports";

export default function DriverReportsPage() {
  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Driver Reports</h1>
        <p className="text-gray-500">Review your trip and expense analytics below</p>
      </div>

      <DriverReportsAnalytics />
    </div>
  );
}
