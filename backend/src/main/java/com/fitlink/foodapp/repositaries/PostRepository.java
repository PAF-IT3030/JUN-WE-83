package com.food_app.foodapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.food_app.foodapp.model.MealPlan;

public interface MealPlanRepository extends MongoRepository<MealPlan, String> {
}
