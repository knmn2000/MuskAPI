import Header from './components/Header';

import './App.css';

import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Usage from './components/Usage';
import useIsMobile from './hooks/useIsMobile';
import Footer from './components/Footer';

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
  const isMobile = useIsMobile();
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Grid container direction='column' justify='space-evenly' spacing={2}>
          <Grid item xs>
            <Grid container direction='row' justify='center'>
              {!isMobile && <Grid item xs />}
              <Grid item xs={isMobile ? 11 : 9}>
                <Grid className={classes.root} container direction='column'>
                  <Grid item xs>
                    <Header />
                  </Grid>
                  <Grid item xs>
                    <Usage />
                  </Grid>
                </Grid>
              </Grid>
              {!isMobile && <Grid item xs />}
            </Grid>
          </Grid>
          <Grid item xs />
          <Grid item xs>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
