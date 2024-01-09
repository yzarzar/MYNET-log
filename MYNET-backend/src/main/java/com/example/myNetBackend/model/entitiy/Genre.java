package com.example.myNetBackend.model.entitiy;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class Genre {
    
    private int genreId;
    private String genreName;

    @Column(columnDefinition = "TEXT")
    private String description;
}
