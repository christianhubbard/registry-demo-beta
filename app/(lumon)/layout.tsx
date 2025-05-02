import type React from "react";
import "@/app/globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

import { AppSidebar } from "@/components/dashboard/app-sidebar";



export const metadata = {
  title: "Lumon application",
  description: "An application from Lumon",
  generator: "Lumon reigstry",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <main className="flex justify-center w-full">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
