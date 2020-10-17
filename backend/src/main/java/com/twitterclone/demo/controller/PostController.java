package com.twitterclone.demo.controller;

import com.twitterclone.demo.model.Post;
import com.twitterclone.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    private PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<Post> getPosts() {
        return this.postRepository.findByOrderByCreatedDateDesc();
    }

    @PostMapping
    public Post addPost(@Valid @RequestBody Post post) {
        Post newPost = postRepository.save(post);

        return newPost;
    }
}
