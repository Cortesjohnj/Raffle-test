const mongoose = require("mongoose");
const Tickets = require("./ticket.model");

const raffleSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    validate: {
      validator: async function (value) {
        const raffleName = await Raffle.findOne({ name: value });
        return raffleName === null;
      },
      message: "Raffle is already taken",
    },
  },

  from: {
    type: Number,
    required: [true, "From is required"],
  },
  to: {
    type: Number,
    required: [true, "to is required"],
  },

  closed: {
    type: Boolean,
    default: false,
    required: [true, "to is required"],
  },

  availableTickets: {
    type: Number,
    default: 0,
    required: [true, "to is required"],
  },
});

const Raffle = mongoose.model("Raffle", raffleSchema);

module.exports = Raffle;
