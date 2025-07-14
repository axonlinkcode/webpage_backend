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
  desiredFeatures: [String],

   email: {
    type: String,
    required: false, // You can set true if it's required
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  }
}, { timestamps: true });

const Clinician = mongoose.model('ClinicianResponse', ClinicianSchema);
export default Clinician;
