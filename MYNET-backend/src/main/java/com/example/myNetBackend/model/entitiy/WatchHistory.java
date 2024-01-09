package com.example.myNetBackend.model.entitiy;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class WatchHistory {
    
    private int watchHistoryId;
    private LocalDateTime watchAt;
}