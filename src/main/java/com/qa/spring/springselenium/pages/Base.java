package com.qa.spring.springselenium.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public abstract class Base {

    @Autowired
    @Lazy
    protected WebDriver driver;

    @Autowired
    @Lazy
    protected WebDriverWait webdriverWait;

    @PostConstruct
    private void init(){
        PageFactory.initElements(driver,this);
    }


    //@PreDestroy won't be invoked in case @Scope is defined
    @PreDestroy
    private void quitBrowser(){
        this.driver.quit();
    }
    public abstract boolean isAt();
}
