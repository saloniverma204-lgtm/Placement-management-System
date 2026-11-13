import { useState } from 'react'
import { Trash2, Plus, Users, Building2, Briefcase } from 'lucide-react'
import { useApp } from '../AppContext.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

export default function Admin() {
  const { students, setStudents, companies, setCompanies, jobs, setJobs } = useApp()
  const [tab, setTab] = useState('students')
  const [form, setForm] = useState(null)
  const del = (set, list, id) => set(list.filter((x) => x.id !== id))

  const addCompany = (e) => {
    e.preventDefault(); const f = Object.fromEntries(new FormData(e.target))
    setCompanies([...companies, { id: Date.now(), hires: 0, color: '#0f766e', about: 'Newly added company.', ...f }]); setForm(null)
  }
  const addJob = (e) => {
    e.preventDefault(); const f = Object.fromEntries(new FormData(e.target))
    setJobs([{ id: Date.now(), ...f, skills: f.skills.split(',').map((s) => s.trim()).filter(Boolean), minCgpa: Number(f.minCgpa) }, ...jobs]); setForm(null)
  }
  const toggle = (id) => setStudents(students.map((s) => (s.id === id ? { ...s, status: s.status === 'Placed' ? 'Eligible' : 'Placed' } : s)))

  const tabs = [['students', Users, 'Students', students.length], ['companies', Building2, 'Companies', companies.length], ['jobs', Briefcase, 'Job listings', jobs.length]]

  return (
    <div className="container page">
      <h1>Admin dashboard</h1>
      <div className="grid-4">
        {tabs.map(([k, Icon, l, n]) => <button key={k} className={`card stat clickable ${tab === k ? 'selected' : ''}`} onClick={() => { setTab(k); setForm(null) }}><Icon size={22} /><strong>{n}</strong><span>{l}</span></button>)}
        <div className="card stat"><strong>{students.filter((s) => s.status === 'Placed').length}</strong><span>Students placed</span></div>
      </div>

      <div className="card table-wrap">
        <div className="row between">
          <h3>{tabs.find((t) => t[0] === tab)[2]}</h3>
          {tab !== 'students' && <button className="btn btn-primary btn-sm" onClick={() => setForm(form ? null : tab)}><Plus size={15} /> Add {tab === 'jobs' ? 'job' : 'company'}</button>}
        </div>

        {form === 'companies' && (
          <form className="inline-form" onSubmit={addCompany}>
            <input name="name" placeholder="Company name" required /><input name="sector" placeholder="Sector" required /><input name="location" placeholder="Location" required />
            <button className="btn btn-accent btn-sm">Save company</button>
          </form>
        )}
        {form === 'jobs' && (
          <form className="inline-form" onSubmit={addJob}>
            <input name="title" placeholder="Job title" required />
            <select name="company" required>{companies.map((c) => <option key={c.id}>{c.name}</option>)}</select>
            <select name="type"><option>Full-time</option><option>Internship</option></select>
            <input name="location" placeholder="Location" required /><input name="ctc" placeholder="CTC / stipend" required />
            <input name="minCgpa" type="number" step="0.1" placeholder="Min CGPA" required /><input name="deadline" type="date" required />
            <input name="skills" placeholder="Skills, comma separated" />
            <button className="btn btn-accent btn-sm">Save job</button>
          </form>
        )}

        <div className="scroll-x">
          {tab === 'students' && (
            <table className="table"><thead><tr><th>Name</th><th>Roll no.</th><th>Branch</th><th>CGPA</th><th>Status</th><th></th></tr></thead>
              <tbody>{students.map((s) => (
                <tr key={s.id}><td>{s.name}</td><td>{s.roll}</td><td>{s.branch}</td><td>{s.cgpa}</td><td><StatusBadge label={s.status} /></td>
                  <td className="actions"><button className="btn btn-ghost btn-sm" onClick={() => toggle(s.id)}>{s.status === 'Placed' ? 'Mark eligible' : 'Mark placed'}</button>
                    <button className="icon-btn danger" aria-label={`Remove ${s.name}`} onClick={() => del(setStudents, students, s.id)}><Trash2 size={16} /></button></td></tr>))}</tbody></table>
          )}
          {tab === 'companies' && (
            <table className="table"><thead><tr><th>Company</th><th>Sector</th><th>Location</th><th>Hires</th><th></th></tr></thead>
              <tbody>{companies.map((c) => (
                <tr key={c.id}><td>{c.name}</td><td>{c.sector}</td><td>{c.location}</td><td>{c.hires}</td>
                  <td className="actions"><button className="icon-btn danger" aria-label={`Remove ${c.name}`} onClick={() => del(setCompanies, companies, c.id)}><Trash2 size={16} /></button></td></tr>))}</tbody></table>
          )}
          {tab === 'jobs' && (
            <table className="table"><thead><tr><th>Title</th><th>Company</th><th>Type</th><th>CTC</th><th>Min CGPA</th><th></th></tr></thead>
              <tbody>{jobs.map((j) => (
                <tr key={j.id}><td>{j.title}</td><td>{j.company}</td><td><StatusBadge label={j.type} /></td><td>{j.ctc}</td><td>{j.minCgpa}</td>
                  <td className="actions"><button className="icon-btn danger" aria-label={`Remove ${j.title}`} onClick={() => del(setJobs, jobs, j.id)}><Trash2 size={16} /></button></td></tr>))}</tbody></table>
          )}
        </div>
      </div>
    </div>
  )
}
