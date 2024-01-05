package com.personalWebsite.demo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@Controller()
public class MainController {

    int visitors = 0;

    @GetMapping("/")
    String mainPage(@RequestParam( required = false) String lang){
        return "home.html";
    }

    @GetMapping("/error")
    String errorring(@RequestParam( required = false) String lang){
        return "home.html";
    }


    @GetMapping("/visitors")
    @ResponseBody
    ResponseEntity<Map<String, Object>> visits(){
        Map<String,Object> answer = new HashMap<>();
        visitors++;
        answer.put("visitors", visitors);

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }
    @GetMapping("/remembertoscanyournfctag")
    @ResponseBody
    ResponseEntity<Map<String, Object>> firstSuccess(){

        Map<String,Object> answer = new HashMap<>();

        answer.put("title", "Success");
        answer.put("text", """
                Good, now for the hard part, There is a tiktok video that is set on friends only,
                my first tiktok. You must follow my tiktok account and read the comment that Anthony made on that tiktok video, I replied to that comment.
                type down that comment and submit and the giftcard is yours
                """);
        answer.put("src","logoIOS.png");
       return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/greatidea")
    @ResponseBody
    ResponseEntity<Map<String, Object>> success(){

        Map<String,Object> answer = new HashMap<>();

        answer.put("title", "Congratulations !!!!");

        answer.put("text", "GIFTCARD : C4LU-CLXBX8-KYAT  If you did win and redeemed the giftcard please leave a comment on my tiktok so that i can prove i did do the contest");

        answer.put("src","giftCard.jpg");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }
}
