import principalImg from '../../assets/principal-portrait.jpg';

export default function Welcome() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-card-hover">
            <img src={principalImg} alt="Dr. Amina Falalu" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Principal's Welcome</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">A Place to Grow</h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            At Falalu & Sons, education is more than academics—it's the foundation for strong character and bright futures. Our dedicated staff creates a nurturing environment where every child can reach their full potential.
          </p>
          <div className="mt-8 text-base font-medium text-primary/80 italic">
            — Dr. Amina Falalu, Principal
          </div>
        </div>
      </div>
    </section>
  );
}