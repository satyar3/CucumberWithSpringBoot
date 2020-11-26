package com.qa.spring.springselenium.config;

import com.qa.spring.springselenium.basics.car.Accord;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CarConfig {

    @Bean
    @ConditionalOnMissingBean
    public Accord getDefaultCarImpl(){
        return new Accord();
    }
}
