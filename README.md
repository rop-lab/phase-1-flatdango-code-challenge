## Flatdango code challenge

## Features
# Movie List:
The application displays a list of movies on the left side. Clicking on a movie title fetches and displays its details.

# Movie Details:
 When a movie title is clicked, the details of the selected movie are shown on the right side, including the movie title, poster, description, runtime, showtime, and available tickets.

# Buy Tickets:
 Simulate buying tickets for a movie. If available tickets are present, clicking the "Buy Ticket" button decreases the available tickets count and shows a success message. If no tickets are available, a sold-out message is displayed.

## Code Overview
The main functionality of the application is implemented in index.js. Here's a brief overview:

# Data Fetching:
 The fetchMovies function fetches a list of movies from a server using a public API.

# Display Movie List: 
The displayMovieList function populates the movie list on the left side, adding click events to each movie item to fetch and display its details.

# Fetch Movie Details: 
The fetchMovieDetails function fetches specific details for a selected movie.

# Display Movie Details: 
The displayMovieDetails function dynamically updates the HTML to display detailed information about the selected movie.

# Buy Tickets:
 The buyTicket function simulates the ticket-buying process, updating the available tickets count and showing a success or sold-out message.

## Libraries and APIs
The application uses the Fetch API to interact with a public movie data API (`http://localhost:3000/films`).