package com.example.myNetBackend.security.services;

import com.example.myNetBackend.security.dto.JwtAuthenticationResponse;
import com.example.myNetBackend.security.dto.RefreshTokenRequest;
import com.example.myNetBackend.security.dto.SignInRequest;
import com.example.myNetBackend.security.dto.SignUpRequest;
import com.example.myNetBackend.security.entities.User;

public interface AuthenticationService {
    User signUp(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signIn(SignInRequest signInRequest);
    JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
