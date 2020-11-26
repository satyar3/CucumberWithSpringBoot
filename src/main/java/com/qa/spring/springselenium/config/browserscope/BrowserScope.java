package com.qa.spring.springselenium.config.browserscope;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.SessionId;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.context.support.SimpleThreadScope;

public class BrowserScope extends SimpleThreadScope {

    @Override
    public Object get(String name, ObjectFactory<?> objectFactory) {
        Object obj =  super.get(name, objectFactory);
        SessionId sessionID = ((RemoteWebDriver)obj).getSessionId();

        if(sessionID == null){
            super.remove(name);
            obj = super.get(name, objectFactory);
        }
        return obj;
    }

    @Override
    public void registerDestructionCallback(String name, Runnable callback) {
    }
}
