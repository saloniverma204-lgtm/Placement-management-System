import { useParams, useNavigate, Link } from 'react-router-dom'
import { useApp } from '../AppContext.jsx'

export default function Apply() {
  const { jobId } = useParams()
  const { jobs, me, setApplications, applications } = useApp()
  const nav = useNavigate()
  const job = jobs.find((j) => j.id === Number(jobId))
  if (!job) return <div className="container page"><p className="empty">That listing no longer exists. <Link to="/jobs" className="link">Back to listings</Link></p></div>
  const eligible = me.cgpa >= job.minCgpa

  const submit = (e) => {
    e.preventDefault()
    setApplications([{ id: Date.now(), jobId: job.id, appliedOn: new Date().toISOString().slice(0, 10), stage: 0 }, ...applications])
    nav('/status')
  }

  return (
    <div className="container page narrow">
      <h1>Apply for {job.title}</h1>
      <p className="muted">{job.company} · {job.location} · {job.ctc}</p>
      {!eligible && <p className="error">Your CGPA ({me.cgpa}) is below the minimum of {job.minCgpa}. You can still submit, but the cell may reject it.</p>}
      <form className="card" onSubmit={submit}>
        <div className="form-grid">
          <label>Full name<input defaultValue={me.name} required /></label>
          <label>Roll number<input defaultValue={me.roll} required /></label>
          <label>Email<input type="email" defaultValue={me.email} required /></label>
          <label>CGPA<input defaultValue={me.cgpa} required /></label>
          <label className="span2">Resume (PDF)<input type="file" accept=".pdf" required /></label>
          <label className="span2">Why are you a good fit?<textarea rows="4" placeholder="Two or three lines about your relevant projects or skills" required /></label>
          <label className="span2 check"><input type="checkbox" required /> I confirm my details are correct and I'm available on the drive date.</label>
        </div>
        <div className="row gap"><button className="btn btn-primary">Submit application</button><Link to="/jobs" className="btn btn-ghost">Cancel</Link></div>
      </form>
    </div>
  )
}
