package com.example.backend.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "Posts")
public class Post {

    @Id
    private String _id;

    private String postDescription;


    public Post(String _id, String postDescription) {
        this._id = _id;
        this.postDescription = postDescription;
    }

    public Post() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    @Override
    public String toString() {
        return "Post{" +
                "_id='" + _id + '\'' +
                ", postDescription='" + postDescription + '\'' +
                '}';
    }
}

