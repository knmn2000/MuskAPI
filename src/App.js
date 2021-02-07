import Header from './components/Header';

import './App.css';

import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import { Grid, Typography, Box, Paper } from '@material-ui/core';
import Usage from './components/Usage';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Orbitron', 'Cutive'].join(','),
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Grid container direction='row'>
          <Grid item xs />
          <Grid item xs={9}>
            <Grid className={classes.root} container direction='column'>
              <Grid item xs>
                <Header />
              </Grid>
              <Grid item>
                <Usage />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
