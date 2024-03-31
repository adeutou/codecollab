const Newsletter = require('../models/newsletterModel');
const nodemailer = require('nodemailer');
const fs = require('fs');

require("dotenv").config();

exports.subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Save email to MongoDB
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email
        pass: process.env.GMAIL_PASSWORD, // Your Gmail password
      },
    });

    // Read the HTML template file containing the email content
    const emailTemplate = fs.readFileSync(path.resolve(__dirname, '../Newsletter/newsLetter-template.html'), 'utf8');

    const mailOptions = {
      from: 'info@codecollab.com',
      to: email,
      subject: 'Subscription Confirmation',
      html: emailTemplate
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Subscription successful!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Subscription failed. Please try again.');
  }
};
