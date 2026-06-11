import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/kitab/MobileFrame";
import { TopBar } from "@/components/kitab/TopBar";
import { BottomNav } from "@/components/kitab/BottomNav";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — KitabGhar" },
      { name: "description", content: "Browse the KitabGhar library." },
    ],
  }),
  component: Books,
});

function Books() {
  return (
    <MobileFrame>
      <TopBar />
      <main className="flex-1 px-5 pt-6">
        <h2 className="font-display text-2xl font-bold text-primary">Books</h2>
        <p className="mt-2 text-muted-foreground">Your library is coming soon.</p>
      </main>
      <BottomNav />
    </MobileFrame>
  );
}
