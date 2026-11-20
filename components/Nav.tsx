"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"];
export default function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold">{name}</a>
        <ul className="hidden gap-6 text-sm text-mute md:flex">
          {links.map((l) => <li key={l}><a className="hover:text-signal" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-ink/10 bg-paper px-5 py-3 md:hidden">
          {links.map((l) => <li key={l}><a className="block py-2" href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a></li>)}
        </ul>
      )}
    </header>
  );
}
