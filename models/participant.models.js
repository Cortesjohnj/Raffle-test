const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: [true, "Email is required"],
    validate: {
      validator: async function (value) {
        const user = await User.findOne({ email: value });
        return user === null;
      },
      message: "Email is already taken",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  phoneNumber: {
    type: String,
    required: [true, "Phone is required"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
