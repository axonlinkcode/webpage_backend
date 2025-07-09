import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  deviceType: String,
  location: String,
  infoSources: [String],
  trialParticipation: String,
  accessDifficulty: Number,
  biggestChallenge: String,

  usesInternetHealth: String,
  onlineActivities: [String],
  noInternetReasons: [String],
  comfortLevel: Number,
  internetReliability: Number,
  communicationPreferences: [String],

  desiredFeatures: [String],
  privacyConcerns: String,
  smsWillingness: String,
  systemPriorities: [String],
}, { timestamps: true });

const Patient = mongoose.model('PatientResponse', PatientSchema);
export default Patient;
