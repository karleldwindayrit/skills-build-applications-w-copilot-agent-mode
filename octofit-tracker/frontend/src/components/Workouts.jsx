import { useEffect, useState } from 'react';
import { normalizeApiResponse } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
        const endpoint = codespaceName
          ? `https://${codespaceName}-8000.app.github.dev/api/workouts`
          : 'http://localhost:8000/api/workouts';
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setWorkouts(normalizeApiResponse(payload));
      } catch (err) {
        setError(err.message || 'Unable to load workouts.');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <div className="container py-5"><div className="loading-box">Loading workouts…</div></div>;
  }

  if (error) {
    return <div className="container py-5"><div className="error-box">{error}</div></div>;
  }

  return (
    <main className="container py-5">
      <div className="card content-card shadow-sm rounded-4 p-4">
        <h2 className="mb-4">Workouts</h2>
        {workouts.length === 0 ? (
          <div className="empty-box">No workouts available.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Focus</th>
                  <th>Duration</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout) => (
                  <tr key={workout.id ?? workout._id ?? workout.title}>
                    <td>{workout.id}</td>
                    <td>{workout.title}</td>
                    <td>{workout.focus}</td>
                    <td>{workout.durationMinutes} min</td>
                    <td>{workout.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default Workouts;
