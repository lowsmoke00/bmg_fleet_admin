"use client";
import { Badge } from "@/components/ui/badge";

export function VehicleStatus() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Vehicle Status</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Registration:</span>
          <span>KBM 123A</span>
        </div>
        <div className="flex justify-between">
          <span>Odometer:</span>
          <span>45,320 km</span>
        </div>
        <div className="flex justify-between">
          <span>Status:</span>
          <Badge variant="outline">Operational</Badge>
        </div>
      </div>
    </div>
  );
}