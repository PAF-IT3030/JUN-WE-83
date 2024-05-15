package com.example.backend.Controller;

import com.example.backend.Entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")
public class UserController {

    @PostMapping(value = "/save")
    private String saveUser(@RequestBody User users)
    {
        return users.id;
    }


}
