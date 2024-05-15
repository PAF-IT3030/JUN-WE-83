package com.example.backend.Controller;

import com.example.backend.Entity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/save")
    private String saveUser(@RequestBody User users)
    {
        userService.saveorUpdate(users);
        return users.get_id();
    }

    @GetMapping(value = "/getAll")
    private Iterable<User>getUsers()
    {
        return userService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private User update(@RequestBody User user,@PathVariable(name="id")String _id)
    {
        user.set_id(_id);
        userService.saveorUpdate(user);
        return user;

    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteUser(@PathVariable("id") String _id)
    {
        userService.deleteUser(_id);
    }

    @RequestMapping("/user/{id}")
    private User getUser(@PathVariable(name = "id")String userid)
    {
        return userService.getUserByID(userid);
    }

}
