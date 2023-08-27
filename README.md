# MovieFlixAngular

This is a web application built with Angular that allows users to browse, search, and get detailed information about movies. The application also supports user registration and profile management. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7. 

[![HyzS7B2.md.jpg](https://iili.io/HyzS7B2.md.jpg)](https://freeimage.host/i/HyzS7B2)
[![HyzSRLl.md.jpg](https://iili.io/HyzSRLl.md.jpg)](https://freeimage.host/i/HyzSRLl)

[deployed version](https://kamilaut.github.io/MovieFlix-Angular/)

## Built With

- Angular
- TypeScript
- SCSS
  
## Getting Started

To get a local copy up and running follow these simple steps.
_Prerequisites_

- Node.js
- Angular CLI
## Setup

Clone the repository to your local machine.
```
git clone https://github.com/your_username_/MovieFlixAngularClient.git
```
### Prerequisites

- Node.js
- Angular CLI
  
## Install

Navigate to the project directory and install dependencies.
``` cd MovieFlixAngularClient ``` ``` npm install```

## Usage

Run the development server.
``` ng serve ```
Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## User flows
User Story 1: "As a user, I want to be able to receive information on movies, directors, and
genres so that I can learn more about movies I’ve watched or am interested in."
Assumptions:
- The user is new to the application and has not logged in yet.
- On the homepage of the program, there is a search box for finding movies, directors,
and genres.
- The frontend of the application is developed using Angular.

  
_User Flow 1: Search for a Movie_


- The user loads the homepage.
- User enters the name of a movie in the search bar.
- The user enters data by pressing Enter or the "Search" button.
- The app analyzes the search request and presents results for pertinent movies.
- A specific movie is selected by the user from the search results.
- The application navigates to the Movie Information Page.
- The application fetches and displays detailed information about the selected movie,
including title, release year, plot summary, cast, ratings, and runtime.
- Users can read and explore the information about the movie.

  
_User Flow 2: Explore Director Information_


- User loads the homepage.
- User clicks on the "Directors" tab on the navigation menu.
- The application displays a list of directors in alphabetical order.
- User chooses and clicks on a specific director from the list.
- The application navigates to the Director Information Page.
- The application fetches and displays details about the selected director, including their
name, bio, filmography, and other relevant information.
- Users can read and explore the information about the director.

  
_User Flow 3: Discover Movies by Genre_


- User loads the homepage.
- User clicks on the "Genres" tab on the navigation menu.
- The application displays a list of movie genres.
- User clicks on a specific genre from the list.
- The application navigates to the Genre Information Page.
- The application fetches and displays movies belonging to the selected genre.
-Users can go through the list of movies in the chosen genre and explore their details.


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!
