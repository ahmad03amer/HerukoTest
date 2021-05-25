package com.accessjobs.pjp.services;

import com.accessjobs.pjp.domain.Job;
import com.accessjobs.pjp.domain.User;
import com.accessjobs.pjp.exceptions.JobIdException;
import com.accessjobs.pjp.exceptions.JobNotFoundException;
import com.accessjobs.pjp.repositories.JobRepository;
import com.accessjobs.pjp.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class JobService {
    Logger logger = LoggerFactory.getLogger(JobService.class);

    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private UserRepository userRepository;

    //save or update
    public Job add(Job job,String email){
        //if we need to update it
        Long jobId = job.getId(); // becase we cannot use != with long and != null is always true
        if(jobId > 0 ) {
            Job existingJob = jobRepository.findByJobIdentifier(job.getJobIdentifier());

            //if we try to update a job is not null and not for me
            if(existingJob != null && (!existingJob.getUser().getEmail().equals(email))){
                throw new JobNotFoundException("Job Not found in your account");
            }else if(existingJob == null) {
                throw new JobNotFoundException("Job with id '"+job.getJobIdentifier()+"' cannot be updated because it doesnt exist");
            }
        }

        try {
            logger.info("- JOB Service - desc .is"+job.getDescription());
            User user = userRepository.findByEmail(email);
            job.setUser(user);
            logger.warn(user.getEmail());
            job.setUserRole(user.getRole());
            //convert the identifier to upper case
            job.setJobIdentifier(job.getJobIdentifier().toUpperCase(Locale.ROOT));
            return jobRepository.save(job);
        }catch (Exception e){
            throw new JobIdException("Job Identifier '"+job.getJobIdentifier().toUpperCase(Locale.ROOT)+"' Cannot added");
        }
    }

    public Job findJobByIdentifier(String jobIdentifier,String email){
        //convert the id to upper case to avoid     any error
        Job job = jobRepository.findByJobIdentifier(jobIdentifier.toUpperCase(Locale.ROOT));
        //check if there is no object in the db with the input identifier
        if(job == null){
            throw new JobIdException("Job Identifier '"+jobIdentifier.toUpperCase(Locale.ROOT)+"' not found");
        }
        //check if the user access his jobs
        User user = userRepository.findByEmail(email);
        if(!job.getEmail().equals(user.getEmail())){
                throw new JobNotFoundException("Job Not Found in your Account");
        }
        return job;
    }


    public Iterable<Job> findAllJobs(){
        return jobRepository.findAll();
    }

    //returns the jobs posted by the user loged in
    public Iterable<Job> findAllJobs(String email){
        User user = userRepository.findByEmail(email);
        return jobRepository.findAllByUserId(user.getId());
    }

    public void deleteJobByIdentifier(String jobIdentifier, String email){
 /*       Job job = jobRepository.findByJobIdentifier(jobIdentifier);

        //first check if the object exist
        if(job == null){
            throw new JobIdException("Cannot delete the job with '"+jobIdentifier.toUpperCase(Locale.ROOT)+"' identifier , it doesnt exist");
        }*/

        jobRepository.delete(findJobByIdentifier(jobIdentifier,email));
    }
}
