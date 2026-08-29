import mongoose from 'mongoose';
import { User, Team, Activity, LeaderboardEntry, Workout } from '../models/index.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        const users = [
            { id: 1, name: 'Ava Thompson', email: 'ava@example.com', level: 'Intermediate', teamId: 1 },
            { id: 2, name: 'Leo Martinez', email: 'leo@example.com', level: 'Advanced', teamId: 1 },
            { id: 3, name: 'Mia Chen', email: 'mia@example.com', level: 'Beginner', teamId: 2 },
            { id: 4, name: 'Noah Patel', email: 'noah@example.com', level: 'Intermediate', teamId: 2 },
            { id: 5, name: 'Sofia Nguyen', email: 'sofia@example.com', level: 'Advanced', teamId: 3 },
        ];
        const teams = [
            { id: 1, name: 'Phoenix Pace', city: 'Seattle', points: 1280 },
            { id: 2, name: 'Summit Striders', city: 'Denver', points: 1215 },
            { id: 3, name: 'Harbor Hustle', city: 'Boston', points: 1174 },
        ];
        const activities = [
            { id: 1, userId: 1, type: 'Running', durationMinutes: 32, distanceKm: 5.2, date: '2026-08-20' },
            { id: 2, userId: 2, type: 'Strength', durationMinutes: 45, distanceKm: 0, date: '2026-08-21' },
            { id: 3, userId: 3, type: 'Cycling', durationMinutes: 38, distanceKm: 10.4, date: '2026-08-22' },
            { id: 4, userId: 4, type: 'Walking', durationMinutes: 25, distanceKm: 3.1, date: '2026-08-23' },
            { id: 5, userId: 5, type: 'Swimming', durationMinutes: 28, distanceKm: 1.8, date: '2026-08-24' },
        ];
        const leaderboard = [
            { rank: 1, name: 'Leo Martinez', points: 980, team: 'Phoenix Pace' },
            { rank: 2, name: 'Ava Thompson', points: 940, team: 'Phoenix Pace' },
            { rank: 3, name: 'Noah Patel', points: 910, team: 'Summit Striders' },
            { rank: 4, name: 'Mia Chen', points: 885, team: 'Summit Striders' },
            { rank: 5, name: 'Sofia Nguyen', points: 860, team: 'Harbor Hustle' },
        ];
        const workouts = [
            { id: 1, title: '5K Tempo Run', focus: 'Cardio', durationMinutes: 30, difficulty: 'Medium' },
            { id: 2, title: 'Core Circuit', focus: 'Strength', durationMinutes: 20, difficulty: 'Easy' },
            { id: 3, title: 'Interval Blast', focus: 'Conditioning', durationMinutes: 35, difficulty: 'Hard' },
            { id: 4, title: 'Mobility Reset', focus: 'Recovery', durationMinutes: 15, difficulty: 'Easy' },
            { id: 5, title: 'Hill Repeats', focus: 'Endurance', durationMinutes: 40, difficulty: 'Hard' },
        ];
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        await User.insertMany(users);
        await Team.insertMany(teams);
        await Activity.insertMany(activities);
        await LeaderboardEntry.insertMany(leaderboard);
        await Workout.insertMany(workouts);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
