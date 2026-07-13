import { useState } from 'react';

const levels = ['nursery', 'primary', 'secondary'];

const levelData = {
  nursery: {
    title: 'Early Years Foundation',
    age: 'Ages 3-5',
    description: 'Our Nursery program provides a nurturing, play-based environment where young minds begin their educational journey.',
    subjects: ['Literacy & Phonics', 'Numeracy & Shapes', 'Knowledge of the World', 'Expressive Arts', 'Physical Development'],
  },
  primary: {
    title: 'Primary Education',
    age: 'Ages 6-11',
    description: 'Building on the foundation, primary years focus on structured learning, critical thinking, and collaborative projects.',
    subjects: ['English Language', 'Mathematics', 'Basic Science', 'Social Studies', 'Civic Education', 'ICT', 'French/Arabic', 'Fine Art'],
  },
  secondary: {
    title: 'Secondary Education',
    age: 'Ages 11-17',
    description: 'Preparing students for higher education with rigorous curriculum and specialized streams.',
    subjects: ['English & Math', 'Physics, Chemistry, Biology', 'Economics', 'Government', 'Accounting', 'Literature', 'Further Math', 'Technical Drawing'],
  },
};

export default function Academics() {
  const [activeLevel, setActiveLevel] = useState('nursery');

  return (
    <>
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Curriculum</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-primary">Academic Excellence</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
          Fostering growth through a comprehensive curriculum from Early Years to Secondary School.
        </p>
      </section>

      <section className="pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Level Tabs */}
        <div className="flex justify-center mb-12 border-b border-border">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wide transition border-b-2 ${
                activeLevel === level ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-primary'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Level Content */}
        {levels.map(level => activeLevel === level && (
          <div key={level} className="grid lg:grid-cols-2 gap-12 items-start animate-fadeIn">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">{levelData[level].age}</span>
              <h2 className="mt-4 text-3xl font-display font-bold text-primary">{levelData[level].title}</h2>
              <p className="mt-4 text-lg text-text-secondary">{levelData[level].description}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card border-t-4 border-primary">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">menu_book</span> Subjects
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {levelData[level].subjects.map(sub => (
                  <li key={sub} className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Achievements & Calendar */}
      <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-neutral-50 border border-border">
            <span className="material-symbols-outlined text-3xl text-secondary">emoji_events</span>
            <h3 className="mt-4 text-2xl font-semibold text-primary">Recent Achievements</h3>
            <ul className="mt-6 space-y-4">
              <li><strong>2023:</strong> 100% WAEC Success Rate</li>
              <li><strong>2022:</strong> State Science Olympiad Winners</li>
              <li><strong>2021:</strong> National Essay Competition Finalists</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-primary text-white">
            <span className="material-symbols-outlined text-3xl">calendar_month</span>
            <h3 className="mt-4 text-2xl font-semibold">Academic Calendar</h3>
            <p className="mt-4 text-white/80">Stay updated with term dates, holidays, and events.</p>
            <button className="mt-6 inline-flex items-center px-5 py-3 bg-white text-primary rounded-lg font-semibold">
              Download PDF <span className="material-symbols-outlined ml-2">download</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}