import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  deviceType: String,
  location: String,
  infoSources: [String],
  trialParticipation: String,
  accessDifficulty: Number,
  biggestChallenge: String,
  knowClinicalTrial: String,
  usesInternetHealth: String,

  onlineActivities: [String],
  noInternetReasons: [String],
  comfortLevel: Number,
  internetReliability: Number,
  communicationPreferences: [String],
  enrollDifficulty: Number,
  trialChallenge:String,
  consultantChallenge:String,
  desiredFeatures: [String],
  privacyConcerns: String,
  smsWillingness: String,

  systemPriorities: [String],
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

const Patient = mongoose.model('PatientResponse', PatientSchema);
export default Patient;
