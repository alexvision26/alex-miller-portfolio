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