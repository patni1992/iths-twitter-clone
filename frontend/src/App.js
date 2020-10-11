import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Fab,
  Box,
  makeStyles,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const fabStyle = {
  right: 30,
  bottom: 30,
  position: "fixed",
};

function App() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    return fetch("http://localhost:8080/posts").then((resp) => resp.json());
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Twitter clone
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box m={10}>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={4} key={post.id}>
                <Card variant="outlined" style={{ textAlign: "left" }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
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
          </Grid>
        </Box>
      </Container>
      <Fab style={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
