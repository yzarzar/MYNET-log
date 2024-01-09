package com.example.myNetBackend.model.entitiy;

import java.time.LocalDate;

import com.example.myNetBackend.model.constants.Nationality;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class Director {

    private int directorId;
    private String firstName;
    private String lastName;
    private String photoPath;
    private LocalDate birthDate;

    @Column(columnDefinition = "TEXT")
    private String bio;
    private Nationality nationality;
}
