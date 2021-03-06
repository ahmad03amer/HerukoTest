package com.accessjobs.pjp.security;

public class SecurityConstants {
    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String MYSQL_URL = "jdbc:mysql://localhost:3306/**";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 3000_000; //30 seconds
}