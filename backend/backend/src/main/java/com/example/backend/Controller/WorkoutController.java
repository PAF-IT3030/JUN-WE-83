package com.example.backend.Controller;

import com.example.backend.Entity.Workout;
import com.example.backend.Service.WorkoutServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/workout")
public class WorkoutController {

    @Autowired
    private WorkoutServices workoutServices;

    @PostMapping(value = "/save")
    private String saveWorkout(@RequestBody Workout workouts)
    {
        workoutServices.saveOrUpdate(workouts);
        return workouts.get_id();
    }

    @GetMapping(value = "/getAllWorkouts")
    private Iterable<Workout>getWorkout()
    {
        return workoutServices.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Workout update(@RequestBody Workout workout,@PathVariable(name = "id")String _id)
    {
        workout.set_id(_id);
        workoutServices.saveOrUpdate(workout);
        return workout;
    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteWorkout(@PathVariable("id") String _id)
    {
        workoutServices.deleteWorkout(_id);
    }

    @RequestMapping(value = "/workout/{id}")
    private Workout getWorkout(@PathVariable(name = "id")String workoutid)
    {
        return workoutServices.getWorkoutByID(workoutid);
    }
}
