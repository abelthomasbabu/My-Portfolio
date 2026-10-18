export const Section = ({ id, number, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="mt-20">
    <h2 id={`${id}-title`} className="mb-8 flex items-center gap-3 font-pixel text-sm uppercase">
      <span className="text-amber">{number}</span>
      <span>{title}</span>
      <span aria-hidden="true" className="h-0.5 flex-1 bg-line" />
    </h2>
    {children}
  </section>
);
