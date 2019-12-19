$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/branchCreate.feature");
formatter.feature({
  "name": "branch creation with valid and invalid data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@branch"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "admin is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.admin_is_in_bank_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_branches_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_new_branch_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "branch creation with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "admin enters valid branchName as \"newGoaBranch\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.admin_enters_valid_branchName_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin enters valid address as \"goa beach\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_enters_valid_address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin enters valid zipcode as \"54321\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_enters_valid_zipcode_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin selects country as \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_selects_country_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin selects state as \"GOA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_selects_state_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin selects city as \"GOA\"",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_selects_city_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin can see a message saying branch created successfully with some id",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.admin_can_see_a_message_saying_branch_created_successfully_with_some_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "admin is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.admin_is_in_bank_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_branches_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_new_branch_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "branch creation reset with valid data from json file",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@branch"
    },
    {
      "name": "@dd"
    },
    {
      "name": "@json"
    }
  ]
});
formatter.step({
  "name": "admin clicks reset button after filling branch creation form by takin data from \"branchdata.json\"",
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.admin_clicks_reset_button_after_filling_branch_creation_form_by_takin_data_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin can see an empty form",
  "keyword": "Then "
});
formatter.match({
  "location": "BranchCreationSteps.admin_can_see_an_empty_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "As a admin I want to do login so that I can see welcome to admin with logout link",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "admin is in bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.admin_is_in_bank_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "admin enters valid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "admin can see welcome to admin message with logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_can_see_welcome_to_admin_message_with_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});