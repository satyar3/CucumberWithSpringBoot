package com.qa.spring.springselenium.test.basics;

import com.qa.spring.springselenium.basics.car.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.testng.annotations.Test;

public class CarRunner extends SpringBasicTestNGTest {

    @Autowired
    @Qualifier("Civic")
    private Car car;

    @Test
    public void runCar(){
        this.car.run();
    }
}
