const express = require('express')
const helmet = require("helmet");
const cors = require("cors");
const path = require('path')

// const dbPath = path.resolve(__dirname, './data/projects.db3')

const server = express();

const db = require('./data/dbConfig.js');

server.use(helmet());
server.use(express.json());
server.use(cors());

// console.log(db('projects'))

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running'})
})

server.get('/api/projects', (req, res) => {
    // res.status(200).json({ projects: 'working'})
    db('projects').then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = server;