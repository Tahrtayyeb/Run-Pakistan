// models/raceRegistration.model.js
import mongoose from 'mongoose';

const raceRegistrationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/,
        trim: true
    },
    clubName: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

export const RaceRegistration = mongoose.model('RaceRegistration', raceRegistrationSchema);