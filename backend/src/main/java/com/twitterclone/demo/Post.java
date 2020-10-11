package com.twitterclone.demo;

import org.springframework.data.annotation.CreatedDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.PrePersist;
import java.util.Date;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String message;

    @CreatedDate
    @Column(nullable = false)
    private Date createdDate;

    public long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    @PrePersist
    public void prePersist() {
        this.createdDate = new Date();
    }
}
