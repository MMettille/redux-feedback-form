const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//* GET REQUEST
// Will get all the responses
router.get('/', (req, res) => {
  pool.query('SELECT * from "feedback" ORDER BY "date" ASC;').then((result) => {
    // ⬇ Sends back the results in an object
      res.send(result.rows);
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
  
  module.exports = router;