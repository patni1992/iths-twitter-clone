import React from "react";

import {
    Typography,
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Grid,
  } from "@material-ui/core";

function Posts ({posts}) {
    return (  <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={4} key={post.id}>
            <Card variant="outlined" style={{ textAlign: "left" }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Patrik"
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" component="p">
                  {post.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>)
}

export default Posts