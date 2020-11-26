package com.qa.spring.springselenium.basics.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class User {

    @Autowired
    private com.qa.spring.springselenium.UserAddress address;
    @Autowired
    private com.qa.spring.springselenium.UserSalary userSalary;

    public void printAddress(){
        System.out.println(address.getStreet()+" :: "+ userSalary.getAmount());
    }
}
