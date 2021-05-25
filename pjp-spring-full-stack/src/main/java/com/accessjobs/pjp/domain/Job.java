package com.accessjobs.pjp.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotBlank(message="Job title is required")
    @Size(min=5 , max=35 ,message = "Please use 5 to 35 characters")
    private String title;
    @NotBlank(message="job Identifier is required")
    @Size(min=4 , max=6 ,message = "Please use 4 to 6 characters")
    @Column(updatable = false,unique = true)
    private String jobIdentifier;
    @NotBlank(message="Description is required")
    private String description;
    @NotBlank(message = "Email is required")
    private String email;
    private String location;
    private String type;
    @JsonFormat(pattern = "yyyy-mm-dd")
    @NotNull(message = "Deadline date is required")
    private Date endDate;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date createdAt;
    private String salary;
    private long companyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

    //to allow some features depending on the role
    private String userRole;

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }


}
