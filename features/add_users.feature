Feature: Add users

  As a user
  I want to add a new user
  So I can have a list of users

  Scenario: Search for "localhost:3000"
    Given I have visited "http://localhost:3000"
    When I write the name "Anne"
        And description "Yet another worman..."
        And press the "add" button 
    Then I see a new card with the name "Anne" and description "Yet another worman...".

  @watch
  Scenario: Search for "localhost:3000"
    Given I have visited "http://localhost:3000"
    When I write the name "Anne"
        And description "Yet another worman..."
        And press the "add" button 
    Then I see a new card with "rgb(128, 128, 128)" as its border color.