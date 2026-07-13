import { useState } from 'react';

const mockApplications = [
  { id: 1, studentFirstName: 'Aisha', studentLastName: 'Bello', grade: 'Primary 3', date: '2024-10-20', status: 'pending' },
  { id: 2, studentFirstName: 'Ibrahim', studentLastName: 'Musa', grade: 'SS1', date: '2024-10-18', status: 'reviewed' },
];
const mockEvents = [
  { id: 1, title: 'Parent-Teacher Conference', day: 24, month: 'Oct', time: '09:00 AM', location: 'Main Hall' },
  { id: 2, title: 'Science Exhibition', day: 5, month: 'Nov', time: '10:00 AM', location: 'Science Block' },
];

export default function Dashboard() {
  const [tab, setTab] = useState('overview');
  const tabs = ['overview', 'applications', 'events'];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
          <div className="flex bg-white rounded-lg p-1 border border-border">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition ${
                  tab === t ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'overview' && <Overview />}
        {tab === 'applications' && <ApplicationsTable />}
        {tab === 'events' && <EventsPanel />}
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard icon="school" label="Total Students" value="512" />
        <StatCard icon="groups" label="Teachers" value="48" />
        <StatCard icon="description" label="Pending Applications" value="27" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
          <table className="w-full text-left text-sm">
            <thead className="text-text-muted border-b">
              <tr><th className="pb-2">Name</th><th className="pb-2">Grade</th><th className="pb-2">Status</th></tr>
            </thead>
            <tbody>
              {mockApplications.slice(0,5).map(a => (
                <tr key={a.id} className="border-b border-border-light">
                  <td className="py-2">{a.studentFirstName} {a.studentLastName}</td>
                  <td>{a.grade}</td>
                  <td><span className={`px-2 py-1 rounded-full text-xs ${a.status==='pending'?'bg-tertiary/20 text-tertiary':'bg-secondary/20 text-secondary'}`}>{a.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <ul className="space-y-4">
            {mockEvents.slice(0,5).map(e => (
              <li key={e.id} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary shrink-0">
                  <span className="text-xs font-semibold">{e.month}</span>
                  <span className="text-lg font-bold leading-none">{e.day}</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary">{e.title}</h4>
                  <p className="text-sm text-text-secondary">{e.time} · {e.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Placeholder Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Enrollment Trends</h3>
        <div className="h-48 bg-neutral-100 rounded-xl flex items-center justify-center text-text-muted">
          [Chart.js / Recharts Placeholder]
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-sm text-text-secondary">{label}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}

function ApplicationsTable() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-4">All Applications</h2>
      {/* Full table with actions */}
    </div>
  );
}

function EventsPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>
      {/* Add/edit form */}
    </div>
  );
}