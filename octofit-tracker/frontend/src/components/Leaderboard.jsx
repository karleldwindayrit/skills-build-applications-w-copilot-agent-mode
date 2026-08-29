import { useEffect, useState } from 'react';
import { normalizeApiResponse } from '../utils/api';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
        const endpoint = codespaceName
          ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard`
          : 'http://localhost:8000/api/leaderboard';
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setLeaderboard(normalizeApiResponse(payload));
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div className="container py-5"><div className="loading-box">Loading leaderboard…</div></div>;
  }

  if (error) {
    return <div className="container py-5"><div className="error-box">{error}</div></div>;
  }

  return (
    <main className="container py-5">
      <div className="card content-card shadow-sm rounded-4 p-4">
        <h2 className="mb-4">Leaderboard</h2>
        {leaderboard.length === 0 ? (
          <div className="empty-box">No leaderboard entries yet.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr key={entry.rank ?? entry.name}>
                    <td>#{entry.rank}</td>
                    <td>{entry.name}</td>
                    <td>{entry.team}</td>
                    <td>{entry.points}</td>
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

export default Leaderboard;
