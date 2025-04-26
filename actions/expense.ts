"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ExpenseStatus } from "@/lib/enums";

export async function submitDriverExpense(data: ExpenseFormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  await db.expense.create({
    data: {
      driverId: session.user.id,
      description: data.description,
      amount: data.amount,
      category: data.category,
      paymentMethod: data.paymentMethod,
      receiptUrl: data.receipt ? await uploadFile(data.receipt) : null,
      status: ExpenseStatus.PENDING,
      // ...other fields
    }
  });
}

export async function getDriverExpenses() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  return db.expense.findMany({
    where: { driverId: session.user.id },
    orderBy: { createdAt: "desc" }
  });
}