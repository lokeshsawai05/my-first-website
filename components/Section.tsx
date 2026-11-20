export default function Section({ id, title, children, tint = false }: { id: string; title: string; children: React.ReactNode; tint?: boolean }) {
  return (
    <section id={id} className={tint ? "bg-sky" : ""}>
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="mb-10 font-display text-3xl font-bold md:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
export const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded border border-dashed border-signal px-2 py-0.5 text-xs text-signal">{children}</span>
);
