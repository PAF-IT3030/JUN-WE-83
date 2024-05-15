package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "WorkoutPlan")
public class WorkoutPlan {

    @Id
    private String id; // Add a unique identifier field

    private String date;
    private String exercise;
    private String sets;
    private String repetitions;
    private String workoutPlans;
    private String goals;

    public WorkoutPlan(String date, String exercise, String sets, String repetitions, String workoutPlans, String goals) {
        this.date = date;
        this.exercise = exercise;
        this.sets = sets;
        this.repetitions = repetitions;
        this.workoutPlans = workoutPlans;
        this.goals = goals;
    }

    public WorkoutPlan() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public String getSets() {
        return sets;
    }

    public void setSets(String sets) {
        this.sets = sets;
    }

    public String getRepetitions() {
        return repetitions;
    }

    public void setRepetitions(String repetitions) {
        this.repetitions = repetitions;
    }

    public String getWorkoutPlans() {
        return workoutPlans;
    }

    public void setWorkoutPlans(String workoutPlans) {
        this.workoutPlans = workoutPlans;
    }

    public String getGoals() {
        return goals;
    }

    public void setGoals(String goals) {
        this.goals = goals;
    }

    @Override
    public String toString() {
        return "WorkoutPlan{" +
                "id='" + id + '\'' +
                ", date='" + date + '\'' +
                ", exercise='" + exercise + '\'' +
                ", sets='" + sets + '\'' +
                ", repetitions='" + repetitions + '\'' +
                ", workoutPlans='" + workoutPlans + '\'' +
                ", goals='" + goals + '\'' +
                '}';
    }
}
