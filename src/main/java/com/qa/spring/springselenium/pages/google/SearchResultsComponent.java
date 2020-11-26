package com.qa.spring.springselenium.pages.google;

import com.qa.spring.springselenium.annotations.Page;
import com.qa.spring.springselenium.annotations.PageFragment;
import com.qa.spring.springselenium.pages.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.List;

@PageFragment
public class SearchResultsComponent extends Base {

    @FindBy(how = How.CSS, css = "div.rc")
    private List<WebElement> searchResults;

    @Override
    public boolean isAt() {
        return webdriverWait.until(e -> !this.searchResults.isEmpty());
    }

    public int getResultCount(){
        return searchResults.size();
    }
}
