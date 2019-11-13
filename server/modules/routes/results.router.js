const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback that have been placed, populate with data 
router.get('/', (req, res) => {
    console.log(req.body);
    let queryText = 'SELECT * FROM "feedback"';
    // Find all results and return them
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /results', error);
        res.sendStatus(500);  
    });
})

app.post('/', (req, res) => {
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date") VALUES ($1, $2, $3, $4, $5, $6)`;
 
     pool.query(queryText,[req.body.feeling,req.body.understanding,req.body.support,req.body.comments,false,req.body.date])
         .then(result => {
             res.sendStatus(200);
         }).catch(error => {
             console.log(error);
             res.sendStatus(500)
         })
 })

 //delete route to delete one feedback
app.delete('/:id', (req, res) => {
    const idToDelete = req.params.id;
    pool.query(`
        DELETE FROM "feedback" WHERE "id"=$1
    `, [idToDelete]).then(
        () => {
            res.sendStatus(200);
        }
    ).catch(
        error => {
            console.log('error with delete route', error);
        }
    )
})
 
//  app.delete("/form/:id",(req,res) => {
//      let queryText = `DELETE FROM "feedback" WHERE id=$1`;
//      pool.query(queryText,[req.params.id])
//          .then(() => {
//              res.sendStatus(200);
//          }).catch(error => {
//              console.log(error);
//              res.sendStatus(500)
//          })
//  })