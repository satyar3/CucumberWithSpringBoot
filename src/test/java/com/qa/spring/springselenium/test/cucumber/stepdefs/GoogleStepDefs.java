package com.qa.spring.springselenium.test.cucumber.stepdefs;

import com.qa.spring.springselenium.pages.google.GooglePage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootContextLoader;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.testng.Assert;


//Most IMP --> It doesn't matter how many number of Step defs are there, only one of the setp def should have the below annotation
//For Spring it considers a single class with combined given, when, then methods
@SpringBootTest
public class GoogleStepDefs {

    @Autowired
    private GooglePage googlePage;

    @Given("I am on the google site")
    public void launchWebsite() {
        this.googlePage.goTo();
    }

    @When("I enter {string} as keyword")
    public void enterKeyword(String keyWord) {
        this.googlePage.getSearchComponent().search(keyWord);
    }

    @When("I click on the search button")
    public void clickOnSearch() {
        //Ignore as of now
    }

    @Then("I should see at least {int} results")
    public void verifyResult(int resultCount) {
        Assert.assertTrue(googlePage.getSearchResultsComponent().getResultCount()>resultCount);
    }
}
