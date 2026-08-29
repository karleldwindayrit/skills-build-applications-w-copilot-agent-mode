import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function Home() {
  return (
    <main className="container py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="hero-card card shadow-lg border-0 rounded-4 p-4 p-md-5">
            <p className="eyebrow text-uppercase fw-semibold mb-3">Octofit Tracker</p>
            <h1 className="display-5 fw-bold mb-3">Fitness progression, team momentum, and leaderboard energy.</h1>
            <p className="lead text-secondary mb-4">
              View users, teams, workouts, and activity trends from the API tier in a single
              dashboard built for the Octofit multi-tier app.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <NavLink className="btn btn-primary btn-lg" to="/users">
                View users
              </NavLink>
              <NavLink className="btn btn-outline-primary btn-lg" to="/leaderboard">
                Leaderboard
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-primary" to="/">
            Octofit
          </NavLink>
          <div className="navbar-nav d-flex flex-row flex-wrap gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 rounded-pill ${isActive ? 'active bg-primary text-white' : 'text-dark'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
