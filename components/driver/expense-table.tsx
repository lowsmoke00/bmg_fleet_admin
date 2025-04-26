"use client";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export type DriverExpense = {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  category: string;
};

// Map expense status to valid Badge variants
const statusVariantMap = {
  PENDING: "secondary",
  APPROVED: "default",
  REJECTED: "destructive"
} as const;

const columns: ColumnDef<DriverExpense>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue<string>("date"));
      return date.toLocaleDateString();
    }
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = row.getValue<number>("amount");
      return `KES ${amount.toLocaleString()}`;
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue<"PENDING" | "APPROVED" | "REJECTED">("status");
      return (
        <Badge variant={statusVariantMap[status]}>
          {status}
        </Badge>
      );
    }
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => console.log("Delete", row.original.id)}
      >
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    )
  }
];

export function DriverExpenseTable() {
  const data: DriverExpense[] = [
    {
      id: "1",
      description: "Fuel purchase",
      amount: 5000,
      date: new Date().toISOString(),
      status: "PENDING",
      category: "FUEL"
    },
    {
      id: "2",
      description: "Truck wash",
      amount: 1500,
      date: new Date(Date.now() - 86400000).toISOString(),
      status: "APPROVED",
      category: "MAINTENANCE"
    }
  ];

  return <DataTable columns={columns} data={data} />;
}