const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
const InternSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      unique: true,
      require: true,
    },
    collegeId: {
      type: ObjectId,
      ref: "College",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Intern", InternSchema);