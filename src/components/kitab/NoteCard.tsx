type Tag = { label: string; tone: "gold" | "muted" };

type Props = {
  title: string;
  preview: string;
  timestamp: string;
  tags?: Tag[];
  featured?: boolean;
};

export function NoteCard({ title, preview, timestamp, tags, featured }: Props) {
  if (featured) {
    return (
      <article className="rounded-2xl border border-primary/40 bg-surface-container-low/60 p-4 shadow-[0_2px_0_rgba(21,25,106,0.04)]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold text-primary leading-snug">
            {title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground pt-1">{timestamp}</span>
        </div>
        <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{preview}</p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t.label}
                className={
                  "rounded-full px-3 py-1 text-xs font-semibold " +
                  (t.tone === "gold"
                    ? "bg-gold text-on-gold"
                    : "bg-surface-container-high text-foreground/70")
                }
              >
                {t.label}
              </span>
            ))}
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="px-1 py-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[16px] font-semibold text-foreground leading-snug">
          {title}
        </h3>
        <span className="shrink-0 text-xs text-muted-foreground pt-1">{timestamp}</span>
      </div>
      <p className="mt-1.5 text-[15px] leading-6 text-muted-foreground">{preview}</p>
    </article>
  );
}
