package com.accessjobs.pjp.controllers;

import com.accessjobs.pjp.domain.Job;
import com.accessjobs.pjp.services.JobService;
import com.accessjobs.pjp.exceptions.MapValidationErrorsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Locale;

@RestController
@RequestMapping("/api/job")
@CrossOrigin //to hit the backend server when connect from the frontend server
public class JobController {

    Logger logger = LoggerFactory.getLogger(JobController.class);

    @Autowired
    private JobService jobService;
    @Autowired
    private MapValidationErrorsService mapValidationErrorsService;

    //@valid annotation to validate the object attributes and , i used the following code FieldErrors to display the list of errors from validation
    @PostMapping("")
    public ResponseEntity<?> add(@Valid @RequestBody Job job, BindingResult result, Principal principal) {

        ResponseEntity<?> errorMap = mapValidationErrorsService.MapValidationService(result);
        if (errorMap != null) return errorMap;

        logger.info("- JOB Controller - principal getName is : "+principal.getName());

        Job tempJob = jobService.add(job, principal.getName());
        return new ResponseEntity<Job>(tempJob, HttpStatus.CREATED);
    }

    @GetMapping("/{jobIdentifier}")
    public ResponseEntity<?> getJobByIdentifier(@PathVariable String jobIdentifier,Principal principal) {
        Job job = jobService.findJobByIdentifier(jobIdentifier,principal.getName());
        return new ResponseEntity<Job>(job, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Job> getAllJobs() {
        //we dont need to do any handling , cuz if there are no objects , it will return an empty list
        return jobService.findAllJobs();
    }

    // this api to return the jobs posted by a specific user
    @GetMapping("/allUserJobs")
    public Iterable<Job> getAllJobs(Principal principal) {
        //we dont need to do any handling , cuz if there are no objects , it will return an empty list
        return jobService.findAllJobs(principal.getName());
    }
    @DeleteMapping("{jobIdentifier}")
    public ResponseEntity<?> deleteJobByIdentifier(@PathVariable String jobIdentifier,Principal principal) {
        //here we add the principal to delete the job related to me
        jobService.deleteJobByIdentifier(jobIdentifier,principal.getName());
        return new ResponseEntity<String>("Job with identifier '" + jobIdentifier.toUpperCase(Locale.ROOT) + "' was deleted successfuly", HttpStatus.OK);
    }
}
