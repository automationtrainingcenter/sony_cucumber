package stepdefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.PageFactory;

import banking.cucumber_framework.AdminHomePage;
import banking.cucumber_framework.BankHomePage;
import banking.cucumber_framework.BranchCreationPage;
import banking.cucumber_framework.BranchDetailsPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import utilities.BrowserHelper;

public class BranchCreationSteps extends BrowserHelper {

	private BranchDetailsPage branchDetailsPage;
	private BranchCreationPage branchCreationPage;
	private Alert alert;
	private String alertText;

	@Given("admin do login with valid credentials")
	public void admin_do_login_with_valid_credentials() {
		BankHomePage bankHomePage = new BankHomePage(driver);
		bankHomePage.fillUserName("Admin");
		bankHomePage.fillPassword("Admin");
		bankHomePage.clickLogin();
		sleep(3000);
	}

	@Given("admin click on branches button")
	public void admin_click_on_branches_button() {
		AdminHomePage adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		branchDetailsPage = adminHomePage.clickBranches();
	}

	@Given("admin click on new branch button")
	public void admin_click_on_new_branch_button() {
		branchCreationPage = branchDetailsPage.clickNewBranch();
	}

	@When("admin enters valid branchName as {string}")
	public void admin_enters_valid_branchName_as(String string) {
		branchCreationPage.fillBranchName(string);
	}

	@When("admin enters valid address as {string}")
	public void admin_enters_valid_address_as(String string) {
		branchCreationPage.fillAddress1(string);
	}

	@When("admin enters valid zipcode as {string}")
	public void admin_enters_valid_zipcode_as(String string) {
		branchCreationPage.fillZipcode(string);
	}

	@When("admin selects country as {string}")
	public void admin_selects_country_as(String string) {
		branchCreationPage.selectCountry(string);
	}

	@When("admin selects state as {string}")
	public void admin_selects_state_as(String string) {
		branchCreationPage.selectState(string);
	}

	@When("admin selects city as {string}")
	public void admin_selects_city_as(String city) {
		branchCreationPage.selectCity(city);
	}

	@When("admin click on submit button")
	public void admin_click_on_submit_button() {
		alert = branchCreationPage.clickSubmit();
		alertText = alert.getText().toLowerCase();
		alert.accept();
	}

	@Then("admin can see a message saying branch created successfully with some id")
	public void admin_can_see_a_message_saying_branch_created_successfully_with_some_id() {
		Assert.assertTrue(alertText.contains("new branch with id"));
	}

	@When("admin enters invalid branchName then admin can see an error message")
	public void admin_enters_invalid_branchName_then_admin_can_see_an_error_message(DataTable dataTable) {
		List<Map<String, String>> asMaps = dataTable.asMaps();
		for (Map<String, String> row : asMaps) {
			branchCreationPage.fillBranchName(row.get("brName"));
			Alert alert = driver.switchTo().alert();
			String text = alert.getText();
			alert.accept();
			branchCreationPage.clickReset();
			Assert.assertTrue(text.contains("This field accepts"));
			
		}
	}

}
