app
├── admin
│   ├── dashboard
│   │   └── page.tsx
│   ├── expenses
│   │   └── page.tsx
│   ├── fleet
│   │   └── page.tsx
│   ├── maintenance
│   │   └── page.tsx
│   ├── reports
│   │   └── page.tsx
│   ├── drivers
│   │   └── page.tsx
│   ├── settings
│   │   └── page.tsx
│   ├── roles
│   │   └── page.tsx
│   └── layout.tsx
│
├── driver
│   ├── dashboard
│   │   └── page.tsx
│   ├── log-expense
│   │   └── page.tsx
│   ├── reports
│   │   └── page.tsx
│   ├── vehicle-check
│   │   └── page.tsx
│   └── layout.tsx
│
├── login
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
components
├── admin
│   ├── dashboard
│   ├── drivers
│   ├── expenses
│   ├── fleet
│   ├── maintenance
│   ├── reports
│   ├── roles
│   └── settings
│       ├── billing-settings.tsx
│       ├── company-settings.tsx
│       ├── integration-settings.tsx
│       ├── notification-settings.tsx
│       ├── user-settings.tsx
│       └── settings-tabs.tsx
│
├── driver
│   ├── dashboard
│   │   ├── trip-history.tsx
│   │   ├── upcoming-tasks.tsx
│   │   └── vehicle-status.tsx
│   ├── log-expense
│   │   └── log-expense-form.tsx
│   ├── reports
│   │   └── personal-report-table.tsx
│   └── vehicle-check
│       ├── pre-trip-checklist.tsx
│       └── post-trip-checklist.tsx
│
├── shared
│   ├── header.tsx
│   ├── sidebar.tsx
│   ├── summary-cards.tsx
│   ├── theme-provider.tsx
│   └── auth-guard.tsx  // optional: handles role-based route protection
│
└── ui
    └── ... (same as before)
hooks
├── use-mobile.tsx
└── use-toast.ts

lib
└── utils.ts
