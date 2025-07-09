import mongoose from 'mongoose';

const ClinicianSchema = new mongoose.Schema({
  professionalRole: String,
  professionalRoleOther: String,

  facilityTypes: [String],
  trialInvolvement: String,
  workDevices: [String],

  referralDifficulty: String,
  careCoordinationChallenges: String,  
  trialChallenges: String,             

  usesDigitalTools: String,
  toolNames: String,
  toolLimitations: String,
  trainingReceived: String,
  toolImprovementSuggestions: String,
  smsWillingness: String,
  desiredFeatures: [String]
}, { timestamps: true });

const Clinician = mongoose.model('ClinicianResponse', ClinicianSchema);
export default Clinician;
