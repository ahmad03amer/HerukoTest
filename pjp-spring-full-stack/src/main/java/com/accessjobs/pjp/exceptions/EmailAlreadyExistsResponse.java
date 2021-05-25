package com.accessjobs.pjp.exceptions;

//1 this is the first step when we need to create a custome exception
public class EmailAlreadyExistsResponse {
    private String email;

    public EmailAlreadyExistsResponse(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
