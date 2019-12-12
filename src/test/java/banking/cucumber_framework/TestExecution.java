package banking.cucumber_framework;

import org.openqa.selenium.Alert;
import org.openqa.selenium.support.PageFactory;

import utilities.BrowserHelper;

public class TestExecution extends BrowserHelper {
	AdminHomePage adminHomePage;
	private BranchDetailsPage branchDetailsPage;
	private BranchCreationPage branchCreationPage;

	// launch browser
	public void launchBrowser() {
		openBrowser("chrome", "http://primusbank.qedgetech.com/");
	}

	// login
	public void logintest() {
		BankHomePage bankHomePage = new BankHomePage(driver);
		bankHomePage.fillUserName("Admin");
		bankHomePage.fillPassword("Admin");
		bankHomePage.clickLogin();
		sleep(3000);
	}

	// branch creation with valid data
	public void branchCreationWithValidData() {
		adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		branchDetailsPage = adminHomePage.clickBranches();
		branchCreationPage = branchDetailsPage.clickNewBranch();
		branchCreationPage.fillBranchName("anynewbranchname");
		branchCreationPage.fillAddress1("some new address");
		branchCreationPage.fillZipcode("12345");
		branchCreationPage.selectCountry("UK");
		branchCreationPage.selectState("England");
		branchCreationPage.selectCity("LONDON");
		sleep(3000);
		Alert alert = branchCreationPage.clickSubmit();
		System.out.println("alert is " + alert.getText());
		sleep(3000);
		alert.accept();
		sleep(3000);

	}

	// branch creation reset
	public void branchCreationReset() {
		adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		branchDetailsPage = adminHomePage.clickBranches();
		branchCreationPage = branchDetailsPage.clickNewBranch();
		branchCreationPage.fillBranchName("anynewbranchname");
		branchCreationPage.fillAddress1("some new address");
		branchCreationPage.fillZipcode("12345");
		branchCreationPage.selectCountry("UK");
		branchCreationPage.selectState("England");
		branchCreationPage.selectCity("LONDON");
		sleep(3000);
		branchCreationPage = branchCreationPage.clickReset();
		sleep(3000);
	}

	// branch creation cancel
	public void branchCreationCancel() {
		adminHomePage = PageFactory.initElements(driver, AdminHomePage.class);
		branchDetailsPage = adminHomePage.clickBranches();
		branchCreationPage = branchDetailsPage.clickNewBranch();
		sleep(3000);
		branchDetailsPage = branchCreationPage.clickCancel();
		sleep(3000);
	}

	public static void main(String[] args) {
		TestExecution obj = new TestExecution();
		obj.launchBrowser();
		obj.logintest();
		obj.branchCreationWithValidData();
		obj.branchCreationReset();
		obj.branchCreationCancel();
		obj.closeBrowser();
	}

}
