package com.example.backend.Controller;

import com.example.backend.Entity.Post;
import com.example.backend.Entity.Workout;
import com.example.backend.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/post")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping(value = "/save")
    public String savePost(@RequestBody Post post){
        postService.saveOrUpdate(post);
        return post.get_id();
    }

    @GetMapping(value = "/getposts")
    public Iterable<Post> getPosts() {
        return postService.listAllPosts();
    }

    @PutMapping(value = "/edit/{id}")
    private Post update(@RequestBody Post post, @PathVariable(name = "id")String _id)
    {
        post.set_id(_id);
        postService.saveOrUpdate(post);
        return post;
    }

    @GetMapping("/getpost/{id}")
    public Post getPostById(@PathVariable(name = "id") String postId){
        return postService.getPostById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found with id:" +postId));
    }

    @DeleteMapping("/delete/{id}")
    public void deletePost(@PathVariable("id") String _id) {
        postService.deletePostById(_id);
    }


}
