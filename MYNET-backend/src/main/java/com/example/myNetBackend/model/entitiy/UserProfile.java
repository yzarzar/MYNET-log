package com.example.myNetBackend.model.entitiy;

import com.example.myNetBackend.model.constants.Age;

import lombok.Data;

@Data
public class UserProfile {
    
    private int userProfileId;
    private String nickName;
    private String photoUrl;
    private String bio;
    private String location;
    private boolean receiveNotification;
    private Age age;
}
