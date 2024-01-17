// Event listener for DOMContentLoaded, triggers the initial data fetch
document.addEventListener('DOMContentLoaded', function () {
    fetchMovies();
});

// Function to fetch the list of movies from the server
function fetchMovies() {
    fetch('http://localhost:3000/films')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to fetch movies (status ${response.status})`);
            }
            return response.json();
        })
        .then((data) => {
            displayMovieList(data)}) // Display the list of movies
        .catch(error => console.error('Error fetching movies:', error));
}

// Function to display the list of movies on the left
function displayMovieList(movies) {
    const movieListElement = document.getElementById('films');

    // Clear existing content
    movieListElement.innerHTML = '';

    // Populate the movie list
    movies.forEach((movie) => {
        const movieItem = document.createElement('li');
        movieItem.classList.add('movie-item');
        movieItem.textContent = movie.title;

        // Add click event to show movie details
        movieItem.addEventListener('click', () => {fetchMovieDetails(movie.title)});

        movieListElement.appendChild(movieItem);
    });

    // Display details of the first movie by default
    if (movies.length > 0) {
        fetchMovieDetails(movies[0].id);
    }
}

// Function to fetch details of a specific movie
function fetchMovieDetails(movieId) {
    fetch(`http://localhost:3000/films/${movieId}`)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to fetch movie details (status ${response.status})`);
            }
            return response.json();
        })
        .then(data => displayMovieDetails(data)) // Display the details of the movie
        .catch(error => console.error('Error fetching movie details:', error));
}

// Function to display the details of a movie in the #movie-details section
function displayMovieDetails(movie) {
    const movieDetailsElement = document.getElementById('movie-details');
    const availableTicketsElement = document.getElementById('available-tickets');

    // Display movie details using template literals
    movieDetailsElement.innerHTML = `
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title} Poster">
            <p>${movie.description}</p>
            <p>Runtime: ${movie.runtime} minutes</p>
            <p>Showtime: ${movie.showtime}</p>
            <p id="available-tickets">Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
            <button class="buy-ticket-btn" onclick="buyTicket('${movie.id}')">Buy Ticket</button>
        </div>
    `;

    // Update the available tickets display
    availableTicketsElement.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
}

// Function to simulate buying a ticket (no persistence needed)
function buyTicket(movieId) {
    const availableTicketsElement = document.getElementById('available-tickets');

    // Extract available tickets from the text
    const availableTickets = parseInt(availableTicketsElement.textContent.split(': ')[1]);

    // confirmif there are available tickets
    if (availableTickets > 0) {
        // Decrease available tickets on the frontend
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets - 1}`;
        alert('Ticket purchased successfully!');
    } else {
        alert('Sorry, this showing is sold out.');
    }
}
