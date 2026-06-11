import { createFileRoute, Link } from "@tanstack/react-router";
import { MobileFrame } from "@/components/kitab/MobileFrame";
import { TopBar } from "@/components/kitab/TopBar";
import { BottomNav } from "@/components/kitab/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KitabGhar — Your premium digital bookstore" },
      { name: "description", content: "A trustworthy, intelligent space where reading meets learning." },
      { property: "og:title", content: "KitabGhar" },
      { property: "og:description", content: "A trustworthy, intelligent space where reading meets learning." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <MobileFrame>
      <TopBar />
      <main className="flex-1 px-5 pt-6 flex flex-col gap-5">
        <h2 className="font-display text-2xl font-bold text-primary">Welcome back</h2>
        <p className="text-muted-foreground">
          Pick up where you left off, or jump straight to your notes.
        </p>
        <Link
          to="/notes"
          className="inline-flex w-fit items-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_20px_-8px_rgba(21,25,106,0.6)]"
        >
          Open My Notes
        </Link>
      </main>
      <BottomNav />
    </MobileFrame>
  );
}
