const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '2145839607d0b6dc4655536002039922';

// Function to get movie ID from the URL
function getMovieId() {
     const id = localStorage.getItem("movieId")
     return id
}

// Fetch and display movie details based on the ID
async function fetchAndDisplayMovieDetails() {
    const movieId = getMovieId();

    if (!movieId) {
        console.error('Movie ID not found');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
        const data = await response.json();
        console.log(data);
        

        const movieData = {
            title: data.title,
            overview: data.overview,
            release_date: data.release_date,
            runtime: data.runtime,
            genres: data.genres.map(genre => genre.name),
            poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            backdrop_path: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
        };

        // Populate the HTML with the movie details
        document.getElementById('hero-section').style.backgroundImage = `url(${movieData.backdrop_path})`
        document.getElementById('display-title').textContent = movieData.title || 'Title not available';
        document.getElementById('hero-title').textContent = movieData.title || 'Title not available';
        document.getElementById('display-title').textContent = movieData.title || 'Title not available';
        document.getElementById('hero-overview').textContent = movieData.overview || 'No overview available.';
        document.getElementById('display-overview').textContent = movieData.overview || 'No overview available.';
        document.getElementById('poster-img').src = movieData.poster_path || 'default-poster.jpg';
        document.getElementById('release-date').textContent = `Release Date: ${movieData.release_date || 'N/A'}`;
        document.getElementById('runtime').textContent = `Runtime: ${movieData.runtime ? movieData.runtime + ' minutes' : 'N/A'}`;
        document.getElementById('genre').textContent = `Genre: ${movieData.genres.length > 0 ? movieData.genres.join(', ') : 'N/A'}`;
        document.getElementById('backdrop-img').src = movieData.backdrop_path || 'default-backdrop.jpg';
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Load movie details when the page loads
window.addEventListener('load', fetchAndDisplayMovieDetails);


// Event listener for the back button
document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
});
