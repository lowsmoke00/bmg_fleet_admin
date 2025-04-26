// components/driver/dashboard/index.tsx

"use client";

import { DriverExpensePage } from "../expense-page";
import { DriverCheckinForm } from "../checkin-form";
import { VehicleStatus } from "./vehicle-status";
import { RecentTrips } from "./recent-trips";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export const DriverDashboard = () => {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Driver Portal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <VehicleStatus />
        </Card>
        <Card className="p-6">
          <RecentTrips />
        </Card>
      </div>

      <Tabs defaultValue="expenses" className="w-full mt-6">
        <TabsList>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="checkin">Vehicle Check-In</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses">
          <DriverExpensePage />
        </TabsContent>

        <TabsContent value="checkin">
          <DriverCheckinForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
