import mongoose from 'mongoose';

const CROMemberSchema = new mongoose.Schema({
  primaryRole: String,
  primaryRoleOther: String,
  organizationType: String,
  organizationTypeOther: String,
  yearsExperience: String,
  trialRegions: [String],
  trialPhases: [String],

  siteSelectionMethods: [String],
  siteActivationChallenge: Number,
  operationalChallenges: [String],
  recruitmentChallenge: Number,
  dataFlowBottleneck: String,

  usesDigitalSystems: String,
  currentDigitalTools: [String],
  systemSatisfaction: Number,
  systemLimitations: [String],
  siteInfrastructureReliability: Number,
  privacyConcernsExpressed: String,
  privacyConcernsDetails: String,

  itReadinessPerception: Number,
  desiredFeatures: [String],
  aiToolUsefulness: Number,
  aiToolConcerns: String,
  investmentOpenness: String,
  improvementPriorities: [String],
}, { timestamps: true });

const CRO = mongoose.model('CROResponse', CROMemberSchema);
export default CRO