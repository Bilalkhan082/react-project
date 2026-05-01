import './App.css'

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

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">Acme</div>
        <nav>
          <a className="nav-link active" href="#">
            Overview
          </a>
          <a className="nav-link" href="#">
            Analytics
          </a>
          <a className="nav-link" href="#">
            Customers
          </a>
          <a className="nav-link" href="#">
            Settings
          </a>
        </nav>
      </aside>

      <div className="main">
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
      </div>
    </div>
  )
}

export default App
