package com.accessjobs.pjp.repositories;

import com.accessjobs.pjp.domain.Job;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends CrudRepository<Job,Long> {

    Job findByJobIdentifier(String jobIdentifier);
    @Override
    Iterable<Job> findAll();

    Iterable<Job> findAllByUserId(Long userId);
}
