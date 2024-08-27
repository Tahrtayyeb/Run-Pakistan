import { RaceRegistration } from '../models/race.model.js';
import { v4 as uuidv4 } from 'uuid';

const registerForRace = async (req, res) => {
  const requestId = uuidv4();
  console.log(`[${requestId}] ${new Date().toISOString()} - Starting race registration`);

  try {
    const { fullName, age, gender, mobileNo, clubName, city } = req.body;
   
    console.log(`[${requestId}] Validating input data`);
    if (!fullName || !age || !gender || !mobileNo || !city) {
      console.log(`[${requestId}] Validation failed: Missing required fields`);
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log(`[${requestId}] Creating new registration document`);
    const newRegistration = new RaceRegistration({
      fullName,
      age,
      gender,
      mobileNo,
      clubName,
      city
    });

    console.log(`[${requestId}] Saving registration to database`);
    await newRegistration.save();

    console.log(`[${requestId}] Registration saved successfully:`, newRegistration);
    res.status(201).json({ message: 'Race registration successful', registration: newRegistration });
  } catch (error) {
    console.error(`[${requestId}] Race registration error:`, error);
    console.error(`[${requestId}] Error stack:`, error.stack);
    if (error.name === 'ValidationError') {
      console.log(`[${requestId}] Mongoose validation error:`, error.errors);
      return res.status(400).json({ message: 'Validation error', details: error.errors });
    }
    res.status(500).json({ message: 'An error occurred during registration', error: error.message });
  }
};

// Remove getUserRegistrations function as it's no longer needed

export { registerForRace };