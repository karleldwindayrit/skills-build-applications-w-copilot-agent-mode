export type User = {
  id: number;
  name: string;
  email: string;
  level: string;
  teamId: number | null;
};

export type Team = {
  id: number;
  name: string;
  city: string;
  points: number;
};

export type Activity = {
  id: number;
  userId: number;
  type: string;
  durationMinutes: number;
  distanceKm: number;
  date: string;
};

export type LeaderboardEntry = {
  rank: number;
  name: string;
  points: number;
  team: string;
};

export type Workout = {
  id: number;
  title: string;
  focus: string;
  durationMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

export const users: User[] = [
  { id: 1, name: 'Ava Thompson', email: 'ava@example.com', level: 'Intermediate', teamId: 1 },
  { id: 2, name: 'Leo Martinez', email: 'leo@example.com', level: 'Advanced', teamId: 1 },
  { id: 3, name: 'Mia Chen', email: 'mia@example.com', level: 'Beginner', teamId: 2 },
  { id: 4, name: 'Noah Patel', email: 'noah@example.com', level: 'Intermediate', teamId: 2 },
];

export const teams: Team[] = [
  { id: 1, name: 'Phoenix Pace', city: 'Seattle', points: 1280 },
  { id: 2, name: 'Summit Striders', city: 'Denver', points: 1215 },
  { id: 3, name: 'Harbor Hustle', city: 'Boston', points: 1174 },
];

export const activities: Activity[] = [
  { id: 1, userId: 1, type: 'Running', durationMinutes: 32, distanceKm: 5.2, date: '2026-08-20' },
  { id: 2, userId: 2, type: 'Strength', durationMinutes: 45, distanceKm: 0, date: '2026-08-21' },
  { id: 3, userId: 3, type: 'Cycling', durationMinutes: 38, distanceKm: 10.4, date: '2026-08-22' },
  { id: 4, userId: 4, type: 'Walking', durationMinutes: 25, distanceKm: 3.1, date: '2026-08-23' },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Leo Martinez', points: 980, team: 'Phoenix Pace' },
  { rank: 2, name: 'Ava Thompson', points: 940, team: 'Phoenix Pace' },
  { rank: 3, name: 'Noah Patel', points: 910, team: 'Summit Striders' },
  { rank: 4, name: 'Mia Chen', points: 885, team: 'Summit Striders' },
];

export const workouts: Workout[] = [
  { id: 1, title: '5K Tempo Run', focus: 'Cardio', durationMinutes: 30, difficulty: 'Medium' },
  { id: 2, title: 'Core Circuit', focus: 'Strength', durationMinutes: 20, difficulty: 'Easy' },
  { id: 3, title: 'Interval Blast', focus: 'Conditioning', durationMinutes: 35, difficulty: 'Hard' },
  { id: 4, title: 'Mobility Reset', focus: 'Recovery', durationMinutes: 15, difficulty: 'Easy' },
];
