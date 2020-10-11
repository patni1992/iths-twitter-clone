import React, { useState, useEffect } from "react";

import {
  Container,
  Fab,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import "./App.css";


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

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Box m={10}>
          <Posts posts={posts} />
        </Box>
      </Container>
      <Fab style={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
