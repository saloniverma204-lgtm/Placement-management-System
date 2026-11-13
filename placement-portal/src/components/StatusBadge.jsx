const tone = { Selected: 'green', Rejected: 'red', Interview: 'amber', Shortlisted: 'blue', Applied: 'grey',
  Placed: 'green', Eligible: 'blue', 'Not eligible': 'red', 'Full-time': 'blue', Internship: 'amber', Virtual: 'blue', 'On campus': 'green' }
export default function StatusBadge({ label }) {
  return <span className={`badge ${tone[label] || 'grey'}`}>{label}</span>
}
