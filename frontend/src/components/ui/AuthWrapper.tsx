import React from "react";
import { Card } from "./Card";

interface AuthWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function AuthWrapper({
  title,
  description,
  children,
  className = "",
}: AuthWrapperProps) {
  return (
    <div className="relative pt-22 pb-20 lg:pt-38 lg:pb-32 overflow-hidden w-full flex items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      {/* Massive Eclipse Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-[#FF5500]/20 via-[#FF5500]/5 to-transparent -[100%] blur-[100px] pointer-events-none" />
      <Card className={`w-full max-w-md space-y-6 p-8 ${className}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-2 text-sm text-gray-400">{description}</p>
          )}
        </div>
        {children}
      </Card>
    </div>
  );
}
