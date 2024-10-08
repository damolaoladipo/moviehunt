// Function to render hero and display sections
function renderMovieDetails(movie) {
    // Render the Hero Section
    // document.getElementById('movie-id').textContent = movie.id
    document.getElementById('hero-title').textContent = movie.original_title;
    document.getElementById('hero-overview').textContent = movie.overview;
    document.getElementById('backdrop-img').src = movie.backdrop_path;

    // Render the Display Section
    document.getElementById('poster-img').src = movie.poster_path;
    document.getElementById('display-title').textContent = movie.original_title;
    document.getElementById('display-overview').textContent = movie.overview;
    document.getElementById('release-date').textContent = `Release Date: ${movie.release_date}`;
    document.getElementById('runtime').textContent = `Runtime: ${movie.runtime}`;
    document.getElementById('genre').textContent = `Genre: ${movie.genre}`;
    document.getElementById('cast').innerHTML = `Cast: ${movie.cast.join(', ')}`;
}

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = '2145839607d0b6dc4655536002039922'

// Fetch data from an API
async function fetchMovieDetails() {
    try {
        const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);  // Replace with your API URL
        const data = await response.json();

        // Example response structure
        const movieData = {
            title: data.title,
            overview: data.overview,
            release_date: data.release_date,
            runtime: data.runtime,
            genres: data.genres,
            cast: data.cast.slice(0, 5).map(actor => actor.name),  // Assuming 'cast' is an array in the API response
            poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,  // Image base path + poster path from API
            backdrop_path: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`  // Image base path + backdrop path
        };

        // Render the movie data
        renderMovieDetails(movieData);

    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

// Call the fetch function
fetchMovieDetails();

// Call the function to render the movie details
renderMovieDetails(movieData);
