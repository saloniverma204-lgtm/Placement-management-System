import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AppContext } from './AppContext.jsx'
import * as seed from './data.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Jobs from './pages/Jobs.jsx'
import Apply from './pages/Apply.jsx'
import Drives from './pages/Drives.jsx'
import Status from './pages/Status.jsx'
import Admin from './pages/Admin.jsx'

export default function App() {
  // Everything lives in React state; refreshing the page resets to the sample data.
  const [role, setRole] = useState(null) // null | 'student' | 'admin'
  const [jobs, setJobs] = useState(seed.jobs)
  const [companies, setCompanies] = useState(seed.companies)
  const [students, setStudents] = useState(seed.students)
  const [applications, setApplications] = useState(seed.initialApplications)

  const ctx = { role, setRole, jobs, setJobs, companies, setCompanies, students, setStudents, applications, setApplications, drives: seed.drives, me: seed.student }
  const guard = (needed, el) => (role === needed ? el : <Navigate to="/login" replace />)

  return (
    <AppContext.Provider value={ctx}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/dashboard" element={guard('student', <Dashboard />)} />
          <Route path="/apply/:jobId" element={guard('student', <Apply />)} />
          <Route path="/status" element={guard('student', <Status />)} />
          <Route path="/admin" element={guard('admin', <Admin />)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </AppContext.Provider>
  )
}
