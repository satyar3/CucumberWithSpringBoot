package com.qa.spring.springselenium.pages.google;

import com.qa.spring.springselenium.annotations.Page;
import com.qa.spring.springselenium.config.WebDriverConfig;
import com.qa.spring.springselenium.pages.Base;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;

@Page
public class GooglePage extends Base {

    @Autowired
    private SearchComponent searchComponent;

    @Autowired
    private SearchResultsComponent searchResultsComponent;

    @Value("${APP_URL:https://www.google.com/default}")
    private String appUrl;

    public SearchComponent getSearchComponent() {
        return searchComponent;
    }

    public SearchResultsComponent getSearchResultsComponent() {
        return searchResultsComponent;
    }

    @Override
    public boolean isAt() {
        return this.searchComponent.isAt();
    }

    public void goTo(){
        this.driver.get(appUrl);
        System.out.println("App URL is : "+this.appUrl);
    }
}
