import React from "react";
import { Link } from "@material-ui/core";

export default function Tweet({ tweet }) {
  if (!tweet) {
    tweet = {
      time: "2021-01-28T02:34:17.000Z",
      tweet: "It can play Cyberpunk",
      status: "4472 replies, 9964 Retweets, 199927 likes",
    };
  }
  return (
    <div>
      {"{"}
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
          &nbsp; "image":{" "}
          {
            <Link
              underline="always"
              color="inherit"
              href={tweet.image}
              target="__blank"
            >
              {tweet.image.length > 50
                ? tweet.image.substr(0, 50 - 1) + "..."
                : tweet.image}
            </Link>
          }
          ,
        </>
      )}
      <br />
      &nbsp; "status":{tweet.status}
      <br />
      {"}"}
    </div>
  );
}
