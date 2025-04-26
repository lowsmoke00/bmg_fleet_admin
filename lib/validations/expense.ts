import { z } from "zod";

export const expenseSchema = z.object({
  description: z.string().min(3, "Description too short"),
  date: z.string(),
  amount: z.number().positive("Must be positive"),
  category: z.enum(["FUEL", "MAINTENANCE", "TOLL", "OTHER"]),
  paymentMethod: z.enum(["MPESA", "CASH", "CARD"]),
  receipt: z.instanceof(File).optional(),
  notes: z.string().optional(),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;