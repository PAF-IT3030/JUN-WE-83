package com.example.backend.Controller;

import com.example.backend.Entity.WorkoutPlan;
import com.example.backend.Service.WorkoutPlanServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/WorkoutPlan")
public class WorkoutPlanController {

    @Autowired
    private WorkoutPlanServices workoutPlanServices;

    @PostMapping("/save")
    public String saveWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        workoutPlanServices.saveOrUpdate(workoutPlan);
        return workoutPlan.getId();
    }

    @GetMapping("/getAll")
    public Iterable<WorkoutPlan> getWorkoutPlans() {
        return workoutPlanServices.listAll();
    }



}
