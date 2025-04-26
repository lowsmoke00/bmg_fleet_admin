"use client";
import { DriverCheckinForm } from "@/components/driver/checkin-form";

export default function DriverCheckinPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Vehicle Check-In</h1>
      <DriverCheckinForm />
    </div>
  );
}