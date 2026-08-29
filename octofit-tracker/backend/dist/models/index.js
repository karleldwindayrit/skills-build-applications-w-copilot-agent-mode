import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    level: { type: String, required: true },
    teamId: { type: Number, default: null },
}, { timestamps: true });
const teamSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    points: { type: Number, required: true, default: 0 },
}, { timestamps: true });
const activitySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    userId: { type: Number, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    date: { type: String, required: true },
}, { timestamps: true });
const leaderboardEntrySchema = new Schema({
    rank: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    points: { type: Number, required: true },
    team: { type: String, required: true },
}, { timestamps: true });
const workoutSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    focus: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
}, { timestamps: true });
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
