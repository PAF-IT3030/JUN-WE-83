package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "Posts")
public class Post {

    @Id
    private String _id;
    private String postDescription;
    private String[] images; // Adding the image array attribute

    public Post(String _id, String postDescription, String[] images) { // Updated constructor
        this._id = _id;
        this.postDescription = postDescription;
        this.images = images;
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

    public String[] getImages() { // Getter for images
        return images;
    }

    public void setImages(String[] images) { // Setter for images
        this.images = images;
    }

    @Override
    public String toString() {
        return "Post{" +
                "_id='" + _id + '\'' +
                ", postDescription='" + postDescription + '\'' +
                ", images=" + Arrays.toString(images) + // Updated toString method
                '}';
    }
}
