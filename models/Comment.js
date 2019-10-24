import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // comment alone, add array that has comment id
  // give comment  the video id of its related to
  /*
  video:{
      type: mongoose.Schema.Types.ObjectId, // this objectId came from, give me the video Id
      ref:"Video" // came from Video
  }
  */
});

const model = mongoose.model("Comment", CommentSchema);
export default model;