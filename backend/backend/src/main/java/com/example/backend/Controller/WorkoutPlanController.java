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

    @PutMapping("/edit/{id}")
    public WorkoutPlan updateWorkoutPlan(@PathVariable String id, @RequestBody WorkoutPlan workoutPlan) {
        WorkoutPlan existingWorkoutPlan = workoutPlanServices.getById(id);
        if (existingWorkoutPlan != null) {
            // Update the existing workout plan with the new details
            existingWorkoutPlan.setDate(workoutPlan.getDate());
            existingWorkoutPlan.setExercise(workoutPlan.getExercise());
            existingWorkoutPlan.setSets(workoutPlan.getSets());
            existingWorkoutPlan.setRepetitions(workoutPlan.getRepetitions());
            existingWorkoutPlan.setWorkoutPlans(workoutPlan.getWorkoutPlans());
            existingWorkoutPlan.setGoals(workoutPlan.getGoals());

            // Save the updated workout plan
            workoutPlanServices.saveOrUpdate(existingWorkoutPlan);

            return existingWorkoutPlan;
        } else {
            return null; // or throw an exception indicating workout plan not found
        }
    }

    @DeleteMapping(value = "/delete/{id}")
    public void deleteWorkoutPlan(@PathVariable String id) {
        workoutPlanServices.deleteWorkoutPlan(id);
    }

    @RequestMapping(value = "/workoutPlan/{id}")
    private WorkoutPlan getWorkout(@PathVariable(name = "id")String workoutPlanid)
    {
        return workoutPlanServices.getWorkoutPlanByID(workoutPlanid);
    }

}
