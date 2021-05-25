package com.accessjobs.pjp.services;

import com.accessjobs.pjp.domain.User;
import com.accessjobs.pjp.exceptions.EmailAlreadyExistsException;
import com.accessjobs.pjp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired //define the bean in the main spring boot app
    private BCryptPasswordEncoder bCryptPasswordEncoder;//store non readable password in the database

    public User register(User newUser){
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //user name has to be unique (exception)
            newUser.setEmail(newUser.getEmail());
            //make sure that pass and confpass are matches
            //we dont presist or show the confirm password
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new EmailAlreadyExistsException("Email' "+newUser.getEmail()+"' is already exists");
        }

    }

    public User add(@RequestParam("file") MultipartFile file, User newUser){
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains(".."))
        {
            System.out.println("not a a valid file");
        }
        try {
            newUser.setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //user name has to be unique (exception)
            newUser.setEmail(newUser.getEmail());
            //make sure that pass and confpass are matches
            //we dont presist or show the confirm password
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new EmailAlreadyExistsException("Email' "+newUser.getEmail()+"' is already exists");
        }
    }
}
