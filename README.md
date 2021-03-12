# Get in Touch project

## User Storys

### User Story 1:

As a user I want to access the web page using the correct url so I can interact with the application

**Acceptance criteria:**

```
  Given I am on the get in touch page
  Then I can see the page title "Get in touch - cornerjob"
```

### User Story 2:

As a user I want to have a navbar so I can see the cornerjob logo and navigation

**Acceptance criteria:**

```
  Given I am on the get in touch page
  Then I can see the navigation bar with all its navigation

  Given I am on the get in touch page
  And I see the navigation bar
  Then I can see the logo pointing to "https://cornerjob.com"
```

### User Story 3:

As a user I want to have a footer so I can see the cornerjob copyright

**Acceptance criteria:**

```
  Given I am on the get in touch page
  Then I can see the footer with all its elements

  Given I am on the get in touch page
  Then I can see the footer with all its elements
  And I can see the copyright "Cornerjob © Copyright 2021"
```

### User Story 4:

As a user I want to the the page title and description so I can have more information about what is this page for

**Acceptance criteria:**

```
  Given I am on the get in touch page
  Then I can see the heading "Contact us form"
  And I can see the correct description
```

Full description:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### User Story 5:

As a user I want to have a form so I can contact with customer support

**Acceptance criteria:**

```
  Given I am on the get in touch page
  Then I can see the get in touch form
  And I can see the "firstName" field
  And I can see the "lastName" field
  And I can see the "email" field
  And I can see the send button
```

### User Story 6:

As a user I want to send the get in touch form so I can contact with customer support

**Acceptance criteria:**

```
  Given I am on the get in touch page
  And I see the get in touch form with all its elements
  When I fill the first name with at least one alphabetical or spaces characters up to 15
  And I fill the last name with at least one alphabetical or spaces characters up to 20
  And I fill the email with the valid email format up to 30 characters
  And I click on send button
  Then I can see the success page
```

### User Story 7:

As a user I want the fields shows its validations so I can see the mistakes I made

**Acceptance criteria:**

```
  Given I am on the get in touch page
  And I see the get in touch form with all its elements
  When I fill the first name with a non alphabetical characters or empty
  And I fill the last name with a non alphabetical characters or empty
  And I fill the email with the invalid email format
  And I click on send button
  Then I can see the first name field with an invalid message
  And I can see the last name field with an invalid message
  And I can see the the email  field with an invalid message
```

### User Story 8:

As a user I want to be redirected to a failure page when I send the form but the request failed so I can figure out the error was not about my information

**Acceptance criteria:**

```
  Given I am on the get in touch page
  And I see the get in touch form with all its elements
  When I fill all the fields with valid data
  But I Got an error after clicking on send button
  Then I can see the failure page
```

### User Story 9:

As a user I want to have a failure page so I can see the success message

**Acceptance criteria:**

```
  Given I am on the failure page
  Then I can see the failure page heading and description
  And I can see the navigation bar with all its navigation
  And I can see the footer with all its elements

  Given I am on the failure page
  When I click on get me back button
  Then I can see the get in touch page
```

### User Story 10:

As a user I want to have a success page so I can see the success message

**Acceptance criteria:**

```
  Given I am on the success page
  Then I can see the success page heading and description
  And I can see the navigation bar with all its navigation
  And I can see the footer with all its elements

  Given I am on the failure page
  When I click on get me back button
  Then I can see the get in touch page
```
