package banking.cucumber_framework;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(
		features= {"src/test/java/features"},
		glue = {"stepdefinitions"},
		dryRun= false,
		monochrome = true,
		tags = {"@invalid"},
		plugin = {"pretty", "html:target/report"}
)
@RunWith(Cucumber.class)
public class TestRunner {
	/*
	 * oring: tags = {"@tag1,@tag2"} OR in lates version of cucumber
	 * tags= {"@tag1 or @tag2"}
	 * it will execute scenario which have either tag1 or tag2
	 *
	 * anding: tags = {"@tag1", "@tag2"}
	 * it will execute scenarios which have both tag1 and tag2
	 * 
	 */
}
