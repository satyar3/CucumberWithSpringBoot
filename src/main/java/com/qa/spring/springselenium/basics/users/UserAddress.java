package com.qa.spring.springselenium;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class UserAddress {

    @Value("${STREET_NAME:Bangalore}")
    private String street;

    public String getStreet() {
        return street;
    }
}
