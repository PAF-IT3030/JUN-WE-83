package com.example.backend.Service;

import com.example.backend.Entity.Workout;
import com.example.backend.Repo.WorkoutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkoutServices {

    @Autowired
    private WorkoutRepo repo;

    public void saveOrUpdate(Workout workouts) {
        repo.save(workouts);
    }

    public Iterable<Workout> listAll() {
        return this.repo.findAll();
    }

    public void deleteWorkout(String id) {
        repo.deleteById(id);
    }

    public Workout getWorkoutByID(String workoutid) {
        return repo.findById(workoutid).get();
    }
}
