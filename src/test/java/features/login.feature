Feature: As a admin I want to do login so that I can see welcome to admin with logout link

  Background: 
    Given admin is in bank home page

  Scenario: login with valid credentials
    When admin enters valid username
    And admin enters valid password
    And admin click on login button
    Then admin can see welcome to admin message with logout link

  Scenario: login with invalid username
    When admin enters invalid username
    And admin enters valid password
    And admin click on login button
    Then admin can see an error message saying invalid banker name or password

  Scenario: login with invalid password
    When admin enters valid username
    But admin enters invalid password
    And admin click on login button
    Then admin can see an error message saying invalid banker name or password

  Scenario: login with blank data
    When admin click on login button
    Then admin can see an error message saying please fill  username and password
