Feature: Auth Features

	@clear @focus
	Scenario: Sign up with empty fields
		Given I visit the signup page
		When I click on sign in as a user
		Then I should see a message in my field saying "Completa este campo"

	@clear @focus
	Scenario: Sign in with not registered email in Company
		Given I visit the login company page
		And I fill in company credentials with "invalidemail@gmail.com" and "nacional"
		When I click on log in as a company
		Then I should see a toast message

	@clear @focus
	Scenario: Sign in with wrond password in Company
		Given I visit the login company page
		And I fill in company credentials with "company2@correo.com" and "nacional2"
		When I click on log in as a company
		Then I should see a toast message

	@clear @focus
	Scenario: Sign in succesfully in Company
		Given I visit the login company page
		And I fill in company credentials with "company2@correo.com" and "nacional"
		When I click on log in as a company
		Then I should see a toast message


