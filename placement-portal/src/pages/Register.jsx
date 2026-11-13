import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../AppContext.jsx'

export default function Register() {
  const { setRole } = useApp()
  const nav = useNavigate()
  const [err, setErr] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    if (f.get('password') !== f.get('confirm')) return setErr('Passwords do not match. Re-enter both fields.')
    setRole('student')
    nav('/dashboard')
  }

  return (
    <section className="auth">
      <form className="card auth-card wide" onSubmit={submit}>
        <h2>Student registration</h2>
        <p className="muted">Use your college roll number so the cell can verify you.</p>
        <div className="form-grid">
          <label>Full name<input name="name" required /></label>
          <label>Roll number<input name="roll" required placeholder="CS21B045" /></label>
          <label>College email<input name="email" type="email" required /></label>
          <label>Phone<input name="phone" type="tel" required /></label>
          <label>Branch<select name="branch" required><option value="">Select branch</option><option>CSE</option><option>IT</option><option>ECE</option><option>Mechanical</option><option>Civil</option></select></label>
          <label>Current CGPA<input name="cgpa" type="number" step="0.01" min="0" max="10" required /></label>
          <label>Password<input name="password" type="password" minLength={6} required /></label>
          <label>Confirm password<input name="confirm" type="password" required /></label>
        </div>
        {err && <p className="error" role="alert">{err}</p>}
        <button className="btn btn-primary full">Create account</button>
        <p className="muted center">Already registered? <Link to="/login" className="link">Log in</Link></p>
      </form>
    </section>
  )
}
