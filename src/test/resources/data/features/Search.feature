Feature: Google Search

  Scenario Outline: I want to search on google 1
    Given I am on the google site
    When I enter "<keyword>" as keyword
    And I click on the search button
    Then I should see at least <resultsCount> results

    Examples:
      | keyword  | resultsCount |
      | selenium | 2            |
      | java     | 3            |
      | Spring   | 7            |


  Scenario Outline: I want to search on google 2
    Given I am on the google site
    When I enter "<keyword>" as keyword
    And I click on the search button
    Then I should see at least <resultsCount> results

    Examples:
      | keyword | resultsCount |
      | NewJ1   | 2            |
      | NewJ13  | 3            |
      | NewJ144 | 7            |