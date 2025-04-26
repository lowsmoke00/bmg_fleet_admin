"use client";

import { useState } from "react";
import { DriverExpenseForm } from "./expense-form";
import { DriverExpenseTable } from "./expense-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DriverExpensePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Expense Claims</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "View My Claims" : "New Expense Claim"}
        </Button>
      </div>

      {showForm ? (
        <Card className="p-6">
          <DriverExpenseForm
            onSuccess={() => setShowForm(false)}
            onCancel={() => setShowForm(false)}
          />
        </Card>
      ) : (
        <DriverExpenseTable />
      )}
    </div>
  );
}
