import './App.css'

import { useState } from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar
} from 'recharts'

const stats = [
  { label: 'Active users', value: '2,847', change: '+12.4%', positive: true },
  { label: 'Revenue', value: '$48.2k', change: '+8.1%', positive: true },
  { label: 'Open tickets', value: '34', change: '−6', positive: true },
  { label: 'Uptime', value: '99.98%', change: '30d', positive: true },
]

const activity = [
  { title: 'New signup', detail: 'user@example.com', time: '2 min ago' },
  { title: 'Payment received', detail: 'Invoice #1042', time: '18 min ago' },
  { title: 'API deploy', detail: 'production', time: '1 hr ago' },
  { title: 'Report exported', detail: 'Q1-summary.pdf', time: '3 hr ago' },
]

const analyticsData = [
  { month: 'Jan', users: 400, revenue: 240 },
  { month: 'Feb', users: 300, revenue: 139 },
  { month: 'Mar', users: 500, revenue: 380 },
  { month: 'Apr', users: 700, revenue: 490 },
  { month: 'May', users: 600, revenue: 430 },
  { month: 'Jun', users: 900, revenue: 650 },
]

function App() {
  const [page, setPage] = useState('overview')
  return (
    <div className="dashboard">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">Acme</div>
        <nav>
          <button
            className={`nav-link ${page === 'overview' ? 'active' : ''}`}
            onClick={() => setPage('overview')}
          >
            Overview
          </button>
          <button
            className={`nav-link ${page === 'analytics' ? 'active' : ''}`}
            onClick={() => setPage('analytics')}
          >
            Analytics
          </button>
          <button
            className={`nav-link ${page === 'customers' ? 'active' : ''}`}
            onClick={() => setPage('customers')}
          >
            Customers
          </button>
          <button
            className={`nav-link ${page === 'settings' ? 'active' : ''}`}
            onClick={() => setPage('settings')}
          >
            Settings
          </button>
        </nav>
      </aside>

      <div className="main">
        {page === 'overview' && (
          <>
            <header className="topbar">
              <h1>Dashboard</h1>
              <p className="subtitle">Snapshot of your workspace</p>
            </header>

            <section className="stats" aria-label="Key metrics">
              {stats.map((s) => (
                <article key={s.label} className="stat-card">
                  <span className="stat-label">{s.label}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className={`stat-change ${s.positive ? 'up' : 'down'}`}>
                    {s.change}
                  </span>
                </article>
              ))}
            </section>

            <section className="panel" aria-labelledby="activity-heading">
              <h2 id="activity-heading">Recent activity</h2>
              <ul className="activity-list">
                {activity.map((row) => (
                  <li key={row.title + row.time}>
                    <div>
                      <span className="activity-title">{row.title}</span>
                      <span className="activity-detail">{row.detail}</span>
                    </div>
                    <time className="activity-time">{row.time}</time>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {page === 'analytics' && (
          <>
            <section className="stats">
              <article className="stat-card">
                <span className="stat-label">Growth</span>
                <span className="stat-value">+28%</span>
                <span className="stat-change up">This month</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">Revenue</span>
                <span className="stat-value">$12.4k</span>
                <span className="stat-change up">+14%</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">Visitors</span>
                <span className="stat-value">18.2k</span>
                <span className="stat-change up">+9%</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">Bounce Rate</span>
                <span className="stat-value">21%</span>
                <span className="stat-change up">-3%</span>
              </article>
            </section>

            <section className="panel">
              <h2>User Growth Analytics</h2>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#6366f1"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="panel" style={{ marginTop: '24px' }}>
              <h2>Revenue Overview</h2>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="revenue"
                      fill="#16a34a"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </>
        )}

      </div>




    </div>
  )
}

export default App
