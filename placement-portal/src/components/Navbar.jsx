import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { GraduationCap, Menu, X, LogOut } from 'lucide-react'
import { useApp } from '../AppContext.jsx'

export default function Navbar() {
  const { role, setRole } = useApp()
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const close = () => setOpen(false)

  const links = [
    ['/', 'Home'], ['/jobs', 'Jobs & internships'], ['/drives', 'Drives'],
    ...(role === 'student' ? [['/dashboard', 'Dashboard'], ['/status', 'My applications']] : []),
    ...(role === 'admin' ? [['/admin', 'Admin panel']] : []),
  ]

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}><GraduationCap size={26} /> CampusHire</Link>
        <button className="icon-btn menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close}>{label}</NavLink>
          ))}
          {role ? (
            <button className="btn btn-ghost" onClick={() => { setRole(null); close(); nav('/') }}><LogOut size={16} /> Log out</button>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost" onClick={close}>Log in</Link>
              <Link to="/register" className="btn btn-primary" onClick={close}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
