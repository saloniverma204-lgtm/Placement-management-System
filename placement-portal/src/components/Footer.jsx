import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand light"><GraduationCap size={24} /> CampusHire</div>
          <p>The Training &amp; Placement Cell's portal for students, recruiters and coordinators.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/jobs">Jobs &amp; internships</Link>
          <Link to="/drives">Placement drives</Link>
          <Link to="/register">Student registration</Link>
        </div>
        <div>
          <h4>Contact the cell</h4>
          <span><Mail size={15} /> placements@college.edu</span>
          <span><Phone size={15} /> +91 183 000 0000</span>
          <span><MapPin size={15} /> Amritsar, Punjab</span>
        </div>
      </div>
      <div className="container copy">© 2026 CampusHire. Student project, frontend demo with sample data.</div>
    </footer>
  )
}
