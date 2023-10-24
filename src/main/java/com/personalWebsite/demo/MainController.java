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

    String errorPage = """
                        <div class="center">
                            <h2>This page is not accessible</h2>
                            <h3>Please Go back to the app</h3>
                        </div>
                        <div class="center">
                            <a href="http://localhost:8080">Application</a>
                        </div>
            """;

    @GetMapping("/")
    String mainPage(@RequestParam( required = false) String lang){
        return "home.html";
    }

    @GetMapping("/presentation")
    @ResponseBody
    ResponseEntity<Map<String, Object>> presentation(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Présentation");
        answerFr.put("Text", """
                Bonjour, étant un diplômé en technologie de l’électronique industriel du cégep Montmorency,
                j’ai plus d’expérience en industriel qu’en logiciel. C’est en faisant de la programmation
                dans mes cours d’industriel que je suis tombé en amour avec la programmation.
                Cela ne change pas mon dévouement pour l’apprentissage de nouveaux concepts reliés à la programmation.
                Ce qui est, en effet, mon aptitude le plus fort. Dans le temps que j’ai eu pour m’introduire à
                
                l’informatique, je suis devenue un professionnel en Java et en C#. Je connaissais déjà le C/C++.
                De plus, je possède une très forte connaissance en Python et en JavaScript/TypeScript. Je pratique souvent pour
                ne pas perdre ma rapidité. J’ai appris par moi-même NodeJS et le language SQL.
                En ce qui concerne mes aptitudes personnelles je suis assidue et très motivé.
                Ma motivation dérive de mon désir d’être le meilleur.
                """);

        answerEn.put("Titre", "Profile");
        answerEn.put("Text", """
                Hello, as a graduate in industrial electronics technology from Cégep Montmorency,
                I have more experience in industry than in software. 
                It was while programming in my industrial courses that I fell in love with programming. 
                This does not change my dedication to learning new concepts related to programming, 
                which is in fact my strongest aptitude. In the time I have had to introduce myself to computer science, 
                I have become proficient in Java and C#. I already knew C/C++. In addition, 
                I have a very strong knowledge of Python and JavaScript/TypeScript. I practice often so as not to lose my speed. 
                I have taught myself Node.js and have a basic knowledge of SQL. As for my personal skills,
                 I am diligent and highly motivated. My motivation comes from my desire to be the best.
                """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src","profile.jpg");


       return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/competence")
    @ResponseBody
    ResponseEntity<Map<String, Object>> competence(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Compétence");

        answerFr.put("sousTitre1", "Compétence Social");
        answerFr.put("Text1", """
                Capacité de parler et d’écrire en anglais et en français, ayant l’habitude de rendre
                des rapports écrits et orales, j’ai développé une bonne capacité à communiquer et à
                établir des liens avec mon entourage.
                """);
        answerFr.put("sousTitre2", "Compétence en informatique");
        answerFr.put("Text2", """
                Capacité d’installer et de dépanner Windows 7 à 11
                Connaissance de base de Unix/Linux.
                """);
        answerFr.put("sousTitre3", "Compétence en Programation");
        answerFr.put("Text3", """
                Programmation en Java, dotNET, Golang, et Python. (Back-end)
                React, Flutter & Qt6 (UI Front-end Application mobile).
                """);

        answerEn.put("Titre", "Skills");
        answerEn.put("sousTitre1", "Social Skills");
        answerEn.put("Text1", """
        Ability to speak and write in English and French, with a habit of delivering written and oral
        reports, I have developed good communication skills and the ability to establish connections
        with those around me.
        """);
        answerEn.put("sousTitre2", "Computer Skills");
        answerEn.put("Text2", """
        Ability to install and troubleshoot Windows 7 to 11
        Basic knowledge of Unix/Linux.
        """);
        answerEn.put("sousTitre3", "Programming Skills");
        answerEn.put("Text3", """
        Programming in Java, dotNET, Golang, and Python (Back-end)
        React, Flutter & Qt6 (UI Front-end Mobile Applications).
        """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src","social.jpg");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/professionnel")
    @ResponseBody
    ResponseEntity<Map<String, Object>> professionnel(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Expérience professionnel");

        answerFr.put("sousTitre1", "Developeur d’application python");
        answerFr.put("Text1", """
                Telcobridges, QC, Boucherville Juin 2022 à août 2022.
                """);

        answerFr.put("Text2", """
                Création d’une application avec QT6 python en utilisation et Git pour commit et push.
                J'ai aussi utiliser  Jira pour CI/CD devops.
                """);

        answerFr.put("Text3", """
                J’ai automatisé des scripts sur Windows avec Autohotkey.
                """);

        answerFr.put("Text4", """
                 Mon application avait pour but d’augmenter et d’automatisé la production, ce qui est un succès.
                """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src","telcobridges.jpg");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/travail")
    @ResponseBody
    ResponseEntity<Map<String, Object>> travail(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Expérience de Travail");

        answerFr.put("sousTitre1", "Commis (travail d’été)");
        answerFr.put("Text1", """
                Couche-Tard, QC, Terrebonne Juillet 2019 à octobre 2019
                """);

        answerFr.put("Text2", """
                Amélioration de mes expériences en service à la clientèle
                """);

        answerFr.put("sousTitre2", "Réceptionniste (travail d’été)");

        answerFr.put("Text3", """
                 Bistro L’aparté, QC, Terrebonne Juillet 2018
                """);
        answerFr.put("Text4", """
                 Amélioration de mes expériences en service à la clientèle
                """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src","couchetard.png");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/projets")
    @ResponseBody
    ResponseEntity<Map<String, Object>> projets(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Projets personnels");

        answerFr.put("sousTitre1", "Application de clavardage");
        answerFr.put("Text1", """
                Une application mobile qui permet de clavarder avec Dart Flutter et sqlite.
                J’ai utilisé le langage SQL et Dart pour pouvoir envoyer des http et websocket request au backend.
                """);

        answerFr.put("Text2", """
                Backend en Golang et Frontend avec Flutter
                J’ai fait du json parsing et des fonctions http pour faire un API http et websocket.
                """);

        answerFr.put("sousTitre2", "Siteweb de mon C.V.");

        answerFr.put("Text3", """
                 Ce site web est un de mes projets personnels pour pratiquer mes abbilités en fullstack.
                 Le but est de faire mon C.V. en version web. Je compte faire ce site web avec Jquery et Spring boot,
                 React et Dotnet Core, Angular et nodeJs.
                """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src1","58710.png");
        answer.put("src2","58711.png");
        answer.put("src3","code.png");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/autres")
    @ResponseBody
    ResponseEntity<Map<String, Object>> autres(@RequestHeader(required = false) HttpHeaders orggin, @RequestParam(value = "lang",required = false) String lang){

        Map<String,Object> answer = new HashMap<>();
        Map<String,Object> answerFr = new HashMap<>();
        Map<String,Object> answerEn = new HashMap<>();

        answerFr.put("Titre", "Autres versions de ce site");

        answerFr.put("sousTitre1", "Jquery et Spring boot");
        answerFr.put("Text1", """
                Ce site web va avoir un front-end en html/css/javascript avec un peu d'aide de jquery,
                Ce site web va avoir un backend en Java spring boot.
                """);

        answerFr.put("sousTitre2", "React et Dotnet Core");
        answerFr.put("Text2", """
                Ce site web va avoir un front-end fait avec React,
                Ce site web va avoir un backend en C#  dotNet Core.
                """);

        answerFr.put("sousTitre3", "Angular et nodeJs");
        answerFr.put("Text3", """
                Ce site web va avoir un front-end fait avec Angular,
                Ce site web va avoir un backend NodeJS et expressJS.
                """);

        answer.put("English", answerEn);
        answer.put("francais",answerFr);
        answer.put("src1","springboot.jpg");
        answer.put("src2","dotnet.png");
        answer.put("src3","nodejs.png");

        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping("/cv")
    String cv(@RequestParam( required = false) String lang){
        return "cv.pdf";
    }
}
