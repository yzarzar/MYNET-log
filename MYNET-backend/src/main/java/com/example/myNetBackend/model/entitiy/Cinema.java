package com.example.myNetBackend.model.entitiy;

import com.example.myNetBackend.model.constants.Nationality;

import lombok.Data;

@Data
public class Cinema {
    
    private int cinemaId;
    private String cinemaName;
    private Nationality country;
    private String address;
}