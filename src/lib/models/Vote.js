import { Schema, models, model } from "mongoose";

export const VoteSchema = new Schema(
  {
    name: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: "/img/bugsbunny.jpg"
    },
    votes: {
      type: Number,
      required: true,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

const Vote = models.Vote || model("Vote", VoteSchema);

export default Vote
