import { useEffect, useState } from 'react';
import { getApiBaseUrl, normalizeApiResponse } from '../utils/api';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const endpoint = `${getApiBaseUrl()}/api/users`;
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        setUsers(normalizeApiResponse(payload));
      } catch (err) {
        setError(err.message || 'Unable to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="container py-5"><div className="loading-box">Loading users…</div></div>;
  }

  if (error) {
    return <div className="container py-5"><div className="error-box">{error}</div></div>;
  }

  return (
    <main className="container py-5">
      <div className="card content-card shadow-sm rounded-4 p-4">
        <h2 className="mb-4">Users</h2>
        {users.length === 0 ? (
          <div className="empty-box">No users available.</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Level</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id ?? user._id ?? `${user.name}-${user.email}`}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.level}</td>
                    <td>{user.teamId ?? 'Unassigned'}</td>
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

export default Users;
