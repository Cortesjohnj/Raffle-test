const Raffle = require("../models/raffle.models");
const Ticket = require("../models/ticket.model");

const createRaffle = async (req, res) => {
  try {
    console.log(req.body);
    const { name, from, to } = req.body;
    const availableTickets = to - from + 1;
    if (to < from) {
      return res
        .status(422)
        .json({ message: `${from} can't be smaller than ${to}` });
    } else {
      const raffle = await new Raffle({
        name,
        from,
        to,
        availableTickets: availableTickets,
      });
      await raffle.save();
      for (let i = from; i <= to; i++) {
        await Ticket.create({ raffle, number: i });
      }
      res.status(201).json(raffle);
    }
  } catch (error) {
    res.status(422).json({ Error: error.message });
  }
};

const listRaffles = async (req, res) => {
  const raffles = await Raffle.find({});
  res.status(200).json({ raffles });
  try {
  } catch (error) {
    res.status(422).json({ Error: error });
  }
};

const listRafflesWithId = async (req, res) => {
  const raffles = await Raffle.findOneById({});
  res.status(200).json({ raffles });
  try {
  } catch (error) {
    res.status(422).json({ Error: error });
  }
};

module.exports = { createRaffle, listRaffles, listRafflesWithId };
