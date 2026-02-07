"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { RecentActivities } from "@/components/dashboard/RecentActivities";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#030303]">
      <Sidebar />
      <main className="flex-1 flex flex-col">{children}</main>
      <RecentActivities />
    </div>
  );
}
