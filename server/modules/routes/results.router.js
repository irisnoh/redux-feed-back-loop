const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback that have been placed, populate with data 
router.get('/', (req, res) => {
    // Find all results and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/results', error);
        res.sendStatus(500);  
    });
})