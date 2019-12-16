$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "As a admin I want to do login so that I can see welcome to admin with logout link",
  "description": "",
  "keyword": "Feature"
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
  "status": "passed"
});
formatter.scenario({
  "name": "login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin enters valid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin can see welcome to admin message with logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_can_see_welcome_to_admin_message_with_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.scenario({
  "name": "login with invalid username",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin enters invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.admin_enters_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enters valid password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin can see an error message saying invalid banker name or password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_can_see_an_error_message_saying_invalid_banker_name_or_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.scenario({
  "name": "login with invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin enters valid username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.admin_enters_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin enters invalid password",
  "keyword": "But "
});
formatter.match({
  "location": "LoginSteps.admin_enters_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.admin_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin can see an error message saying invalid banker name or password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_can_see_an_error_message_saying_invalid_banker_name_or_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "status": "passed"
});
formatter.scenario({
  "name": "login with blank data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.admin_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin can see an error message saying please fill  username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.admin_can_see_an_error_message_saying_please_fill_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});