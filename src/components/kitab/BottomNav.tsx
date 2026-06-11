import { Link } from "@tanstack/react-router";
import { Home, BookOpen, StickyNote, User } from "lucide-react";
import type { ComponentType } from "react";

type Tab = { to: "/" | "/books" | "/notes" | "/profile"; label: string; Icon: ComponentType<{ className?: string; strokeWidth?: number }> };

const tabs: Tab[] = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/books", label: "Books", Icon: BookOpen },
  { to: "/notes", label: "Notes", Icon: StickyNote },
  { to: "/profile", label: "Profile", Icon: User },
];

export function BottomNav() {
  return (
    <nav className="sticky bottom-0 left-0 right-0 border-t border-outline-variant/60 bg-background/90 backdrop-blur-xl px-4 pt-2 pb-4">
      <ul className="grid grid-cols-4 gap-1">
        {tabs.map(({ to, label, Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="group flex flex-col items-center gap-1 py-1.5 text-muted-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={
                      "flex items-center justify-center rounded-2xl px-5 py-1.5 transition-colors " +
                      (isActive ? "bg-primary text-primary-foreground" : "")
                    }
                  >
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide">{label}</span>
                </>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
