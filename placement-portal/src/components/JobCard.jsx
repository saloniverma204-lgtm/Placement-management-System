import { Link } from 'react-router-dom'
import { MapPin, Wallet, CalendarClock, Building2 } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'
import { useApp } from '../AppContext.jsx'

export default function JobCard({ job }) {
  const { role, applications } = useApp()
  const applied = applications.some((a) => a.jobId === job.id)
  return (
    <article className="card job-card">
      <div className="row between"><h3>{job.title}</h3><StatusBadge label={job.type} /></div>
      <p className="muted"><Building2 size={15} /> {job.company}</p>
      <ul className="meta">
        <li><MapPin size={15} /> {job.location}</li>
        <li><Wallet size={15} /> {job.ctc}</li>
        <li><CalendarClock size={15} /> Apply by {new Date(job.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</li>
      </ul>
      <div className="chips">{job.skills.map((s) => <span key={s} className="chip">{s}</span>)}</div>
      <div className="row between footer-row">
        <small className="muted">Min. CGPA {job.minCgpa}</small>
        {applied ? <StatusBadge label="Applied" /> : (
          <Link className="btn btn-primary btn-sm" to={role === 'student' ? `/apply/${job.id}` : '/login'}>Apply now</Link>
        )}
      </div>
    </article>
  )
}
