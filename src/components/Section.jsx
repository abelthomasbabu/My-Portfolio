export const Section = ({ id, number, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="pt-24 sm:pt-28">
    <div className="reveal mb-10 flex items-center gap-4">
      <h2 id={`${id}-title`} className="flex shrink-0 items-baseline gap-3 font-pixel text-2xl uppercase sm:text-3xl">
        <span className="text-base text-amber">{number}</span>
        {title}
      </h2>
      <span aria-hidden="true" className="dither flex-1" />
    </div>
    {children}
  </section>
);
