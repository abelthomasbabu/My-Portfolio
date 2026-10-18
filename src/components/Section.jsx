export const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mt-16">
    <h2
      id={`${id}-title`}
      className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-muted"
    >
      {title}
    </h2>
    {children}
  </section>
);
