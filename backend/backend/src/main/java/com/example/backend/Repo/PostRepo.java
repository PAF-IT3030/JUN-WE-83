package com.example.backend.Repo;

import com.example.backend.Entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}
