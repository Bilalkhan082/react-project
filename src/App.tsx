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

import { Menu } from 'lucide-react'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const getTitle = () => {
  if (page === 'overview') return 'Dashboard'
  if (page === 'analytics') return 'Analytics'
  if (page === 'customers') return 'Customers'
  if (page === 'settings') return 'Settings'
  return 'Dashboard'
}
  return (
    <div className="dashboard">
      {sidebarOpen && (
        <div
          className="overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>

        <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>


        <div className="brand">Acme</div>

        <nav >
          <button
            className={`nav-link ${page === 'overview' ? 'active' : ''}`}
            onClick={() => {
              setPage('overview')
              setSidebarOpen(false)
            }}
          >
            Overview
          </button>

          <button className={`nav-link ${page === 'analytics' ? 'active' : ''}`} onClick={() => { setPage('analytics'); setSidebarOpen(false) }}>
            Analytics
          </button>

          <button className={`nav-link ${page === 'customers' ? 'active' : ''}`} onClick={() => { setPage('customers'); setSidebarOpen(false) }}>
            Customers
          </button>

          <button className={`nav-link ${page === 'settings' ? 'active' : ''}`} onClick={() => { setPage('settings'); setSidebarOpen(false) }}>
            Settings
          </button>
        </nav>
      </aside>

      <div className="main">

        <header className="topbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div>
            <h1>{getTitle()}</h1>
            <p className="subtitle">Snapshot of your workspace</p>
          </div>
        </header>


        {page === 'overview' && (
          <>
            

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


        {page === 'customers' && (
          <>
            <header className="topbar">
              <h1>Customers</h1>
              <p className="subtitle">
                Customer engagement and activity
              </p>
            </header>

            <section className="stats">
              <article className="stat-card">
                <span className="stat-label">Total Customers</span>
                <span className="stat-value">8,492</span>
                <span className="stat-change up">+12%</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">New Customers</span>
                <span className="stat-value">324</span>
                <span className="stat-change up">+18%</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">Returning</span>
                <span className="stat-value">68%</span>
                <span className="stat-change up">+6%</span>
              </article>

              <article className="stat-card">
                <span className="stat-label">Satisfaction</span>
                <span className="stat-value">4.8/5</span>
                <span className="stat-change up">Excellent</span>
              </article>
            </section>

            <section className="panel">
              <h2>Customer Growth</h2>

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
                      stroke="#0ea5e9"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="panel" style={{ marginTop: '24px' }}>
              <h2>Top Customers</h2>

              <ul className="activity-list">
                <li>
                  <div>
                    <span className="activity-title">
                      John Smith
                    </span>

                    <span className="activity-detail">
                      Premium Member
                    </span>
                  </div>

                  <time className="activity-time">
                    $4,200
                  </time>
                </li>

                <li>
                  <div>
                    <span className="activity-title">
                      Sarah Khan
                    </span>

                    <span className="activity-detail">
                      Enterprise Client
                    </span>
                  </div>

                  <time className="activity-time">
                    $3,870
                  </time>
                </li>

                <li>
                  <div>
                    <span className="activity-title">
                      Ali Ahmed
                    </span>

                    <span className="activity-detail">
                      Returning Customer
                    </span>
                  </div>

                  <time className="activity-time">
                    $2,140
                  </time>
                </li>

                <li>
                  <div>
                    <span className="activity-title">
                      Emma Wilson
                    </span>

                    <span className="activity-detail">
                      VIP Customer
                    </span>
                  </div>

                  <time className="activity-time">
                    $5,320
                  </time>
                </li>
              </ul>
            </section>
          </>
        )}


        {page === 'settings' && (
          <>
            <header className="topbar">
              <h1>Settings</h1>

              <p className="subtitle">
                Manage your dashboard settings
              </p>
            </header>

            <section className="panel">
              <h2>General Settings</h2>

              <div className="settings-group">

                <label className="setting-item">
                  <input type="checkbox" />
                  Enable Notifications
                </label>

                <label className="setting-item">
                  <input type="checkbox" />
                  Enable Dark Mode
                </label>

                <label className="setting-item">
                  <input type="checkbox" />
                  Weekly Email Reports
                </label>

                <label className="setting-item">
                  <input type="checkbox" />
                  Auto Backup System
                </label>

              </div>
            </section>
          </>
        )}



      </div>




    </div>
  )
}

export default App
