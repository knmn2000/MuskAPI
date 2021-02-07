import React from 'react';
import { Link } from '@material-ui/core';

export default function Tweet({ tweet }) {
  return (
    <div>
      {'{'}
      <br />
      &nbsp; "time": {tweet.time},
      {tweet.tweet && (
        <>
          <br />
          &nbsp; "tweet": {tweet.tweet},
        </>
      )}
      {tweet.image && (
        <>
          <br />
          &nbsp; "image":{' '}
          {
            <Link
              underline='always'
              color='black'
              href={tweet.image}
              target='__blank'
            >
              {tweet.image.length > 50
                ? tweet.image.substr(0, 50 - 1) + '...'
                : tweet.image}
            </Link>
          }
          ,
        </>
      )}
      <br />
      &nbsp; "status":{tweet.status}
      <br />
      {'}'}
    </div>
  );
}
