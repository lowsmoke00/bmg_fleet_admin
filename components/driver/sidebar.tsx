"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Car, FileText, DollarSign, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DriverSidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { href: "/driver", icon: Home, label: "Dashboard" },
    { href: "/driver/checkin", icon: Car, label: "Vehicle Check-In" },
    { href: "/driver/expenses", icon: DollarSign, label: "Expenses" },
    { href: "/driver/reports", icon: FileText, label: "Reports" },
  ];

  return (
    <div className="hidden w-64 border-r bg-gray-50 md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">Driver Portal</h2>
        </div>
        <div className="flex-1 space-y-2 py-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-auto p-4">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
};