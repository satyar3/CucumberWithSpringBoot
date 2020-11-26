package com.qa.spring.springselenium.test.basics;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TelevisionTest {

    @Autowired
    private com.qa.spring.springselenium.Television tv;

    @Test
    public void tvTest(){
        tv.playMovie();
    }

}
