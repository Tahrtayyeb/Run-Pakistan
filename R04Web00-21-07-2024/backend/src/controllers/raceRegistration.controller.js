// controllers/raceRegistration.controller.js
import { RaceRegistration } from '../models/race.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const registerForRace = asyncHandler(async (req, res) => {
    const { fullName, age, gender, mobileNo, clubName, city } = req.body;

    if (!fullName || !age || !gender || !mobileNo || !city) {
        throw new ApiError(400, "All fields are required");
    }

    const newRegistration = await RaceRegistration.create({
        user: req.user._id,
        fullName,
        age,
        gender,
        mobileNo,
        clubName,
        city
    });

    return res.status(201).json(
        new ApiResponse(201, newRegistration, "Race registration successful")
    );
});

const getUserRegistrations = asyncHandler(async (req, res) => {
    const registrations = await RaceRegistration.find({ user: req.user._id });

    return res.status(200).json(
        new ApiResponse(200, registrations, "User registrations retrieved successfully")
    );
});

export {
    registerForRace,
    getUserRegistrations
};