import { Search } from "lucide-react";

export function SearchField({ placeholder = "Search notes..." }: { placeholder?: string }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" strokeWidth={2} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl bg-surface-container-high/80 py-3.5 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground outline-none focus:bg-card focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
