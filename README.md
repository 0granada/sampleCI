
# Sample CI Project

## Goals
- Read and understand current features implemented.
- Refactor the code if is possible.
- Implement the next feature:
```gherkin
Scenario: Search for "localhost:3000"
    Given I have visited "http://localhost:3000"
    When I write the name "Anne"
        And description "Yet another worman..."
        And press the "add" button
    Then I see a new card with border-radius equals to "3px"
        And I see "lightgray" as background color.
```



