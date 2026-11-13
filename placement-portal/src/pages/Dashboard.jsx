import { Link } from 'react-router-dom'
import { Mail, Phone, BookOpen, Award } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { stages } from '../data.js'

export default function Dashboard() {
  const { me, applications, jobs } = useApp()
  const initials = me.name.split(' ').map((n) => n[0]).join('')
  const count = (s) => applications.filter((a) => stages[a.stage] === s).length
  const academics = [['CGPA', me.cgpa], ['Semester', me.semester], ['Active backlogs', me.backlogs], ['10th %', me.tenth], ['12th %', me.twelfth]]

  return (
    <div className="container page">
      <h1>Hello, {me.name.split(' ')[0]}</h1>
      <div className="dash-grid">
        <aside className="card profile">
          <div className="avatar">{initials}</div>
          <h3>{me.name}</h3>
          <p className="muted">{me.roll}</p>
          <StatusBadge label={me.placed ? 'Placed' : 'Eligible'} />
          <ul className="meta stack">
            <li><Mail size={15} /> {me.email}</li>
            <li><Phone size={15} /> {me.phone}</li>
            <li><BookOpen size={15} /> {me.branch}</li>
          </ul>
          <div className="chips">{me.skills.map((s) => <span key={s} className="chip">{s}</span>)}</div>
        </aside>

        <div className="stack-gap">
          <div className="grid-4">
            {[['Applications', applications.length], ['Shortlisted', count('Shortlisted')], ['Interviews', count('Interview')], ['Offers', count('Selected')]].map(([l, n]) => (
              <div className="card stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
          <div className="card">
            <h3><Award size={18} /> Academic details</h3>
            <div className="grid-5">{academics.map(([l, v]) => <div className="kv" key={l}><span>{l}</span><strong>{v}</strong></div>)}</div>
          </div>
          <div className="card">
            <div className="row between"><h3>Recent applications</h3><Link to="/status" className="link">Track all</Link></div>
            <table className="table">
              <thead><tr><th>Role</th><th>Company</th><th>Status</th></tr></thead>
              <tbody>
                {applications.slice(0, 4).map((a) => { const j = jobs.find((x) => x.id === a.jobId); return j && (
                  <tr key={a.id}><td>{j.title}</td><td>{j.company}</td><td><StatusBadge label={stages[a.stage]} /></td></tr>) })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
