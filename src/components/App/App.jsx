import React from 'react';
import axios from 'axios';
import '@fontsource/roboto';
import {Route, HashRouter as Router} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
           
        <Header />
        
        <Route path="/" exact>
            <Home />
        </Route>

        <Route path="/questions/QuestionOne" >
            <QuestionOne />
        </Route>

        <Route path="/questions/QuestionTwo">
            <QuestionTwo />
        </Route>

        <Route path="/questions/QuestionThree">
            <QuestionThree />
        </Route>

        <Route path="/questions/QuestionFour">
            <QuestionFour />
        </Route>
            
        <Route path='/questions/SubmitFeedback'>
          <SubmitFeedback />
        </Route>
        
        <Route path='/admin'>
          <Admin />
        </Route>

      </div>
    </Router>
  );
}

export default App;
