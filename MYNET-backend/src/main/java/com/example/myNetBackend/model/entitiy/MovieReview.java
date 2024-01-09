package com.example.myNetBackend.model.entitiy;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class MovieReview {
    
    private int movieReviewId;
    private int rating;

    @Column(columnDefinition = "TEXT")
    private String comment;
}
