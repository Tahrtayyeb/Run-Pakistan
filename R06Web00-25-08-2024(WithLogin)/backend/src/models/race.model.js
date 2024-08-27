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
        validate: {
            validator: function(v) {
                // This regex allows for numbers starting with 0 and 11 digits total
                return /^0[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid Pakistani mobile number!`
        },
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

export const RaceRegistration = mongoose.model('RaceRegistration', raceRegistrationSchema, 'raceregistrations');