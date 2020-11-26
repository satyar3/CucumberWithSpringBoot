package com.qa.spring.springselenium.service;

import com.github.javafaker.Faker;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;

//@Component --> Same as @Service
@Service
public class ScreenshotService {

    /*@Autowired
    private WebDriver driver;*/

    @Autowired
    @Lazy
    //private TakesScreenshot driver;
    private ApplicationContext appContext;


    @Autowired
    private Faker faker;

    @Value("${screenshot.path}")
    private Path screenshotPath;
    
    public void takeScreenshot(){
        //File screenshotFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File screenshotAs = appContext.getBean(TakesScreenshot.class).getScreenshotAs(OutputType.FILE);
        try {
            FileCopyUtils.copy(screenshotAs, screenshotPath.resolve(faker.name().firstName()+".png").toFile());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public byte[] getScreenShot(){
        return appContext.getBean(TakesScreenshot.class).getScreenshotAs(OutputType.BYTES);
    }
}
