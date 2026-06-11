import { Menu, ShoppingCart } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-5 pt-5 pb-4">
      <button aria-label="Menu" className="p-1 text-primary">
        <Menu className="size-6" strokeWidth={2.25} />
      </button>
      <h1 className="font-display text-2xl font-bold text-primary tracking-tight">
        KitabGhar
      </h1>
      <button aria-label="Cart" className="p-1 text-primary">
        <ShoppingCart className="size-6" strokeWidth={2} />
      </button>
    </header>
  );
}
