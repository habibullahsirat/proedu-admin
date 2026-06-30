import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
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

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    buttonText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.About || mongoose.model("About", AboutSchema);
