package com.qa.spring.springselenium.test.cucumber.runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;


@CucumberOptions(
        features = "classpath:data/features",
        glue = {"com.qa.spring.springselenium.test.cucumber.stepdefs"},
        plugin = {"pretty","html:D:\\P_Workspace\\Udemy_sessions\\spring-selenium\\ScreenShots"}
)
public class CucumberRunner extends AbstractTestNGCucumberTests {


    @Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}
