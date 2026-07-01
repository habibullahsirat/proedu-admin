import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    logo: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
