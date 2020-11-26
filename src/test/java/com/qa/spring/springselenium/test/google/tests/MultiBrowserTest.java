package com.qa.spring.springselenium.test.google.tests;

import com.qa.spring.springselenium.test.google.SpringBaseTestNGTest;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.testng.annotations.Test;

public class MultiBrowserTest extends SpringBaseTestNGTest {

    @Autowired
    private ApplicationContext context;

    @Test
    public void multiBrowserTest(){
        context.getBean("chromeDriver", WebDriver.class).get("https://www.google.com");
    }

}
