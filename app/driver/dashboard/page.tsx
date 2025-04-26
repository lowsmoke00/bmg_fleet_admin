// app/driver-dashboard/page.tsx
import { validateRole } from "@/lib/auth";
import { Card } from "@/components/ui/card";

export default async function DriverDashboardPage() {
  await validateRole("driver");

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Driver Dashboard</h1>
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Driver-specific widgets */}
          <Card className="p-4 text-center">
            <h3 className="font-medium">Today's Trips</h3>
            <p className="text-2xl font-bold">3</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="font-medium">Vehicle Status</h3>
            <p className="text-xl font-bold">Active</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="font-medium">Pending Expenses</h3>
            <p className="text-xl font-bold">2</p>
          </Card>
        </div>
      </Card>
    </div>
  );
}