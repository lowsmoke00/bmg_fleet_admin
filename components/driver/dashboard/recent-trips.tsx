"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function RecentTrips() {
  const trips = [
    { id: 1, date: "2023-11-15", destination: "Nairobi", distance: "120 km" },
    { id: 2, date: "2023-11-14", destination: "Mombasa", distance: "480 km" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Recent Trips</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Distance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trips.map((trip) => (
            <TableRow key={trip.id}>
              <TableCell>{trip.date}</TableCell>
              <TableCell>{trip.destination}</TableCell>
              <TableCell>{trip.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}