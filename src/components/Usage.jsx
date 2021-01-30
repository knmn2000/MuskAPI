import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link, Box, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px 24px',
  },
  format: {
    fontFamily: 'B612 Mono',
    fontSize: '1.5em',
  },
  boxText: {
    fontWeight: 400,
  },
}));

export default function Usage() {
  const classes = useStyles();
  return (
    <div>
      <Box mt={2}>
        <Typography variant='h4'>Usage</Typography>
        <Box m={2}>
          <Paper className={classes.paper} elevation={2}>
            <Typography variant='h5' className={classes.boxText}>
              GET:{' '}
              <b>
                <Link underline='always' color='black' href='https://musk.api'>
                  https://musk.api
                </Link>
              </b>
            </Typography>
            <Box m={2}>
              <Typography variant='h5' className={classes.boxText}>
                Format:
              </Typography>
              <Box m={1}>
                <Typography className={classes.format}>
                  {'{'}
                  <br />
                  &nbsp; "time": "2021-01-28T02:34:17.000Z",
                  <br />
                  &nbsp; "tweet": "It can play Cyberpunk",
                  <br />
                  &nbsp; "status": "4472 replies, 9964 Retweets, 199927 likes
                  <br />
                  {'}'}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
