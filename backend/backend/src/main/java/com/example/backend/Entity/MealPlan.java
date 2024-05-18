package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "mealPlan")
public class MealPlan {

    @Id
    private String _id;
    private String ingredients;
    private String cookingInstructions;
    private String[] images;

    public MealPlan(String[] images, String description, String cookingInstructions, String ingredients, String _id) {
        this.images = images;
        this.cookingInstructions = cookingInstructions;
        this.ingredients = ingredients;
        this._id = _id;
    }

    public MealPlan() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public String getCookingInstructions() {
        return cookingInstructions;
    }

    public void setCookingInstructions(String cookingInstructions) {
        this.cookingInstructions = cookingInstructions;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString() {
        return "MealPlan{" +
                "_id='" + _id + '\'' +
                ", ingredients='" + ingredients + '\'' +
                ", cookingInstructions='" + cookingInstructions + '\'' +
                ", images=" + Arrays.toString(images) +
                '}';
    }
}
