$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
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
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "login with invalid username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@invalid"
    }
  ]
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
formatter.afterstep({
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
formatter.afterstep({
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
formatter.afterstep({
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinitions.LoginSteps.admin_can_see_an_error_message_saying_invalid_banker_name_or_password(LoginSteps.java:66)\r\n\tat ✽.admin can see an error message saying invalid banker name or password(file:src/test/java/features/login.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.afterstep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "login with invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@invalid"
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
  "status": "passed"
});
formatter.afterstep({
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
formatter.afterstep({
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
formatter.afterstep({
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepdefinitions.LoginSteps.admin_can_see_an_error_message_saying_invalid_banker_name_or_password(LoginSteps.java:66)\r\n\tat ✽.admin can see an error message saying invalid banker name or password(file:src/test/java/features/login.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.afterstep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.scenario({
  "name": "login with blank data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@invalid"
    }
  ]
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
formatter.afterstep({
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
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});