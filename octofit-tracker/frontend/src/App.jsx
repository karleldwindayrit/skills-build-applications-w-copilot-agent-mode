import './App.css';

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5">
            <p className="text-uppercase text-primary fw-semibold mb-3">Octofit Tracker</p>
            <h1 className="display-5 fw-bold mb-3">Track workouts, teams, and progress.</h1>
            <p className="lead text-secondary mb-4">
              A modern multi-tier fitness app for activity logging, leaderboard competition,
              and personalized performance insights.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-primary btn-lg">Sign in</button>
              <button className="btn btn-outline-primary btn-lg">View leaderboard</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
