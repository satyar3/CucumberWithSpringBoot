package com.qa.spring.springselenium.annotations;


import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Lazy
@Component
@Scope("prototype")

@Documented
@Target({ElementType.TYPE}) //-> Going to be used in class
@Retention(RetentionPolicy.RUNTIME)
public @interface Page {
}
