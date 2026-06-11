import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/kitab/MobileFrame";
import { TopBar } from "@/components/kitab/TopBar";
import { BottomNav } from "@/components/kitab/BottomNav";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — KitabGhar" },
      { name: "description", content: "Manage your KitabGhar profile." },
    ],
  }),
  component: Profile,
});

function Profile() {
  return (
    <MobileFrame>
      <TopBar />
      <main className="flex-1 px-5 pt-6">
        <h2 className="font-display text-2xl font-bold text-primary">Profile</h2>
        <p className="mt-2 text-muted-foreground">Account settings coming soon.</p>
      </main>
      <BottomNav />
    </MobileFrame>
  );
}
