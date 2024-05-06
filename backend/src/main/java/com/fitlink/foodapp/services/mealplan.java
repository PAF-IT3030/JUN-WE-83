package com.food_app.foodapp.services;
import org.springframework.stereotype.Service;
import com.food_app.foodapp.model.Comment;
import com.food_app.foodapp.model.MealPlan;
import com.food_app.foodapp.repositories.MealPlanRepository;
import java.util.List;
import java.util.Optional;

@Service
public class MealPlanService {
    private final MealPlanRepository mealPlanRepository;

    @Autowired
    public MealPlanService(MealPlanRepository mealPlanRepository) {
        this.mealPlanRepository = mealPlanRepository;
    }

    public List<MealPlan> getAllMealPlans() {
        return mealPlanRepository.findAll();
    }

    public Optional<MealPlan> getMealPlanById(String id) {
        return mealPlanRepository.findById(id);
    }

    public MealPlan createMealPlan(MealPlan mealPlan) {
        return mealPlanRepository.save(mealPlan);
    }

    public MealPlan updateMealPlan(String id, MealPlan mealPlan) {
        Optional<MealPlan> existingMealPlan = mealPlanRepository.findById(id);
        if (existingMealPlan.isPresent()) {
            MealPlan updatedMealPlan = existingMealPlan.get();
            updatedMealPlan.setCreatedBy(mealPlan.getCreatedBy());
            updatedMealPlan.setImageUrls(mealPlan.getImageUrls());
            updatedMealPlan.setDescription(mealPlan.getDescription());
            return mealPlanRepository.save(updatedMealPlan);
        }
        return null;
    }

    public boolean deleteMealPlan(String id) {
        if (mealPlanRepository.existsById(id)) {
            mealPlanRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public MealPlan likeMealPlan(String id, String userId) {
        Optional<MealPlan> existingMealPlan = mealPlanRepository.findById(id);
        if (existingMealPlan.isPresent()) {
            MealPlan mealPlan = existingMealPlan.get();
            List<String> likes = mealPlan.getLikes();
            if (!likes.contains(userId)) {
                likes.add(userId);
                mealPlan.setLikes(likes);
                return mealPlanRepository.save(mealPlan);
            }
        }
        return null;
    }

    public MealPlan addCommentToMealPlan(String id, Comment comment) {
        Optional<MealPlan> existingMealPlan = mealPlanRepository.findById(id);
        if (existingMealPlan.isPresent()) {
            MealPlan mealPlan = existingMealPlan.get();
            List<Comment> comments = mealPlan.getComments();
            comments.add(comment);
            mealPlan.setComments(comments);
            return mealPlanRepository.save(mealPlan);
        }
        return null;
    }
}
