package com.qa.spring.springselenium.pages.google;

import com.qa.spring.springselenium.annotations.Page;
import com.qa.spring.springselenium.annotations.PageFragment;
import com.qa.spring.springselenium.pages.Base;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.List;

@PageFragment
public class SearchComponent extends Base {


    @FindBy(how = How.NAME, name = "q")
    private WebElement searchBox;

    @FindBy(how = How.NAME, name = "btnK")
    private List<WebElement> searchBtn;

    @Override
    public boolean isAt() {
        return this.webdriverWait.until(i -> this.searchBox.isDisplayed());
    }

    public void search(final String searchTerm){
        this.searchBox.sendKeys(searchTerm);
        this.searchBox.sendKeys(Keys.TAB);
        this.searchBtn.stream().
                filter(e -> e.isDisplayed() && e.isEnabled()).
                findFirst().
                ifPresent(WebElement::click);
    }
}
