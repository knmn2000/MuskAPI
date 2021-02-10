import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';
export default function Footer() {
  return (
    <>
      <Grid container justify='center'>
        <Grid item>
          <Typography variant='body2'>
            😁 made by{' '}
            <Link
              underline='always'
              color='black'
              href='https://github.com/knmn2000'
              target='__blank'
            >
              knmn2000
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
