import type { ReactNode } from "react";

export function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#dee9fc] to-[#f8f9ff] flex justify-center">
      <div className="relative w-full max-w-[420px] min-h-screen bg-background shadow-[0_30px_80px_-20px_rgba(21,25,106,0.25)] flex flex-col">
        {children}
      </div>
    </div>
  );
}
