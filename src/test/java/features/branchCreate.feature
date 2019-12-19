@branch
Feature: branch creation with valid and invalid data

  Background: 
    Given admin is in bank home page
    And admin do login with valid credentials
    And admin click on branches button
    And admin click on new branch button

	@valid
  Scenario: branch creation with valid data
    When admin enters valid branchName as "newGoaBranch"
    And admin enters valid address as "goa beach"
    And admin enters valid zipcode as "54321"
    And admin selects country as "INDIA"
    And admin selects state as "GOA"
    And admin selects city as "GOA"
    And admin click on submit button
    Then admin can see a message saying branch created successfully with some id

	@outline @dd
  Scenario Outline: branch creation with multiple sets of data
    When admin enters valid branchName as "<brName>"
    And admin enters valid address as "<add>"
    And admin enters valid zipcode as "<zcode>"
    And admin selects country as "<country>"
    And admin selects state as "<state>"
    And admin selects city as "<city>"
    And admin click on submit button
    Then admin can see a message saying branch created successfully with some id

    Examples: 
      | brName      | add        | zcode | country | state | city |
      | newGoaOne   | beach road | 54321 | INDIA   | GOA   | GOA  |
      | newGoaTwo   | beach road | 54321 | INDIA   | GOA   | GOA  |
      | newGoaThree | beach road | 54321 | INDIA   | GOA   | GOA  |
      | newGoaFour  | beach road | 54321 | INDIA   | GOA   | GOA  |
      | newGoaFive  | beach road | 54321 | INDIA   | GOA   | GOA  |

	@dd @datatable
  Scenario: branch creation with invalid branch name
    When admin enters invalid branchName then admin can see an error message
      | brName  |
      | branch@ |
      | branch* |
      | branch& |
      | branch! |

	@dd @json
  Scenario: branch creation reset with valid data from json file
    When admin clicks reset button after filling branch creation form by takin data from "branchdata.json"
    Then admin can see an empty form
