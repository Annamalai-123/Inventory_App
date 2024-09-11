const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true],
      unique: [true],
    },
    email: {
      type: String,
      required: [true],
      unique: [true],
    },
    type: {
      type: String,
      enum: ["ADMIN", "CUSTOMER"],
      required: [true],
      unique: [false],
    },
    password: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
