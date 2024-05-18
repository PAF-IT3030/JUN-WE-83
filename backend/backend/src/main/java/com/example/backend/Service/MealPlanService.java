package com.example.backend.Service;

import com.example.backend.Entity.MealPlan;
import com.example.backend.Repo.MealPlanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MealPlanService {

    @Autowired
    private MealPlanRepo repo;

    public void saveorUpdate(MealPlan mealPlan) {
        repo.save(mealPlan);
    }

    public Iterable<MealPlan> listAll() {
        return this.repo.findAll();
    }

    public void deleteMeal(String id) {
        repo.deleteById(id);
    }

    public MealPlan getMealPlanByID(String mealid) {
        return repo.findById(mealid).get();
    }
}
