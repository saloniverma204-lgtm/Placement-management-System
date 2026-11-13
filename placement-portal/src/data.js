export const student = {
  id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@college.edu', roll: 'CS21B045', phone: '+91 98765 43210',
  branch: 'Computer Science & Engineering', semester: 7, cgpa: 8.6, backlogs: 0, tenth: 94.2, twelfth: 91.8,
  skills: ['React', 'Node.js', 'Java', 'SQL', 'DSA'], placed: false,
}

export const students = [
  { id: 1, name: 'Aarav Sharma', roll: 'CS21B045', branch: 'CSE', cgpa: 8.6, status: 'Eligible' },
  { id: 2, name: 'Simran Kaur', roll: 'IT21B012', branch: 'IT', cgpa: 9.1, status: 'Placed' },
  { id: 3, name: 'Rohan Verma', roll: 'EC21B078', branch: 'ECE', cgpa: 7.4, status: 'Eligible' },
  { id: 4, name: 'Priya Singh', roll: 'CS21B101', branch: 'CSE', cgpa: 8.2, status: 'Placed' },
  { id: 5, name: 'Karan Mehta', roll: 'ME21B033', branch: 'Mechanical', cgpa: 6.8, status: 'Not eligible' },
]

export const companies = [
  { id: 1, name: 'TechNova Systems', sector: 'Software', location: 'Bengaluru', about: 'Cloud and enterprise software company building developer tools used by 5,000+ teams.', hires: 24, color: '#0f766e' },
  { id: 2, name: 'FinEdge Labs', sector: 'FinTech', location: 'Gurugram', about: 'Payments infrastructure start-up processing over a billion transactions every month.', hires: 12, color: '#b45309' },
  { id: 3, name: 'Orbit Analytics', sector: 'Data & AI', location: 'Hyderabad', about: 'Applied AI team turning retail and logistics data into forecasting products.', hires: 15, color: '#4338ca' },
  { id: 4, name: 'GreenGrid Power', sector: 'Core Engineering', location: 'Pune', about: 'Renewable energy engineering firm designing solar and storage systems.', hires: 10, color: '#15803d' },
]

export const jobs = [
  { id: 1, title: 'Software Engineer', company: 'TechNova Systems', type: 'Full-time', location: 'Bengaluru', ctc: '12 LPA', minCgpa: 7.5, deadline: '2026-12-05', skills: ['React', 'Node.js', 'SQL'] },
  { id: 2, title: 'Frontend Developer Intern', company: 'FinEdge Labs', type: 'Internship', location: 'Remote', ctc: '35K / month', minCgpa: 7.0, deadline: '2026-11-28', skills: ['React', 'CSS', 'JavaScript'] },
  { id: 3, title: 'Data Analyst', company: 'Orbit Analytics', type: 'Full-time', location: 'Hyderabad', ctc: '9 LPA', minCgpa: 7.0, deadline: '2026-12-12', skills: ['Python', 'SQL', 'Statistics'] },
  { id: 4, title: 'Machine Learning Intern', company: 'Orbit Analytics', type: 'Internship', location: 'Hyderabad', ctc: '40K / month', minCgpa: 8.0, deadline: '2026-12-01', skills: ['Python', 'ML', 'Pandas'] },
  { id: 5, title: 'Graduate Engineer Trainee', company: 'GreenGrid Power', type: 'Full-time', location: 'Pune', ctc: '6.5 LPA', minCgpa: 6.5, deadline: '2026-12-20', skills: ['AutoCAD', 'MATLAB'] },
  { id: 6, title: 'Backend Developer', company: 'FinEdge Labs', type: 'Full-time', location: 'Gurugram', ctc: '14 LPA', minCgpa: 8.0, deadline: '2026-12-08', skills: ['Java', 'Spring', 'SQL'] },
]

export const drives = [
  { id: 1, company: 'TechNova Systems', date: '2026-11-24', time: '10:00 AM', venue: 'Main Auditorium', mode: 'On campus', rounds: ['Online test', 'Technical interview', 'HR round'] },
  { id: 2, company: 'FinEdge Labs', date: '2026-11-27', time: '09:30 AM', venue: 'Seminar Hall B', mode: 'On campus', rounds: ['Coding round', 'Interview'] },
  { id: 3, company: 'Orbit Analytics', date: '2026-12-03', time: '11:00 AM', venue: 'Google Meet', mode: 'Virtual', rounds: ['Aptitude', 'Case study', 'Interview'] },
  { id: 4, company: 'GreenGrid Power', date: '2026-12-10', time: '10:00 AM', venue: 'Block C Lab', mode: 'On campus', rounds: ['Written test', 'Panel interview'] },
]

export const initialApplications = [
  { id: 1, jobId: 1, appliedOn: '2026-11-02', stage: 2 },
  { id: 2, jobId: 3, appliedOn: '2026-11-05', stage: 1 },
  { id: 3, jobId: 2, appliedOn: '2026-10-28', stage: 4 },
]

// Application stages. Index 4 = Rejected is a terminal state.
export const stages = ['Applied', 'Shortlisted', 'Interview', 'Selected', 'Rejected']
