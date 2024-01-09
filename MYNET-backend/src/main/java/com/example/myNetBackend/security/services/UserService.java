package com.example.myNetBackend.security.services;

import com.example.myNetBackend.security.entities.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService {
    UserDetailsService userDetailsService();
    List<User> getAllUsers();
}
