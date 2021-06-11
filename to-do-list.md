[ SET UP - React/Redux ]
    [ x ] npm install
    [ x ] npm install redux 
    [ x ] npm install react-redux
    [ x ] npm install redux-logger
    [ x ] npm install react-router-dom
    [  ] Make Components
    [  ] Material UI ?
        [ x ] npm install @material-ui/core
        [ x ] npm install @material-ui/icons
        [ x ] npm install @fontsource/roboto
            [ x ] import '@fontsource/roboto';
    [ N/A ] Bootstrap ?
        [ N/A ] npm install react-bootstrap bootstrap@4.6.0
    [ x ] IN DATABASE
        [ x ] Make database and table, ect from data.sql
        [ x ] Make sure to input at least one data point so you can test your GET route
    [ ] IN APP
        [  ] Import {Route, HashRouter as Router} from 'react-router-dom'
        [  ] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [ ] IN INDEX.JS 
        [  ] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [  ] import {Provider} from 'react-redux';
        [  ] import logger from 'redux-logger';
        [  ] Create Store
            [  ] Wrap with combineReducers
                [ ] Pass in reducers
            [  ] applyMiddleware
                [  ] logger
        [  ] React.DOM.render
            [  ] React.StrictMode?
            [  ] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [ ] Service Worker?
    [ ] SERVER.JS
        [ ] Will need to make an express route to './routes/feedback.router.js
    [ ] FEEDBACK.ROUTER.JS
        [ ] const import express = require('express)
        [ ] const router = express.Router();
        [ ] const pool = require('../modules/pool');
        [ ] Post request to database

[ Header ] 
    [  ] Make it pretty!
[ Home ]
    [  ] Motivational quote on doing great things
    [ ] Next Button
        [ ] Will navigate you to step #1 [/QuestionOne]
[ /QuestionOne ]
    [ ] Rating 1-5 on how the user is feeling (required)
    [ ] Next Button
        [ ] Will save the response in REDUX
        [ ] Will clear the input
        [ ] Will navigate you to step #2 [/QuestionTwo]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionTwo ]
    [ ] Rating 1-5 on how the user is feeling (required)
    [ ] Next Button
        [ ] Will save the response in REDUX
        [ ] Will clear the input
        [ ] Will navigate you to question #3 [/QuestionThree]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionThree ]
    [ ] Rating 1-5 on how the user is feeling (required)
    [ ] Next Button
        [ ] Will save the response in REDUX
        [ ] Will clear the input
        [ ] Will navigate you to question #3 [/QuestionFour]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /QuestionFour ]
    [ ] Input on any comments that they would like to write (Not required)
    [ ] Next Button
        [ ] Will save the response in REDUX
        [ ] Will clear the input
        [ ] Will navigate you to review/submit page [/SubmitFeedback]
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ /SubmitFeedback ]
    [ ] Will display each feedback response (in a table?)
    [ ] Submit Button
        [ ] Show confirmation
        [ ] Post to database
            [ ] What to name data:
                [ ] ("feeling", "understanding", "support", "comments")
        [ ] Clear the user's feedback from redux
        [ ] Reset the table
        [ ] Will navigate user back to home page
    [ ] STRETCH!!! Can edit feedback
    [ ] STRETCH!!! Can go back to the previous page
[ Admin Page ]
    [ ] Get request from the database
    [ ] Display everything in a table
    [ ] WILL have a delete function




[
    <Router>
      <div className='App'>
           
        <Header />
        
        <Route path="/" exact>
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