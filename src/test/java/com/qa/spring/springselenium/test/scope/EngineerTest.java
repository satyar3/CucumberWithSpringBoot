package com.qa.spring.springselenium.test.scope;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.Test;

@SpringBootTest
public class EngineerTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private JuniorEngineer junior;

    @Autowired
    private SeniorEngineer senior;

    @Test
    public void scopeTest(){
        this.junior.setAmount(100);
        System.out.println(this.junior.getSalary().getAmount());

        this.senior.setAmount(200);
        System.out.println(this.senior.getSalary().getAmount());

        System.out.println(this.junior.getSalary().getAmount());
    }
}
