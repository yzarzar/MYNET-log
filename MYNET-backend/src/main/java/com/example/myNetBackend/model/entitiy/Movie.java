package com.example.myNetBackend.model.entitiy;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class Movie {
    
    private int movieId;
    private String title;

    @Column(columnDefinition = "TEXT")
    private String plot;

    private String posterUrl;
    private Duration runtime;
    private int rating;
    private int productionYear;
    private int seasonNumber;
    private LocalDate releaseDate;
    private BigDecimal budget;
}