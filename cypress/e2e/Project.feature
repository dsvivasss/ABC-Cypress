Feature: Project Features

	@clear @focus
	Scenario: List all projects succesfully
		Given I login succesfully
		Then I should see "Mis proyectos"

	@clear @focus
	Scenario: See project detail succesfully
		Given I login succesfully
		When I click on first project
		Then I should see "Listado de pruebas"

	@clear @focus
	Scenario: See candidate details succesfully
		Given I login succesfully
		When I click on first project
		And I click on first candidate
		Then I should see "Pruebas de selección"

	@clear @focus
	Scenario: Select candidate succesfully
		Given I login succesfully
		When I click on first project
		And I click on first candidate
		And I click on select
		Then I should see selected candidates

	@clear @focus
	Scenario: Create project succesfully
		Given I login succesfully
		When I click on create project
		And I fill project name with "Project name"
		And I fill project description with "Project description"
		And I click on create project button
		Then I should see "Project name"