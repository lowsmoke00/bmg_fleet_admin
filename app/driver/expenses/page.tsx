import { validateDriverRole } from "@/lib/auth";
import { DriverExpensePage } from "@/components/driver/expense-page";

export default async function DriverExpensesPage() {
  await validateDriverRole(); // Will redirect if not a driver

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Expense Management</h1>
      <DriverExpensePage />
    </div>
  );
}
