package com.twitterclone.demo.repository;

import com.twitterclone.demo.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
    
    Boolean existsByUsername(String username);
}
