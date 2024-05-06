package com.example.backend.Service;


import com.example.backend.Entity.Post;
import com.example.backend.Repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepo repo;
    public void saveOrUpdate(Post post) {
        repo.save(post);
    }

    public Iterable<Post> listAllPosts() {
        return repo.findAll();
    }

    public Optional<Post> getPostById(String postId) {
        return repo.findById(postId);
    }

    public void deletePostById(String id) {
        repo.deleteById(id);
    }
}
