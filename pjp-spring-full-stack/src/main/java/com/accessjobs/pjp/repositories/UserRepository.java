package com.accessjobs.pjp.repositories;

import com.accessjobs.pjp.domain.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findByEmail(String email);
    User getById(Long id);
}
