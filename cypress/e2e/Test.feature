Feature: Tests Features

	@clear @focus
	Scenario: List all projects to extract tests succesfully
		Given I login as a user succesfully
		Then I should see "Proyectos de interés"

	@clear @focus
	Scenario: See projects tests
		Given I login as a user succesfully
        When I click on first project from user
		When I should see "Pruebas programadas"
