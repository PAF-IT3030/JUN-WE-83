package com.example.backend.Repo;

import com.example.backend.Entity.Workout;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutRepo extends MongoRepository<Workout,String> {

}
