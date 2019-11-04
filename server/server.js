const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
// const router = express.Router();
const pool = require('./modules/pool');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
 app.get('/form', (req, res) => {
     console.log(req.body);
    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC`;
 
     pool.query(queryText)
         .then(result => {
             res.send(result.rows);
         }).catch(error => {
             console.log(error);
             res.sendStatus(500)
         })
 })
 app.post('/submit', (req, res) => {
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date") VALUES ($1, $2, $3, $4, $5, $6)`;
 
     pool.query(queryText,[req.body.feeling,req.body.understanding,req.body.support,req.body.comments,false,req.body.date])
         .then(result => {
             res.sendStatus(200);
         }).catch(error => {
             console.log(error);
             res.sendStatus(500)
         })
 })
// const resultsRouter = require('./routes/results.router.js');
// app.use('/results', resultsRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});