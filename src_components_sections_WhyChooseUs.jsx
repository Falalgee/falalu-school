const features = [
  { icon: 'school', title: 'Quality Education', desc: 'Rigorous curriculum that challenges students and inspires lifelong learning.' },
  { icon: 'apartment', title: 'Modern Facilities', desc: 'State‑of‑the‑art labs, libraries, and sports complexes.' },
  { icon: 'diversity_3', title: 'Character Development', desc: 'Instilling integrity, respect, and resilience for global citizenship.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Why Falalu?</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">The Difference is Clear</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl bg-neutral-50 border border-transparent hover:border-border hover:bg-white hover:shadow-card-hover transition-all duration-200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">{f.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{f.title}</h3>
              <p className="text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}