import React from 'react';
import axios from 'axios';
import '@fontsource/roboto';
import {Route, HashRouter as Router} from 'react-router-dom';
import './App.css';

import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Home from '../Home/Home';
import QuestionOne from '../QuestionOne/QuestionOne';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import QuestionThree from '../QuestionThree/QuestionThree';
import QuestionFour from '../QuestionFour/QuestionFour';
import SubmitFeedback from '../SubmitFeedback/SubmitFeedback';
import Footer from '../Footer/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b1f9b3',
      main: '#81c784',
      dark: '#509556',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c3fdff',
      main: '#90caf9',
      dark: '#5d99c6',
      contrastText: '#000',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
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
            
        <Route path='/SubmitFeedback'>
          <SubmitFeedback />
        </Route>
        
        <Route path='/admin'>
          <Admin />
        </Route>

        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
