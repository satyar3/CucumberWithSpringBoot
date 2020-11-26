package com.qa.spring.springselenium.config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;

@Configuration
@Lazy
public class WebDriverWaitConfig {

    @Value("${default-timeout:30}")
    private int timeOut;

    @Bean
    @Scope("prototype")
    public WebDriverWait webdriverWait(WebDriver driver){
        return new WebDriverWait(driver,this.timeOut);
    }

}
