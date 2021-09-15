// const Ticket = require("../models/ticket.model");

// const createTicket = async (req, res) => {
//   try {
//     const { from, to } = req.body;
//     console.log(req.body);
//     for (let i = from; i <= to; i++) {
//       await Ticket.create({
//         number: i,
//       });
//     }
//   } catch (err) {
//     res.status(422).json({ Error: err.message });
//   }
// };

// module.exports = { createTicket };
