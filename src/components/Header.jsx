import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Divider,
  makeStyles,
  withStyles,
} from '@material-ui/core';
const useStyles = makeStyles({});
export default function Header() {
  const classes = useStyles({
    divider: {
      height: '4px',
    },
  });
  const StyledDivider = withStyles({
    root: {
      height: '4px',
    },
  })(Divider);
  return (
    <>
      <Grid container direction='row' justify='center'>
        <Grid item>
          <Typography variant='h2'>MuskAPI</Typography>
          <StyledDivider />
          <Box textAlign='center'>
            <Typography variant='caption'>🛠️ Tweets as a service 🛠️</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
