package com.example.backend.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {

    @Id
    private String _id;
    private String name;
    private String email;
    private String password;

    
}
