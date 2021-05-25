package com.accessjobs.pjp.exceptions;

import lombok.Getter;
import lombok.Setter;

/*
* in the validation annotations we can validate the input , but to assure that there are no errors in the database
* we must handle the errors , such as here we can check if the id is not null but to check if it is unique
* we return a custome handle response
* */
@Getter
@Setter
public class JobIdExceptionResponse {
    private String jobIdentifier;

    public JobIdExceptionResponse(String jobIdentifier) {
        this.jobIdentifier = jobIdentifier;
    }
}
