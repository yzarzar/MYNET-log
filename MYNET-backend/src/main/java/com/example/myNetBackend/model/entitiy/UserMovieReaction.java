package com.example.myNetBackend.model.entitiy;

import com.example.myNetBackend.model.constants.ReactionType;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

@Data
public class UserMovieReaction {
    
    private int userMovieReactionId;

    @Enumerated(EnumType.STRING)
    private ReactionType reactionType;
}
