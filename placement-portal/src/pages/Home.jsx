import { Link } from 'react-router-dom'
import { Briefcase, Building2, Users, TrendingUp, CalendarDays, ClipboardCheck, FileText } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import JobCard from '../components/JobCard.jsx'

const fmt = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })

export default function Home() {
  const { jobs, drives, companies } = useApp()
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Your next offer letter starts on this page.</h1>
            <p className="lead">Browse openings, register for campus drives and follow every application from first click to final round, all in one place.</p>
            <div className="row gap">
              <Link to="/register" className="btn btn-accent">Create student account</Link>
              <Link to="/jobs" className="btn btn-outline-light">See open roles</Link>
            </div>
          </div>
          <aside className="drive-board" aria-label="Upcoming drives">
            <h3><CalendarDays size={18} /> On the drive board</h3>
            {drives.slice(0, 4).map((d) => (
              <div className="board-row" key={d.id}>
                <span className="board-date">{fmt(d.date)}</span>
                <div><strong>{d.company}</strong><small>{d.time}, {d.venue}</small></div>
              </div>
            ))}
            <Link to="/drives" className="board-link">View all drives</Link>
          </aside>
        </div>
      </section>

      <section className="container stats">
        {[[Users, '1,240', 'Students registered'], [Building2, '86', 'Recruiting companies'], [Briefcase, '412', 'Offers last year'], [TrendingUp, '18.5 LPA', 'Highest package']].map(([Icon, n, l]) => (
          <div className="card stat" key={l}><Icon size={22} /><strong>{n}</strong><span>{l}</span></div>
        ))}
      </section>

      <section className="container section">
        <h2>How placements work here</h2>
        <div className="grid-3">
          {[[FileText, 'Build your profile', 'Add academic details and skills once. Recruiters see the same record you do.'],
            [Briefcase, 'Apply to roles', 'Check eligibility on each listing, then apply with a resume and short note.'],
            [ClipboardCheck, 'Track every stage', 'Applied, shortlisted, interview, selected: your status updates as the cell updates it.']].map(([Icon, t, p]) => (
            <div className="card" key={t}><div className="icon-circle"><Icon size={22} /></div><h3>{t}</h3><p className="muted">{p}</p></div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="row between"><h2>Latest openings</h2><Link to="/jobs" className="link">All listings</Link></div>
        <div className="grid-3">{jobs.slice(0, 3).map((j) => <JobCard key={j.id} job={j} />)}</div>
      </section>

      <section className="container section">
        <h2>Companies visiting this season</h2>
        <div className="logo-row">
          {companies.map((c) => <span key={c.id} className="logo-pill" style={{ '--c': c.color }}>{c.name}</span>)}
        </div>
      </section>
    </>
  )
}
