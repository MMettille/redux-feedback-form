const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//* GET REQUEST
// Will get all the responses
router.get('/', (req, res) => {
  let queryText = 'SELECT * from "feedback" ORDER BY "date" ASC;'
  pool.query(queryText).then( result => {
    // ⬇ Sends back the results in an object
      res.send(result.rows);
      console.log('Result from server:', result.rows)
  }).catch( error => {
      console.log('Error GET', error);
      res.sendStatus(500);
  });
});


//* POST REQUEST
// ⬇ Adds new feedback to the database
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });
  
  //* PUT REQUEST
  // ⬇ Edits flagged status in the database
  router.put("/:id", (req, res) => {
    // ⬇ Checking the status of flagged
    console.log('req.params.id', req.params.id)
    // ⬇ Making the user's flag into a variable
    const flagged = req.body.flagged
    // ⬇ Checking the status of flagged
    console.log('req.body.flagged', req.body.flagged)
    let queryText = 'UPDATE "feedback" SET "flagged"=$1 WHERE "id"=$2;'
    // ⬇ Sanitizing Data
    pool.query(queryText, [flagged, req.params.id])
    .then( result => {
      res.sendStatus(200)
    }).catch(error => {
      console.log(`Error editing feedback`, error);
      res.sendStatus(500);
    });
  })

  //* DELETE METHOD
  router.delete('/delete/:id', (req, res) => {
    // ⬇ This will grab the id of the task that we would like to delete
    const feedbackToDelete = req.params.id;
    // ⬇ This tell the database what we'd like to delete and where
    const queryText = `DELETE FROM "feedback" WHERE "id"= $1;`;
    // ⬇ Delete sanitized user input from the database
    pool.query(queryText, [feedbackToDelete])
    // ⬇ Sending back a 'ok' code to the user
    .then( response => {
        console.log(`You deleted...`, feedbackToDelete);
        res.sendStatus(200);
    }).catch( err => {
        console.log(`error deleting on server side`);
        res.sendStatus(500);
    });
  })
  module.exports = router;