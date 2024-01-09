package com.example.myNetBackend.model.entitiy;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class Award {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int awardId;

    @NotBlank(message = "Award name is required")
    private String awardName;

    @NotBlank(message = "Category is required")
    @Size(max = 50)
    private String category;

    @Size(max = 100)
    private String organization;

    @Column(columnDefinition = "TEXT")
    private String comment;

    @DateTimeFormat(pattern = "MM/dd/yyyy")
    @NotNull(message = "Date received is required")
    private LocalDate dateReceived;

    @ManyToOne(optional = false)
    @JoinColumn(name = "actor_id")
    private Actors actors;

    @Column(nullable = true, columnDefinition = "boolean default true")
    private boolean isActive = true;
}
