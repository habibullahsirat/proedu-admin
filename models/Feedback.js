import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

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

export default mongoose.models.Feedback ||
  mongoose.model("Feedback", FeedbackSchema);
