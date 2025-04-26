// ✅ checkin-form.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const DriverCheckinForm = () => {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-semibold">Vehicle Check-In</h2>
      <form className="space-y-4">
        <div>
          <Label>Odometer Reading</Label>
          <Input type="number" />
        </div>
        <Button type="submit">Submit Check-In</Button>
      </form>
    </div>
  );
};
