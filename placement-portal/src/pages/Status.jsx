import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { stages } from '../data.js'

const path = ['Applied', 'Shortlisted', 'Interview', 'Selected']

export default function Status() {
  const { applications, jobs } = useApp()
  return (
    <div className="container page">
      <h1>My applications</h1>
      {!applications.length && <p className="empty">You haven't applied yet. <Link to="/jobs" className="link">Browse listings</Link></p>}
      <div className="stack-gap">
        {applications.map((a) => {
          const j = jobs.find((x) => x.id === a.jobId)
          if (!j) return null
          const rejected = a.stage === 4
          return (
            <article className="card" key={a.id}>
              <div className="row between">
                <div><h3>{j.title}</h3><p className="muted">{j.company} · applied {new Date(a.appliedOn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p></div>
                <StatusBadge label={stages[a.stage]} />
              </div>
              <ol className="stepper">
                {path.map((s, i) => {
                  const done = rejected ? i === 0 : i < a.stage || a.stage === 3
                  const cls = done ? 'done' : !rejected && i === a.stage ? 'current' : ''
                  return <li key={s} className={cls}><span className="dot">{done ? <Check size={14} /> : i + 1}</span>{s}</li>
                })}
              </ol>
              {rejected && <p className="error">Not shortlisted for this role. Keep applying: new openings are added every week.</p>}
            </article>
          )
        })}
      </div>
    </div>
  )
}
