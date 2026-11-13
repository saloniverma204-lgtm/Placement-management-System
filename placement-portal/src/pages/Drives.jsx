import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

export default function Drives() {
  const { drives, companies } = useApp()
  return (
    <div className="container page">
      <h1>Upcoming placement drives</h1>
      <div className="stack-gap">
        {drives.map((d) => {
          const c = companies.find((x) => x.name === d.company)
          const dt = new Date(d.date)
          return (
            <article className="card drive" key={d.id}>
              <div className="date-tile" style={{ background: c?.color || '#0f766e' }}><strong>{dt.getDate()}</strong>{dt.toLocaleString('en-IN', { month: 'short' })}</div>
              <div className="drive-body">
                <div className="row between"><h3>{d.company}</h3><StatusBadge label={d.mode} /></div>
                {c && <p className="muted">{c.sector} · {c.location}. {c.about}</p>}
                <ul className="meta">
                  <li><CalendarDays size={15} /> {dt.toLocaleDateString('en-IN', { weekday: 'long' })}</li>
                  <li><Clock size={15} /> {d.time}</li>
                  <li><MapPin size={15} /> {d.venue}</li>
                </ul>
                <div className="chips">{d.rounds.map((r, i) => <span key={r} className="chip">Round {i + 1}: {r}</span>)}</div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
