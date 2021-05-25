package com.accessjobs.pjp.exceptions;



public class JobNotFoundExceptionResponse {

    private String JobNotFound;

    public JobNotFoundExceptionResponse(String jobNotFound) {
        JobNotFound = jobNotFound;
    }

    public String getProjectNotFound() {
        return JobNotFound;
    }

    public void setProjectNotFound(String jobNotFound) {
        JobNotFound = jobNotFound;
    }
}