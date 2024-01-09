package com.example.myNetBackend.model.entitiy;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class userShareMovie {
    
    private int userShareMovieId;
    private LocalDateTime shareDateTime;
}
