package com.twitterclone.demo.repository;

import com.twitterclone.demo.model.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<Post, Long> {
    List<Post> findByOrderByCreatedDateDesc();
}
