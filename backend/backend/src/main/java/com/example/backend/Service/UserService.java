package com.example.backend.Service;

import com.example.backend.Entity.User;
import com.example.backend.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    public void saveorUpdate(User users) {
        repo.save(users);
    }

    public Iterable<User> listAll() {
        return this.repo.findAll();
    }
}
