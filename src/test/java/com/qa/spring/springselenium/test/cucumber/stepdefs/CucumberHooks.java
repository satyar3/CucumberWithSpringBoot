package com.qa.spring.springselenium.test.cucumber.stepdefs;

import com.qa.spring.springselenium.service.ScreenshotService;
import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Scenario;
import org.openqa.selenium.WebDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Lazy;

public class CucumberHooks {

    @Autowired
    private ApplicationContext applicationContext;

    @Lazy
    @Autowired
    private ScreenshotService screenshotService;

    @AfterStep
    public void afterStep(Scenario scenario){
        if(scenario.isFailed())
            scenario.embed(screenshotService.getScreenShot(), "image/png", scenario.getName());
    }

    @After
    public void quitBrowser(){
        applicationContext.getBean(WebDriver.class).quit();
    }
}
