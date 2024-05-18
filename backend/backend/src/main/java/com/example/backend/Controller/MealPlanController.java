package com.example.backend.Controller;

import com.example.backend.Entity.MealPlan;
import com.example.backend.Service.MealPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/meal")
public class MealPlanController {

    @Autowired
    private MealPlanService mealPlanService;

    @PostMapping(value = "/save")
    private String saveMeal(@RequestBody MealPlan mealPlan)
    {
        mealPlanService.saveorUpdate(mealPlan);
        return mealPlan.get_id();
    }

    @GetMapping(value = "/getAll")
    private Iterable<MealPlan>getMealPlan()
    {
        return mealPlanService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private MealPlan update(@RequestBody MealPlan mealPlan,@PathVariable(name = "id")String _id)
    {
        mealPlan.set_id(_id);
        mealPlanService.saveorUpdate(mealPlan);
        return mealPlan;
    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteMeal(@PathVariable("id") String _id)
    {
        mealPlanService.deleteMeal(_id);
    }

    @RequestMapping(value = "/mealPlan/{id}")
    private MealPlan getMealPlan(@PathVariable(name = "id")String mealid)
    {
        return mealPlanService.getMealPlanByID(mealid);
    }


}
