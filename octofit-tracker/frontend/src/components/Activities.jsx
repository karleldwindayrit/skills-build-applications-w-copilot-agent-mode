import { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeApiResponse } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const endpoint = `${getApiBaseUrl()}/api/activities`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setActivities(normalizeApiResponse(payload));
      } catch (err) {
        setError(err.message || 'Unable to load activities.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <div className="container py-5"><div className="loading-box">Loading activities…</div></div>;
  }

  if (error) {
    return <div className="container py-5"><div className="error-box">{error}</div></div>;
  }

  return (
    <main className="container py-5">
      <div className="card content-card shadow-sm rounded-4 p-4">
        <h2 className="mb-4">Activities</h2>
        {activities.length === 0 ? (
          <div className="empty-box">No activities available.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Type</th>
                  <th>Minutes</th>
                  <th>Distance</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id ?? activity._id ?? `${activity.userId}-${activity.date}`}>
                    <td>{activity.id}</td>
                    <td>{activity.userId}</td>
                    <td>{activity.type}</td>
                    <td>{activity.durationMinutes}</td>
                    <td>{activity.distanceKm} km</td>
                    <td>{activity.date}</td>
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

export default Activities;
