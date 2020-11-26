package com.qa.spring.springselenium;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class UserSalary {

    @Value("${SALARY_AMOUNT:500}")
    private int amount;

    public int getAmount() {
        return amount;
    }

    /*@Value("${SALARY_AMOUNT:500}")
    public void setAmount(int amount) {
        this.amount = amount;
    }*/
}
