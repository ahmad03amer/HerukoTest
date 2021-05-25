package com.accessjobs.pjp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Email(message = "User name needs to be an email")
    @NotBlank(message = "email is required")
    @Column(unique  = true)
    private String email;
    @NotBlank(message = "Please enter your full name")
    private  String fullName;
    @NotBlank(message = "Password field is required")
    private String password;
    @Transient //check if passwords matches before validation hhh
    private String confirmPassword;
    private Date createdAt;
    private  Date updatedAt;
    private String role;

    private  Date BOD;
    private String gender;
    private String country;
    private String city;
    private String phoneNumber;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;

    //OneToMany with Job
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "user", orphanRemoval = true)
    private List<Job> jobs = new ArrayList<>();


    public User() {
    }

    //one to many with job


    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }

    /*
    user details interface methods
     */

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    @JsonIgnore
    public String getUsername() {
        return email;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return true;
    }
    
    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}

