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


}
