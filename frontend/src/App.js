import React, { useState, useEffect } from "react";

import {
  Container,
  Fab,
  Box,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Navbar from './components/Navbar';
import "./App.css";


const fabStyle = {
  right: 30,
  bottom: 30,
  position: "fixed",
};

const url = process.env.REACT_APP_API_URL

function App() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchPosts = () =>  fetch(`${url}/posts`).then((resp) => resp.json());
  const addPost = (newPost) =>  fetch(`${url}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: newPost})
  }).then((resp) => resp.json());

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    fetchData();
  }, []);

  const submitPost = async (newPost) => {
   const response = await addPost(newPost);
   setPosts([response, ...posts])
   setIsModalOpen(false);
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Box m={10}>
          <Posts posts={posts} />
        </Box>
        <AddPost open={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={submitPost} />
      </Container>
      <Fab onClick={() => setIsModalOpen(true)} style={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
