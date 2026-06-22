// models/project.js
import mongoose from "mongoose";

const needleTypeSchema = new mongoose.Schema({
  name: String,
  shortName: String,
  overview: String,
  imageUrl: String
});

export default mongoose.model("needleType", needleTypeSchema);
