import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";
import twilio from 'twilio';

// Initialize Twilio client
const twilioClient = twilio("process.env.TWILIO_ACCOUNT_SID" , "process.env.TWILIO_AUTH_TOKEN");

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // Create reservation
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    // Send SMS using Twilio
    await twilioClient.messages.create({
      body: `Reservation confirmed for ${firstName} ${lastName} on ${date} at ${time}.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${phone}`, // Assuming phone number is provided in international format
    });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
