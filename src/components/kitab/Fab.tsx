import { Pencil } from "lucide-react";

export function Fab() {
  return (
    <button
      aria-label="New note"
      className="absolute right-5 bottom-24 size-14 rounded-2xl bg-gold text-on-gold shadow-[0_10px_24px_-6px_rgba(233,195,73,0.6)] flex items-center justify-center active:scale-95 transition"
    >
      <Pencil className="size-5" strokeWidth={2.25} />
    </button>
  );
}
