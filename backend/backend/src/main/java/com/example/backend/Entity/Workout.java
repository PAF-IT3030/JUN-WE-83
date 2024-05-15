package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workouts")
public class Workout {

    @Id
    private String _id;
    private String workoutName;
    private String workoutDate;
    private String workoutMatrix;
    private String workoutDescription;

    public Workout(String _id, String workoutDescription, String workoutMatrix, String workoutDate, String workoutName) {
        this._id = _id;
        this.workoutDescription = workoutDescription;
        this.workoutMatrix = workoutMatrix;
        this.workoutDate = workoutDate;
        this.workoutName = workoutName;
    }

    public Workout() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getWorkoutDate() {
        return workoutDate;
    }

    public void setWorkoutDate(String workoutDate) {
        this.workoutDate = workoutDate;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }

    public String getWorkoutMatrix() {
        return workoutMatrix;
    }

    public void setWorkoutMatrix(String workoutMatrix) {
        this.workoutMatrix = workoutMatrix;
    }

    public String getWorkoutDescription() {
        return workoutDescription;
    }

    public void setWorkoutDescription(String workoutDescription) {
        this.workoutDescription = workoutDescription;
    }

    @Override
    public String toString() {
        return "Workout{" +
                "_id='" + _id + '\'' +
                ", workoutName='" + workoutName + '\'' +
                ", workoutDate='" + workoutDate + '\'' +
                ", workoutMatrix='" + workoutMatrix + '\'' +
                ", workoutDescription='" + workoutDescription + '\'' +
                '}';
    }
}
