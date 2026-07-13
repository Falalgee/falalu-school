import { useState } from 'react';
import aboutHero from '../assets/about-hero.jpg';
import historyImg from '../assets/history.jpg';
import principalImg from '../assets/principal-portrait.jpg';
import vpImg from '../assets/vice-principal.jpg';
import chairImg from '../assets/chairman.jpg';

const values = [
  { icon: 'workspace_premium', title: 'Excellence', desc: 'Highest standards in academics and character.' },
  { icon: 'balance', title: 'Integrity', desc: 'Honesty, transparency, and moral courage.' },
  { icon: 'self_improvement', title: 'Discipline', desc: 'Self-control and focus to achieve goals.' },
  { icon: 'lightbulb', title: 'Innovation', desc: 'Creative thinking and problem-solving.' },
];

const leaders = [
  { name: 'Dr. Abubakar Falalu', title: 'Principal', img: principalImg, bio: 'Over 20 years of educational leadership, passionate about student-centered learning.' },
  { name: 'Mrs. Aisha Bello', title: 'Vice Principal (Academics)', img: vpImg, bio: 'Dedicated to curriculum development and international academic standards.' },
  { name: 'Alhaji Usman Danladi', title: 'Chairman, Board of Directors', img: chairImg, bio: 'Founding board member providing strategic oversight and institutional guidance.' },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <img src={aboutHero} alt="Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm mb-4">Since 1998</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight">Our Heritage & Mission</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Over two decades of academic excellence and character development.
          </p>
        </div>
      </section>

      {/* Tabs: History / Mission-Vision / Values */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-12">
          {['history', 'mission', 'values'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition ${
                activeTab === tab ? 'bg-primary text-white' : 'bg-neutral-100 text-text-secondary hover:bg-neutral-200'
              }`}
            >
              {tab === 'mission' ? 'Mission & Vision' : tab}
            </button>
          ))}
        </div>

        {activeTab === 'history' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={historyImg} alt="School founders" className="rounded-3xl shadow-card-hover w-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">Our History</h2>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Established in 1998 by visionary educator Alhaji Falalu, our school began as a humble primary school in Minna. Driven by a commitment to academic rigor and moral uprightness, we’ve expanded into a premier educational complex encompassing pre-primary, primary, and secondary education.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-text-secondary mt-1">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">5,000+</div>
                  <div className="text-sm text-text-secondary mt-1">Alumni Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-card border border-border">
              <span className="material-symbols-outlined text-4xl text-secondary">explore</span>
              <h3 className="mt-4 text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="mt-3 text-text-secondary">
                To provide a holistic education that fosters academic excellence, moral integrity, and lifelong learning, empowering students to become responsible and innovative global citizens.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-card border border-border">
              <span className="material-symbols-outlined text-4xl text-secondary">visibility</span>
              <h3 className="mt-4 text-2xl font-semibold text-primary">Our Vision</h3>
              <p className="mt-3 text-text-secondary">
                To be the premier institution of learning in the region, recognized globally for producing well-rounded leaders who positively impact their communities and the world.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'values' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="p-6 rounded-2xl bg-white shadow-card border border-border hover:shadow-card-hover transition text-center">
                <span className="material-symbols-outlined text-3xl text-primary">{v.icon}</span>
                <h4 className="mt-4 text-lg font-semibold text-primary">{v.title}</h4>
                <p className="mt-2 text-sm text-text-secondary">{v.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Leadership */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Team</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-primary">Leadership & Management</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map(person => (
              <div key={person.name} className="bg-neutral-50 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition">
                <img src={person.img} alt={person.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">{person.name}</h3>
                  <p className="text-sm text-secondary font-medium mt-1">{person.title}</p>
                  <p className="mt-3 text-text-secondary text-sm">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}