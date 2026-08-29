import { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeApiResponse } from '../utils/api';

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
        setTeams(normalizeApiResponse(payload));
      } catch (err) {
        setError(err.message || 'Unable to load teams.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div className="container py-5"><div className="loading-box">Loading teams…</div></div>;
  }

  if (error) {
    return <div className="container py-5"><div className="error-box">{error}</div></div>;
  }

  return (
    <main className="container py-5">
      <div className="card content-card shadow-sm rounded-4 p-4">
        <h2 className="mb-4">Teams</h2>
        {teams.length === 0 ? (
          <div className="empty-box">No teams available.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>City</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id ?? team._id ?? team.name}>
                    <td>{team.id}</td>
                    <td>{team.name}</td>
                    <td>{team.city}</td>
                    <td>{team.points}</td>
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

export default Teams;
