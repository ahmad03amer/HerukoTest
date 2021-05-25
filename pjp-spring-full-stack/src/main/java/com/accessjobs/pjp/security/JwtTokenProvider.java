package com.accessjobs.pjp.security;

import com.accessjobs.pjp.domain.User;
import com.accessjobs.pjp.services.JobService;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.security.core.Authentication;



import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.accessjobs.pjp.security.SecurityConstants.EXPIRATION_TIME;
import static com.accessjobs.pjp.security.SecurityConstants.SECRET;

//generate a token when user enter valid email and password
@Component
public class JwtTokenProvider {

    Logger logger = LoggerFactory.getLogger(JobService.class);

    //Generate the token

    public String generateToken(Authentication authentication){
        User user = (User)authentication.getPrincipal();

        Date now = new Date(System.currentTimeMillis());

        Date expiryDate = new Date(now.getTime()+EXPIRATION_TIME);

        String userId = Long.toString(user.getId());
        logger.warn("JWTtokenprovider ---------"+userId);
        Map<String,Object> claims = new HashMap<>();
        //info included into the token
        claims.put("id", (Long.toString(user.getId())));
        claims.put("email", user.getEmail());
        claims.put("fullName", user.getFullName());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    //Validate the token
    public boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        }catch (SignatureException ex){
            System.out.println("Invalid JWT Signature");
        }catch (MalformedJwtException ex){
            System.out.println("Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            System.out.println("Expired JWT token");
        }catch (UnsupportedJwtException ex){
            System.out.println("Unsupported JWT token");
        }catch (IllegalArgumentException ex){
            System.out.println("JWT claims string is empty");
        }
        return false;
    }


    //Get user Id from token

    public Long getUserIdFromJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody();
        String id = (String)claims.get("id");
        logger.info("jwttokenprovider class get id from token : ---- "+id);
        return Long.parseLong(id);
    }
}