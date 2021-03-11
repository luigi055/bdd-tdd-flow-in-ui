Feature: Navigation Bar

    As a user I want to have a navbar so I can see the cornerjob logo and navigation

    Scenario: The user can see the navigation bar
    Given I am on the get in touch page
    Then I can see the navigation bar with all its navigation

    Scenario: The user can be redirected to cornerjob
    Given I am on the get in touch page
    And I see the navigation bar
    Then I can see the logo pointing to "https://cornerjob.com"