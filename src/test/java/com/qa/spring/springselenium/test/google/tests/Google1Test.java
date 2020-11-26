package com.qa.spring.springselenium.test.google.tests;

import com.qa.spring.springselenium.pages.google.GooglePage;
import com.qa.spring.springselenium.test.google.SpringBaseTestNGTest;
import com.qa.spring.springselenium.service.ScreenshotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Google1Test extends SpringBaseTestNGTest {
//Inorder to set the profile such that which property will be taken during the run time --> Go to Run/Debug configuration
//--> Environment Variable --> spring.profiles.active=qa
    @Autowired
    private GooglePage googlePage;

    @Autowired
    private ScreenshotService screenshotService;

    @Test
    public void googleTest(){
        this.googlePage.goTo();
        Assert.assertTrue(googlePage.isAt());

        this.googlePage.getSearchComponent().search("Java Selenium with Spring Framework");
        Assert.assertTrue(googlePage.getSearchResultsComponent().isAt());
        Assert.assertTrue(googlePage.getSearchResultsComponent().getResultCount() > 1);
        screenshotService.takeScreenshot();
    }
}
