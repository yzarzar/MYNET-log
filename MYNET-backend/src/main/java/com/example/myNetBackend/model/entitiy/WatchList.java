package com.example.myNetBackend.model.entitiy;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class WatchList {
    
    private int watchListId;
    private LocalDateTime localDateTime;
}
