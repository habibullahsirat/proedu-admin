import mongoose from "mongoose";

const SuccessfulStudentSchema = new mongoose.Schema(
  {
    image: {
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
    },

    department: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.SuccessfulStudent ||
  mongoose.model("SuccessfulStudent", SuccessfulStudentSchema);
