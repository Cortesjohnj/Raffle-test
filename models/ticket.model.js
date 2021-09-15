const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  number: {
    type: Number,
    required: [true, "Number is required"],
    validate: {
      validator: async function (value) {
        const ticket = await Ticket.findOne({ number: value });
        return ticket === null;
      },
      message: "Ticket is already taken",
    },
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    required: [false, "Email is required"],
    validate: {
      validator: async function (value) {
        const ticket = await Ticket.findOne({ email: value });
        return ticket === null;
      },
      message: "Email is already taken",
    },
  },

  name: {
    type: String,
    required: [false, "Name is required"],
  },

  phone: {
    type: Number,
    required: [false, "Form is required"],
  },

  available: {
    default: true,
    type: Boolean,
    required: [true, "Form is required"],
  },
  raffle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Raffle",
    required: [true, "Form is required"],
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
