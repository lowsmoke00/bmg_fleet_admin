// components/driver/reports.tsx
"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function DriverReportsAnalytics() {
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: "2025-03-01",
    end: "2025-04-05",
  });
  const [selectedVehicle, setSelectedVehicle] = useState<string>("myVehicle");
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: `Exporting as ${format}`,
      description: "Your report is being generated and will download shortly.",
    });
  };

  const handleCustomDashboard = () => {
    toast({
      title: "Custom Dashboard Builder",
      description:
        "This feature is coming soon. You'll be able to create your own custom dashboards.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Reports & Analytics</h1>
          <p className="text-gray-500">View your fleet activity and export data</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => handleExport("pdf")}>
            <FileText className="h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={() => handleExport("csv")}>
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Filters</CardTitle>
          </div>
        </CardHeader>

        <div className="space-y-4 p-4">
          <div>
            <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700">
              Date Range
            </label>
            <div className="flex gap-4 mt-2">
              <input
                type="date"
                id="startDate"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className="px-4 py-2 border rounded-md"
              />
              <span className="text-sm text-gray-500">to</span>
              <input
                type="date"
                id="endDate"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className="px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">
              Vehicle
            </label>
            <select
              id="vehicle"
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="myVehicle">My Assigned Vehicle</option>
              {/* Future vehicle assignments can be populated here */}
            </select>
          </div>
        </div>
      </Card>

      <div className="mt-4">
        <Button onClick={handleCustomDashboard} className="w-full">
          Build Custom Dashboard
        </Button>
      </div>
    </div>
  );
}
