$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:data/features/Search.feature");
formatter.feature({
  "name": "Google Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003ckeyword\u003e\" as keyword",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see at least \u003cresultsCount\u003e results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "resultsCount"
      ]
    },
    {
      "cells": [
        "selenium",
        "2"
      ]
    },
    {
      "cells": [
        "java",
        "3"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    },
    {
      "cells": [
        "Spring",
        "7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"selenium\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 2 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"java\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 3 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Spring\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003ckeyword\u003e\" as keyword",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see at least \u003cresultsCount\u003e results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "resultsCount"
      ]
    },
    {
      "cells": [
        "NewJ1",
        "2"
      ]
    },
    {
      "cells": [
        "NewJ13",
        "3"
      ]
    },
    {
      "cells": [
        "NewJ144",
        "7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"NewJ1\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 2 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"NewJ13\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 3 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to search on google",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the google site",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.launchWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"NewJ144\" as keyword",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.enterKeyword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I should see at least 7 results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.spring.springselenium.test.cucumber.stepdefs.GoogleStepDefs.verifyResult(int)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
});