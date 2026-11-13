import { useState } from 'react'
import { Search } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import JobCard from '../components/JobCard.jsx'

export default function Jobs() {
  const { jobs } = useApp()
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')
  const list = jobs.filter((j) => (type === 'All' || j.type === type) && `${j.title} ${j.company} ${j.skills.join(' ')}`.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="container page">
      <h1>Jobs &amp; internships</h1>
      <div className="toolbar">
        <div className="input-icon grow"><Search size={16} /><input placeholder="Search by role, company or skill" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="tabs">{['All', 'Full-time', 'Internship'].map((t) => <button key={t} className={type === t ? 'active' : ''} onClick={() => setType(t)}>{t}</button>)}</div>
      </div>
      {list.length ? <div className="grid-3">{list.map((j) => <JobCard key={j.id} job={j} />)}</div>
        : <p className="empty">No listings match your search. Clear the filters to see everything.</p>}
    </div>
  )
}
