import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/workouts`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results || payload.data || [];
        setWorkouts(items);
      } catch (err) {
        setError(err.message || 'Failed to load workouts');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <div className="alert alert-light">Loading workouts...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4">
      <h2 className="mb-3">Workouts</h2>
      <div className="row g-3">
        {workouts.map((workout) => (
          <div key={workout.id ?? workout._id ?? workout.title} className="col-md-6 col-xl-4">
            <div className="border rounded-4 p-3 h-100">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h4 className="mb-0">{workout.title}</h4>
                <span className="badge text-bg-light text-dark">{workout.difficulty}</span>
              </div>
              <div className="text-muted mb-1">Focus: {workout.focus}</div>
              <div className="fw-semibold">{workout.durationMinutes} min</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
