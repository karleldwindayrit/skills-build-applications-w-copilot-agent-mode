import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/teams`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results || payload.data || [];
        setTeams(items);
      } catch (err) {
        setError(err.message || 'Failed to load teams');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div className="alert alert-light">Loading teams...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4">
      <h2 className="mb-3">Teams</h2>
      <div className="row g-3">
        {teams.map((team) => (
          <div key={team.id ?? team._id ?? team.name} className="col-md-6 col-xl-4">
            <div className="border rounded-4 p-3 h-100">
              <h4>{team.name}</h4>
              <p className="text-muted mb-2">{team.city}</p>
              <div className="fw-bold text-primary">{team.points} pts</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
