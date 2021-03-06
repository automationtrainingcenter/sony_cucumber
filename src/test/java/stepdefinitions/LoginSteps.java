package stepdefinitions;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.Collections;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.PageFactory;

import com.google.common.io.Files;

import banking.cucumber_framework.AdminHomePage;
import banking.cucumber_framework.BankHomePage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utilities.BrowserHelper;
import utilities.ScreenshotHelper;

public class LoginSteps extends BrowserHelper{
	BankHomePage bankHomePage;
	@Given("admin is in bank home page")
	public void admin_is_in_bank_home_page() {
		openBrowser("chrome", "http://primusbank.qedgetech.com/home.aspx");
		bankHomePage = new BankHomePage(driver);
	}

	@When("admin enters valid username")
	public void admin_enters_valid_username() {
		bankHomePage.fillUserName("Admin");
	}

	@When("admin enters valid password")
	public void admin_enters_valid_password() {
		bankHomePage.fillPassword("Admin");
	}

	@When("admin click on login button")
	public void admin_click_on_login_button() {
		bankHomePage.clickLogin();
	}

	@Then("admin can see welcome to admin message with logout link")
	public void admin_can_see_welcome_to_admin_message_with_logout_link() {
		AdminHomePage adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		Assert.assertTrue(adminHomePage.isAdminHomePageDisplayed());
	}

	@When("admin enters invalid username")
	public void admin_enters_invalid_username() {
		bankHomePage.fillUserName("dfalsjfhalfk");
	}

	@Then("admin can see an error message saying invalid banker name or password")
	public void admin_can_see_an_error_message_saying_invalid_banker_name_or_password() {
		Alert alert = driver.switchTo().alert();
		String text = alert.getText().toLowerCase();
		alert.accept();
		Assert.assertTrue(text.contains("incorrectxyz"));
	}


	@When("admin enters invalid password")
	public void admin_enters_invalid_password() {
		bankHomePage.fillPassword("dklajfhakdf");
	}

	

	@Then("admin can see an error message saying please fill  username and password")
	public void admin_can_see_an_error_message_saying_please_fill_username_and_password() {
		Alert alert = driver.switchTo().alert();
		String text = alert.getText().toLowerCase();
		alert.accept();
		Assert.assertTrue(text.contains("please fill in the"));
	}
	
	
	@AfterStep
	public void afterStepEvent(Scenario scenario) {
		if(scenario.isFailed()) {
			// capture screenshot
//			String imgPath = ScreenshotHelper.captureScreenshot(driver, "screenshots", scenario.getName());
//			File file = new File(imgPath);
//			byte[] bytes = null;
//			try {
//				bytes = Files.toByteArray(file);
//				System.out.println("adding image "+file.getAbsolutePath()+" to the report");
//				scenario.embed(bytes, "image/png");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}		
			
			byte[] imgArr = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(imgArr, "image/png");
		}
	}
	
	@After
	public void teardown() {
		closeBrowser();
	}

}
