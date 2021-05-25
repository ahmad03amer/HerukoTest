package com.accessjobs.pjp.controllers;

import com.accessjobs.pjp.domain.User;
import com.accessjobs.pjp.exceptions.MapValidationErrorsService;
import com.accessjobs.pjp.payload.JWTLoginSucessReponse;
import com.accessjobs.pjp.payload.LoginRequest;
import com.accessjobs.pjp.security.JwtTokenProvider;
import com.accessjobs.pjp.services.UserService;
import com.accessjobs.pjp.validator.UserValidator;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

import static com.accessjobs.pjp.security.SecurityConstants.TOKEN_PREFIX;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private MapValidationErrorsService mapValidationErrorsService;
    @Autowired
    private UserService userService;
    @Autowired
    private UserValidator userValidator;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorsService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        //if the user entered a valid user /pass it will generate a token
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  jwtTokenProvider.generateToken(authentication);

        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
        //validate passwords match
        userValidator.validate(user,result);
        ResponseEntity<?> errorMap =mapValidationErrorsService.MapValidationService(result);
        if(errorMap != null)return errorMap;

        User newUser = userService.register(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    @PostMapping("/add")
    public ResponseEntity<?> addUser(MultipartFile file,@Valid @ModelAttribute User user){

        User newUser = userService.add(file,user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    private static String imageDirectory = System.getProperty("user.dir") + "/images/";

    @RequestMapping(value = "/register/upload/image", produces = {MediaType.IMAGE_PNG_VALUE, "application/json"})
    public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file,
                                         @RequestParam("imageName") String name) {
        makeDirectoryIfNotExist(imageDirectory);
        Path fileNamePath = Paths.get(imageDirectory,
                name.concat(".").concat(FilenameUtils.getExtension(file.getOriginalFilename())));
        try {
            Files.write(fileNamePath, file.getBytes());
            return new ResponseEntity<>(name, HttpStatus.CREATED);
        } catch (IOException ex) {
            return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
        }
    }

    private void makeDirectoryIfNotExist(String imageDirectory) {
        File directory = new File(imageDirectory);
        if (!directory.exists()) {
            directory.mkdir();
        }
    }
}
