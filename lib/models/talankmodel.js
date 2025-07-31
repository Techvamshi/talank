import mongoose from "mongoose";

const TalankSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },
    mobile: { 
      type: String, 
      required: true, 
      trim: true 
    },
    email: { 
      type: String, 
      required: true, 
      trim: true,
      lowercase: true 
    },
    description: { 
      type: String, 
      trim: true 
    },
  },
  { 
    timestamps: true 
  }
);

// Check if model already exists to prevent recompilation
const TalankModel = mongoose.models.Talank || mongoose.model("Talank", TalankSchema);

export default TalankModel;