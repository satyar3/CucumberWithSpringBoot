package com.qa.spring.springselenium;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.stream.IntStream;

@Component
@Lazy
public class Television {

    @Value("${channel:SONY}")
    private String name;

    public Television(){
        System.out.println("Inside the constructor : "+this.name);
    }

    @PostConstruct //Field injection will be started
    public void init(){
        System.out.println("Inside init : "+this.name);
        System.out.println("TV is switching on");
    }

    public void playMovie(){
        IntStream.range(0,6).forEach(i -> System.out.println("Playing scene : "+i));
    }

    @PreDestroy
    public void turnOff(){
        System.out.println("TV has been switched off");
    }
}
