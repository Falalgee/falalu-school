import { useState } from 'react';

const articles = [
  { id: 1, title: 'Annual Science & Technology Exhibition', date: 'Oct 15, 2024', category: 'Academics', excerpt: 'Students showcase innovative projects in robotics and environmental science.', img: 'https://picsum.photos/id/0/800/400', featured: true },
  { id: 2, title: 'First Term Mid-Semester Reports', date: 'Oct 12, 2024', category: 'Administration', excerpt: 'Progress reports now available on the student portal.', img: 'https://picsum.photos/id/2/800/400' },
  { id: 3, title: 'Inter-House Athletics Results', date: 'Oct 10, 2024', category: 'Sports', excerpt: 'Blue House takes the trophy in a thrilling competition.', img: 'https://picsum.photos/id/3/800/400' },
];

const events = [
  { day: 24, month: 'Oct', title: 'Parent-Teacher Conference', time: '09:00 AM', location: 'Main Hall' },
  { day: 5, month: 'Nov', title: 'Science Exhibition', time: '10:00 AM', location: 'Science Block' },
  { day: 12, month: 'Dec', title: 'End of Year Ceremony', time: '08:30 AM', location: 'Auditorium' },
];

export default function News() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest text-secondary uppercase">News & Events</span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-primary">Latest Updates</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">
          {articles.map(article => (
            <article key={article.id} className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition ${article.featured ? 'ring-1 ring-secondary/20' : ''}`}>
              <img src={article.img} alt={article.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                  <span>{article.date}</span>
                  <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{article.category}</span>
                </div>
                <h3 className="text-2xl font-semibold text-primary">{article.title}</h3>
                <p className="mt-2 text-text-secondary">{article.excerpt}</p>
                <button className="mt-4 text-secondary font-medium text-sm">Read more →</button>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">event</span> Upcoming
            </h3>
            <ul className="space-y-4">
              {events.map((ev, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary shrink-0">
                    <span className="text-xs font-semibold">{ev.month}</span>
                    <span className="text-lg font-bold leading-none">{ev.day}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{ev.title}</h4>
                    <p className="text-sm text-text-secondary">{ev.time} · {ev.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-neutral-50 rounded-2xl p-6 border border-border">
            <span className="material-symbols-outlined text-3xl text-secondary">mark_email_unread</span>
            <h3 className="mt-4 text-lg font-semibold text-primary">Weekly Updates</h3>
            <p className="text-sm text-text-secondary mt-2">Get the latest news and event reminders.</p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm"
                required
              />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold">Subscribe</button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}