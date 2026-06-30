import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
