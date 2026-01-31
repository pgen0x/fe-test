import Header from "@/components/layout/Header";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export default function MainLayout({
  children,
  className = "",
  isFullWidth = false,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#00050D] font-sans antialiased text-white flex flex-col">
      <Header />
      <main
        className={`flex-1 mx-auto w-full px-6 py-12 ${!isFullWidth ? "max-w-[1512px]" : ""} ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
