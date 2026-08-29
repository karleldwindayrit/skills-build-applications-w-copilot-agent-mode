import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const navItems = [
  { to: '/', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  return (
    <main className="container py-4 py-lg-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="bg-primary text-white p-4 p-lg-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3">
            <div>
              <p className="text-uppercase fw-semibold mb-2 opacity-75">Octofit Tracker</p>
              <h1 className="display-6 fw-bold mb-0">Fitness tracking dashboard</h1>
            </div>
            <div className="text-white-50 small">
              VITE_CODESPACE_NAME must be defined in .env.local when running in Codespaces.
            </div>
          </div>
        </div>

        <div className="p-3 p-lg-4 border-bottom bg-light">
          <nav className="nav nav-pills flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : 'text-primary'} rounded-pill px-3`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-3 p-lg-4">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;
