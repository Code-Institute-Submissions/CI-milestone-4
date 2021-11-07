# ToDo App

ToDo App is a categories based todo app that allows the user to organised the various tasklists into appropriate categories.

You can see the deployed version [here](https://fgryson.github.io/CI-milestone-2/).

## 1. UX

### 1.1. Project Goals

This Javascript application was designed to help a user keep track of their various tasks and track both their total progress but also their progress in each individual category. The categories and their todos are stored locally in the user's localStorage for them to access later, this removes the need for a backend database.

When a user initially opens the website they are greeted with a short tutorial of the application's feature in the for of an example category as well as three example todos. This show's the application's core features. The user can: Create categories to organise their tasklist, prioritise certain todos to make them more easily accessible, mark todos as complete to reflect their progress, and track that progress through the overall progress bar and individual category progress bars.

### 1.2. User Stories

- As a user, I want to create a shopping list.
- As a user, I want to see the progress of my tasks.
- As a user, I want to prioritise certain tasks.
- As a user, I want my progress automatically saved and restored.
- As a user, I want to categorise my tasklists to be more organised.
- As a user, I want to remove a task that's no longer relevant.
- As a user, I want to retitle a category I've created.
- As a user, I want a short summary of my categories and their prioritised tasks.

### 1.3. Design

- Colour scheme
  - A combination of Eastern Blue (#278ab0) and Mountain Meadow Green (#1dc690) was used to evoke a relaxing feeling as this app is about getting organised.
- Typography
  - Sans-serif font are prefered to create an uncluttered appearance.
- Reactive html
  - As this app depends on dynamically added element the HTML and CSS is structured to allow for lots of dynamic content.

### 1.4. Wireframes

Wireframes were made using Figma.

You can see them [here](readme-images/wireframes/).

## 2. Features

### 2.1. Existing features

- **Motivational quote**: Using an API call to a motivational quote API a random motivational quote is displayed in the header, when there is room to do so.
- **Category form**: This form not only allows a user to create a new category but also contains a summary of their categories and prioritised todos. The categories in this list act as links to that associated category.
- **Categories**: The user created categories contain their own list of todos and act as a way of compartmentalising particular tasks. The category title can also be updated or edited.
- **Progess bars**: The progress bars reflect the user's total progress and individual progress and update as new todos are added, completed, or removed.
- **Todos**: Todos are the core element of the application and are contained within categories. They are organised based on various factors.
- **Prioritisation**: Todos can be prioritised to organise them towards the top of their category, prioritising a todo also adds it to the category form's summary.
- **Todo completion**: Once a todo is completed it is placed at the bottom of it's category and it's completion is reflected in the appropriate progress bars.
- **localStorage**: The localStorage of the user's browser is used to maintain their collection of todos per device.

### 2.2. Features left to implement in the future

- With the inclusion of a backend the user could use the app across devices.
- Timed or dated todos could be included that use a notification to remind the user of their todos.

## 3. Technologies used

- [HTML5](https://en.wikipedia.org/wiki/HTML) - the structure of the data as represented in the app
- [CSS3](https://en.wikipedia.org/wiki/CSS) - the styling of the elements and responsiveness of the application
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) - the logic behind the application and it's dynamic content
- [JQuery](https://jquery.com/) - used to simplify event listeners and interact with dynamic content
- [Figma](https://www.figma.com/) - used to create the wireframes for the project
- [VSCode](https://code.visualstudio.com/) - IDE used to develop the application
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - used to locally host site during development for rapid testing
- [Github](https://github.com/) - used to host the code repository
- [Github Pages](https://pages.github.com/) - used to host the live version of the site
- [Google Fonts](https://fonts.google.com/) - provides Roboto font
- [favicon.io](https://favicon.io) - used to create the emoji favicon
- [Regex101](https://regex101.com/) - helped develop the filter that strips user input of html tags
- [AmIResponsive](http://ami.responsivedesign.is) - to display sites responsiveness

## 4. Testing

See more on testing methodology [here](TESTING.md).

## 5. Deployment

### To deploy the project

This project is hosted in GitHub Pages

1. Select **Settings** in nav below project name.
2. In the sidebar on the left select **Pages**.
3. Under **Source** select **Branch: master**.
4. The webpage is automatically refreshed with each push.
5. The link to the webpage is displayed in the green box above the **Source** dialog.

### To run the project locally

To clone this project from GitHub:

1. Open the **Code** dropdown which is below the project's navbar.
2. Select **HTTPS**.
3. Copy the repository **URL**.
4. Using your git client of choice **clone** the URL into your desired directory:
`$ git clone https://github.com/fgryson/CI-milestone-2.git desired-directory`

## 6. Credits

### 6.1. Content
All web content, except motivational quote, and code was developed by me. 

The [JQuery](https://jquery.com/) library was used to help with dynamic content.

The [Type.fit](https://type.fit/) motivational quote API was used to generate a random motivational quote.

The favicon was created using [favicon.io](https://favicon.io)'s Emoji favicons.

### 6.2. Acknowledgements

I would like to thank my Mentor Precious Ijege for his help and input, particularly with feature recommendations, as well as the Code Institute for their helpful resources.
