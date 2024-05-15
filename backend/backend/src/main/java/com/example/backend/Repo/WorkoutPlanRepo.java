package com.example.backend.Repo;



import com.example.backend.Entity.WorkoutPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutPlanRepo extends MongoRepository<WorkoutPlan, String> {
}
