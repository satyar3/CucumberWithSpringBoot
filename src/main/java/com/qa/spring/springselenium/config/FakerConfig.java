package com.qa.spring.springselenium.config;

import com.github.javafaker.Faker;
import com.qa.spring.springselenium.annotations.LazyConfig;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;

@LazyConfig
public class FakerConfig {

    @Bean
    public Faker getFaker(){
        return new Faker();
    }
}
