package com.example.backend.Service;


import com.example.backend.Entity.WorkoutPlan;
import com.example.backend.Repo.WorkoutPlanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkoutPlanServices {

    @Autowired
    private WorkoutPlanRepo repo;

    public Iterable<WorkoutPlan> listAll() {
        return repo.findAll();
    }

    public void saveOrUpdate(WorkoutPlan workoutPlan) {
        repo.save(workoutPlan);
    }

    public WorkoutPlan getById(String id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteWorkoutPlan(String id) {
        repo.deleteById(id);
    }

    public WorkoutPlan getWorkoutPlanByID(String workoutPlanid) {
        return repo.findById(workoutPlanid).get();
    }
}
