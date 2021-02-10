import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Link,
  Box,
  Paper,
  IconButton,
  // CircularProgress,
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { fetchTweet } from './../api/api';
import Tweet from './Tweet';
import useIsMobile from '../hooks/useIsMobile';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '12px 24px',
    flex: 1,
    flexDirection: 'row',
  },
  format: {
    fontFamily: 'B612 Mono',
    wordWrap: 'break-word',
  },
  boxText: {
    fontWeight: 400,
  },
  getReq: {
    alignSelf: 'center',
  },
  box: {
    maxWidth: 'inherit',
  },
}));

export default function Usage() {
  const classes = useStyles();
  const [tweet, setTweet] = useState({
    time: '2021-01-28T02:34:17.000Z',
    tweet: 'It can play Cyberpunk',
    status: '4472 replies, 9964 Retweets, 199927 likes',
  });
  const isMobile = useIsMobile();
  // const [isLoading, setIsLoading] = useState(false);
  const onFetch = async () => {
    // setIsLoading(true);
    const res = await fetchTweet();
    setTweet(res);
    // setIsLoading(false);
  };
  return (
    <div>
      <Box mt={2} className={classes.box}>
        <Typography variant='h4'>Usage</Typography>
        <Box m={isMobile ? 0 : 2} mt={isMobile ? 1 : 0}>
          <Paper className={classes.paper} elevation={2}>
            <Grid
              container
              direction={isMobile ? 'column' : 'row'}
              justify='space-between'
            >
              <Grid item className={classes.getReq}>
                <Typography variant='h5' className={classes.boxText}>
                  GET:{' '}
                  <b>
                    <Link
                      underline='always'
                      color='black'
                      href='https://musk-tweet.netlify.app/'
                    >
                      https://musk-tweet.netlify.app/
                    </Link>
                  </b>
                </Typography>
              </Grid>
              <Grid item style={{ alignSelf: 'flex-end' }}>
                <IconButton aria-label='refresh' onClick={onFetch}>
                  <AutorenewIcon fontSize='large' />
                </IconButton>
              </Grid>
            </Grid>
            <Box m={2}>
              <Typography variant='h5' className={classes.boxText}>
                Format:
              </Typography>
              <Box m={1}>
                {/* {isLoading ? (
                  <Grid container justify='space-evenly' spacing={2}>
                    <Grid item>
                      <CircularProgress />
                    </Grid>
                  </Grid>
                ) : ( */}
                <Typography
                  style={{ fontSize: isMobile ? '1.4em' : '1.5em' }}
                  className={classes.format}
                >
                  <Tweet tweet={tweet} />
                </Typography>
                {/* )} */}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
