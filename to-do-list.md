[ SET UP - React/Redux ]
    [ x ] npm install
    [ x ] npm install redux 
    [ x ] npm install react-redux
    [ x ] npm install redux-logger
    [ x ] npm install react-router-dom
    [  ] Make Components
    [ x ] Material UI ?
        [ x ] npm install @material-ui/core
        [ x ] npm install @material-ui/icons
        [ x ] npm install @fontsource/roboto
            [ x ] import '@fontsource/roboto';
    [ N/A ] Bootstrap ?
        [ N/A ] npm install react-bootstrap bootstrap@4.6.0
    [ ] SweetAlert?
        [ x ] npm install sweetalert --save
        [ ] import swal from 'sweetalert';
    [ x ] IN DATABASE
        [ x ] Make database and table, ect from data.sql
        [ x ] Make sure to input at least one data point so you can test your GET route
    [ ] IN APP
        [ x ] import {Route, HashRouter as Router} from 'react-router-dom';
        [ x ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [ x ] IN INDEX.JS 
        [ x ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [ x ] import {Provider} from 'react-redux';
        [ x ] import logger from 'redux-logger';
        [ x ] Create Store
            [ x ] Wrap with combineReducers
                [ ] Pass in reducers
            [ x ] applyMiddleware
                [ x ] logger
        [ x ] React.DOM.render
            [ x ] React.StrictMode?
            [ x ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ x ] Service Worker?
    [ x ] SERVER.JS
        [ x ] Will need to make an express route to './routes/feedback.router.js
    [ ] FEEDBACK.ROUTER.JS
        [ x ] const import express = require('express)
        [ x ] const router = express.Router();
        [ x ] const pool = require('../modules/pool');
        [ x ] Post request to database

[ Header ] 
    [ x ] Make it pretty!
[ Home ]
    [ x ] Motivational quote on doing great things
    [ x ] Next Button
        [ x ] Will navigate you to step #1 [/QuestionOne]
[ /QuestionOne ]
    [ x ] Rating 1-5 on how the user is feeling (required)
    [ ] Next Button
        [ x ] Will save the response in REDUX
        [ x ] Will clear the input
        [ x ] Will navigate you to step #2 [/QuestionTwo]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionTwo ]
    [ x ] Rating 1-5 on how the user is feeling (required)
    [ x ] Next Button
        [ x ] Will save the response in REDUX
        [ x ] Will clear the input
        [ x ] Will navigate you to question #3 [/QuestionThree]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionThree ]
    [ x ] Rating 1-5 on how the user is being supported (required)
    [ x ] Next Button
        [ x ] Will save the response in REDUX
        [ x ] Will clear the input
        [ x ] Will navigate you to question #3 [/QuestionFour]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionFour ]
    [ x ] Input on any comments that they would like to write (Not required)
    [ x ] Next Button
        [ x ] Will save the response in REDUX
        [ x ] Will clear the input
        [ x ] Will navigate you to review/submit page [/SubmitFeedback]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /SubmitFeedback ]
    [ x ] Will display each feedback response (in a table?)
    [ x ] Submit Button
        [ x ] Show confirmation
        [ x ] Post to database
            [ x ] What to name data:
                [ x ] ("feeling", "understanding", "support", "comments")
        [ x ] Clear the user's feedback from redux
        [ x ] Reset the table
        [ x ] Will navigate user back to home page
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ Admin Page ]
    [ x ] Get request from the database
    [ x ] Display everything in a table
    [ ] WILL have a delete function
    [ ] Flag function
[ Graph ]
    [ x ] To get data from the database and into an array of objects:
        [ x ] will need an empty array for both the date and understanding score
        [ x ] Will need to loop through the database and push the into into the empty arrays
        [ x ] Will need to create an object for each item in the database and set it to the empty arrays





[
    <Router>
      <div className='App'>
           
        <Header />
        
        <Route path="/" exact>
            // -> How are you feeling today?
            <Home />
        </Route>

        <Route path="/QuestionOne" >
            // -> How are you feeling today?
            <QuestionOne />
        </Route>

        <Route path="/questionTwo">
        // -> How well are you understanding the content?
            <QuestionTwo />
        </Route>

        <Route path="/questionThree">
        // -> How well are you being supported?
            <QuestionThree />
        </Route>

        <Route path="/questionFour">
        // -> Any comments you want to leave?
            <QuestionFour />
        </Route>
            
        <Route path='/submitFeedback'>
        // -> Where they review their inputs and submit
          <SubmitFeedback />
        </Route>
        
        <Route path='/admin'>
        // -> Where admin can review user's inputs
          <Admin />
        </Route>

      </div>
    </Router>
]