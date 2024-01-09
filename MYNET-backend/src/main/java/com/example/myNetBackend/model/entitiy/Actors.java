package com.example.myNetBackend.model.entitiy;

import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

import com.example.myNetBackend.model.constants.Nationality;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Actors {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int actorId;

    @NotBlank(message = "First name is required")
    @Size(max = 50)
    private String firstName;

    @NotBlank(message = "First name is required")
    @Size(max = 50)
    private String lastName;

    @Column(nullable = true)
    private String photoPath;

    @NotNull(message = "Birth date is required")
    @DateTimeFormat(pattern = "MM/dd/yyyy")
    private LocalDate birthDate;

    @Column(columnDefinition = "TEXT")
    private String bio;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Nationality is required")
    private Nationality nationality;

    @OneToMany(mappedBy = "actors", cascade = CascadeType.MERGE, orphanRemoval = true)
    private List<Award> awards;
}
