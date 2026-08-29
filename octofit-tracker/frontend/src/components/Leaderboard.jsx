import { useEffect, useState } from 'react';
import { getApiEndpoint } from '../utils/api';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(getApiEndpoint('/api/leaderboard'));
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results || payload.data || [];
        setLeaderboard(items);
      } catch (err) {
        setError(err.message || 'Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="alert alert-light">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4">
      <h2 className="mb-3">Leaderboard</h2>
      <div className="list-group">
        {leaderboard.map((entry) => (
          <div key={entry.rank ?? entry.name} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <span className="badge text-bg-primary me-2">#{entry.rank}</span>
              <strong>{entry.name}</strong>
              <div className="text-muted small">{entry.team}</div>
            </div>
            <span className="fw-bold">{entry.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
