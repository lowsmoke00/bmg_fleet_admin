app
├── dashboard
│   dashboard
│   ├── drivers
│   │   drivers
│   │   └── page.tsx
│   ├── expenses
│   │   expenses
│   │   └── page.tsx
│   ├── fleet
│   │   fleet
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── maintenance
│   │   maintenance
│   │   └── page.tsx
│   ├── page.tsx
│   ├── reports
│   │   reports
│   │   └── page.tsx
│   └── settings
│       settings
│       └── page.tsx

├── login
│   └── page.tsx

├── driver  ← ✅ NEW DRIVER SECTION
│   ├── dashboard
│   │   └── page.tsx           ← Driver Dashboard (trip history, vehicle status)
│   ├── expenses
│   │   └── page.tsx           ← Log expense (submit receipts)
│   ├── reports
│   │   └── page.tsx           ← View personal reports
│   ├── checkin                ← Optional pre/post trip check-in/out
│   │   └── page.tsx

├── globals.css
├── layout.tsx
└── page.tsx
components/
└── driver/
    └── dashboard/
        ├── index.tsx            ✅ main dashboard view
        ├── recent-trips.tsx     ✅ trips component
        └── vehicle-status.tsx   ✅ status component
│   ├── expense-page.tsx         # exports DriverExpensePage
│   ├── expense-form.tsx         # exports DriverExpenseForm
│   ├── expense-table.tsx        # exports DriverExpenseTable
│   ├── checkin-form.tsx         # exports DriverCheckinForm
│   └── reports.tsx              # exports DriverReports
