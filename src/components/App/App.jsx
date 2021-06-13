import React from 'react';
import '@fontsource/roboto';
import {Route, HashRouter as Router} from 'react-router-dom';
import './App.css';

import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Admin from '../Admin/Admin';
import UnderstandingGraph from '../UnderstandingGraph/UnderstandingGraph'
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
      <Grid container >
        <Router>
          
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Route path="/" exact>
                <Home />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path="/questions/QuestionOne" >
                <QuestionOne />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path="/questions/QuestionTwo">
                <QuestionTwo />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path="/questions/QuestionThree">
                <QuestionThree />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path="/questions/QuestionFour">
                <QuestionFour />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path='/SubmitFeedback'>
                <SubmitFeedback />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path='/admin'>
                <Admin />
              </Route>
            </Grid>
            <Grid item xs={12}>
              <Route path='/understanding-graph'>
                <UnderstandingGraph />
              </Route>
            </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        
      </Router>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
