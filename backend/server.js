const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");
const Message = require("./models/Message");

const rooms = ["HTML/CSS", "JAVASCRIPT", "PHYTHON", "PHP"];
const cors = require("cors");

require("dotenv").config();

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
  }
});
// Read the HTML template file containing the email content
const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'Newsletter/newsLetter-template.html'), 'utf8');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
require("./connection");

const server = require("http").createServer(app);
const PORT = 5001;
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

async function getLastMessagesFromRoom(room) {
  let roomMessages = await Message.aggregate([
    { $match: { to: room } },
    { $group: { _id: "$date", messagesByDate: { $push: "$$ROOT" } } },
  ]);
  return roomMessages;
}

function sortRoomMessagesByDate(messages) {
  return messages.sort(function (a, b) {
    let date1 = a._id.split("/");
    let date2 = b._id.split("/");

    date1 = date1[2] + date1[0] + date1[1];
    date2 = date2[2] + date2[0] + date2[1];

    return date1 < date2 ? -1 : 1;
  });
}

// socket connection

io.on("connection", (socket) => {
  socket.on("new-user", async () => {
    const members = await User.find();
    io.emit("new-user", members);
  });

  socket.on("join-room", async (newRoom, previousRoom) => {
    socket.join(newRoom);
    socket.leave(previousRoom);
    let roomMessages = await getLastMessagesFromRoom(newRoom);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    socket.emit("room-messages", roomMessages);
  });

  socket.on("message-room", async (room, content, sender, time, date) => {
    const newMessage = await Message.create({
      content,
      from: sender,
      time,
      date,
      to: room,
    });
    let roomMessages = await getLastMessagesFromRoom(room);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    // sending message to room
    io.to(room).emit("room-messages", roomMessages);
    socket.broadcast.emit("notifications", room);
  });

  app.delete("/logout", async (req, res) => {
    try {
      const { _id, newMessages } = req.body;
      const user = await User.findById(_id);
      user.status = "offline";
      user.newMessages = newMessages;
      await user.save();
      const members = await User.find();
      socket.broadcast.emit("new-user", members);
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(400).send();
    }
  });
});

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

// API endpoint to handle subscriber data for newsletter and send personalized email
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
      // Save subscriber email to MongoDB Atlas
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();

      // Send personalized email with app logo using Nodemailer
      const mailOptions = {
          from: 'codecollab@gmail.com',
          to: email,
          subject: 'Confirmation de la souscription',
          html: emailTemplate
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log(error);
              res.status(500).json({ message: "L'email de confirmation n'a pas pu être envoyé" });
          } else {
              console.log('Email sent: ' + info.response);
              res.status(201).json({ message: 'Souscription réussie' });
          }
      });
  } catch (error) {
      res.status(500).json({ message: 'Échec de la souscription' });
  }
});


server.listen(PORT, () => {
  console.log("listening to port", PORT);
});
