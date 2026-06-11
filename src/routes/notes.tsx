import { createFileRoute } from "@tanstack/react-router";
import { MobileFrame } from "@/components/kitab/MobileFrame";
import { TopBar } from "@/components/kitab/TopBar";
import { BottomNav } from "@/components/kitab/BottomNav";
import { SearchField } from "@/components/kitab/SearchField";
import { NoteCard } from "@/components/kitab/NoteCard";
import { Fab } from "@/components/kitab/Fab";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "My Notes — KitabGhar" },
      { name: "description", content: "Your personal study and reading notes in KitabGhar." },
      { property: "og:title", content: "My Notes — KitabGhar" },
      { property: "og:description", content: "Your personal study and reading notes in KitabGhar." },
    ],
  }),
  component: NotesPage,
});

const notes = [
  {
    title: "History Midterm Review",
    preview:
      "Key dates for the industrial revolution. Need to memorize the shift in agricultural practices before...",
    timestamp: "Yesterday",
  },
  {
    title: "Book Club: The Martian Quotes",
    preview:
      "\"I'm going to have to science the shit out of this.\" - Mark Watney. Themes of isolation vs human...",
    timestamp: "Oct 12",
  },
  {
    title: "Idea for novel plot",
    preview:
      "A librarian discovers a book that writes itself based on the memories of whoever touches it last....",
    timestamp: "Oct 10",
  },
];

function NotesPage() {
  return (
    <MobileFrame>
      <TopBar />
      <div className="border-t border-outline-variant/40" />

      <main className="flex-1 px-5 pt-5 pb-6 flex flex-col gap-4">
        <h2 className="font-display text-2xl font-bold text-primary">My Notes</h2>
        <SearchField />

        <div className="border-t border-outline-variant/40 -mx-5" />

        <NoteCard
          featured
          title="Principles of UX Design: Chapter 3"
          preview="The core concept revolves around reducing cognitive load. When users are presented with to..."
          timestamp="10:42 AM"
          tags={[
            { label: "Design", tone: "gold" },
            { label: "Study", tone: "muted" },
          ]}
        />

        <div className="flex flex-col divide-y divide-outline-variant/30">
          {notes.map((n) => (
            <NoteCard key={n.title} {...n} />
          ))}
        </div>
      </main>

      <Fab />
      <BottomNav />
    </MobileFrame>
  );
}
