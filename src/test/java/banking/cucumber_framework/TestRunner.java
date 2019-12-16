package banking.cucumber_framework;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
		features= {"src/test/java/features"},
		glue = {"stepdefinitions"},
		dryRun= false,
		monochrome = true,
		plugin = {"pretty", "html:target/report"}
)
@RunWith(Cucumber.class)
public class TestRunner {

}
