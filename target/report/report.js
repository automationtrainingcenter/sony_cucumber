$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/branchCreate.feature");
formatter.feature({
  "name": "branch creation with valid and invalid data",
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
formatter.step({
  "name": "admin do login with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_do_login_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click on branches button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_branches_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin click on new branch button",
  "keyword": "And "
});
formatter.match({
  "location": "BranchCreationSteps.admin_click_on_new_branch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "branch creation with invalid branch name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "admin enters invalid branchName then admin can see an error message",
  "rows": [
    {
      "cells": [
        "brName"
      ]
    },
    {
      "cells": [
        "branch@"
      ]
    },
    {
      "cells": [
        "branch*"
      ]
    },
    {
      "cells": [
        "branch\u0026"
      ]
    },
    {
      "cells": [
        "branch!"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "BranchCreationSteps.admin_enters_invalid_branchName_then_admin_can_see_an_error_message(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});