import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { useApp } from '../AppContext.jsx'

export default function Login() {
  const { setRole } = useApp()
  const nav = useNavigate()
  const [who, setWho] = useState('student')

  const submit = (e) => {
    e.preventDefault()
    setRole(who) // UI demo only: no real authentication
    nav(who === 'admin' ? '/admin' : '/dashboard')
  }

  return (
    <section className="auth">
      <form className="card auth-card" onSubmit={submit}>
        <h2>Welcome back</h2>
        <p className="muted">Log in to continue. This demo accepts any details.</p>
        <div className="tabs">
          <button type="button" className={who === 'student' ? 'active' : ''} onClick={() => setWho('student')}>Student</button>
          <button type="button" className={who === 'admin' ? 'active' : ''} onClick={() => setWho('admin')}>Placement admin</button>
        </div>
        <label>Email<div className="input-icon"><Mail size={16} /><input type="email" required defaultValue={who === 'admin' ? 'tpo@college.edu' : 'aarav.sharma@college.edu'} key={who} /></div></label>
        <label>Password<div className="input-icon"><Lock size={16} /><input type="password" required defaultValue="password" /></div></label>
        <button className="btn btn-primary full">Log in</button>
        <p className="muted center">New student? <Link to="/register" className="link">Register here</Link></p>
      </form>
    </section>
  )
}
