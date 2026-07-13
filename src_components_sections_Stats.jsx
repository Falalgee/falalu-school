const stats = [
  { value: '500+', label: 'Enrolled Students' },
  { value: '50+', label: 'Qualified Teachers' },
  { value: '100%', label: 'Graduation Rate' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="py-10 px-6">
            <div className="text-5xl font-display font-bold text-tertiary mb-3">{s.value}</div>
            <div className="text-lg font-medium text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}