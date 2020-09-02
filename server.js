const express = require('express')
const helmet = require("helmet");
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const server = express();

const db = require('./data/dbConfig.js');

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(helmet());
server.use(express.json());
server.use(cors());

server.post(`/api/contact`, (req, res) => {


    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>From: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

    let mailOptions = {
        from: 'hello@alexmiller.dev',
        to: "alexvisionllc@gmail.com",
        replyTo: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err)
        }

        console.log('Email sent!')
        })
})

server.get(`/`, (req, res) => {
    res.status(200).json({ api: 'running'})
})

server.get(`/api/projects`, (req, res) => {
    // res.status(200).json({ projects: 'working'})
    db('projects').then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = server;