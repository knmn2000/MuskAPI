import React from 'react';
import { Typography, Grid, Box, Divider, withStyles } from '@material-ui/core';
export default function Header() {
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
