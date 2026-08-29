import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { apiBaseUrl } from './config/api.js';
import { connectDatabase } from './config/database.js';
import { User, Team, Activity, LeaderboardEntry, Workout } from './models/index.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Octofit Tracker API is running.',
    apiBaseUrl,
  });
});

app.get('/api/users', async (_req, res) => {
  const users = await User.find({}).sort({ id: 1 });
  res.json(users);
});

app.get('/api/teams', async (_req, res) => {
  const teams = await Team.find({}).sort({ id: 1 });
  res.json(teams);
});

app.get('/api/activities', async (_req, res) => {
  const activities = await Activity.find({}).sort({ id: 1 });
  res.json(activities);
});

app.get('/api/leaderboard', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).sort({ rank: 1 });
  res.json(leaderboard);
});

app.get('/api/workouts', async (_req, res) => {
  const workouts = await Workout.find({}).sort({ id: 1 });
  res.json(workouts);
});

const startServer = async () => {
  try {
    await connectDatabase();
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.warn('MongoDB not available, continuing without database connection:', error);
  }

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`API base URL: ${apiBaseUrl}`);
  });
};

startServer();
