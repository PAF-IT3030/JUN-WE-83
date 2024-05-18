package com.example.backend.Repo;

import com.example.backend.Entity.MealPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MealPlanRepo extends MongoRepository<MealPlan,String> {
}
