let currentPage = 1;
let isSearching = false;
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '2145839607d0b6dc4655536002039922';

const loadingIndicator = document.getElementById('loading');
const errorMessage = document.getElementById('error');

// Function to render movie cards
function renderMovies(movies) {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.style.backgroundImage = `url(${movie.poster_path})`;

         // movieCard.innerHTML = `
    //   <div class="movie-info">
    //     <h2 class="movie-title">${movie.original_title}</h2>
    //     <p class="runtime">Duration: ${movie.duration}</p>
    //     <p class="genre">Genre: ${movie.genre}</p>
    //     <p class="ratings">Ratings: ${movie.ratings}</p>
    //     <p class="year">Year: ${movie.year}</p>
    //   </div>
    // `;
    
        container.appendChild(movieCard);

    });
}

// Function to search for movies based on the input query
async function searchMovies(query, page = 1) {
    isSearching = true;
    currentPage = page;
    showLoading();

    try {
        const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${currentPage}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.results.length === 0) {
            alert('No movies found for the search query.');
            hideLoading();
            return;
        }

        const searchResults = data.results.map(movie => ({
            original_title: movie.title,
            year: new Date(movie.release_date).getFullYear(),
            ratings: movie.vote_average + '/10',
            genre: movie.genre_ids.join(', '),
            duration: 'N/A',
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path || '../assets/default.jpg'}`
        }));

        renderMovies(searchResults);
    } catch (error) {
        showError('Failed to load movies. Please try again.');
        console.error('Error searching for movies:', error);
    } finally {
        hideLoading();
    }
}

// Show loading indicator
function showLoading() {
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none'; // Hide error message
}

// Hide loading indicator
function hideLoading() {
    loadingIndicator.style.display = 'none';
}

// Show error message
function showError(message) {
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

// Event listener for the search button
document.querySelector('.hero-search-button').addEventListener('click', () => {
    const query = document.querySelector('.hero-search-bar').value;

    if (query.trim() === '') {
        alert('Please enter a search term.');
        return;
    }

    searchMovies(query); // Start search with the first page of results
});

// Function to fetch popular movies with pagination
async function fetchPopularMovies() {
    showLoading();

    try {
        const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const apiMovies = data.results.map(movie => ({
            original_title: movie.title,
            year: new Date(movie.release_date).getFullYear(),
            ratings: movie.vote_average + '/10',
            genre: movie.genre_ids.join(', '),
            duration: 'N/A',
            poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default_image_url_here'
        }));

        renderMovies(apiMovies);
    } catch (error) {
        showError('Failed to load popular movies. Please try again.');
        console.error('Error fetching movies:', error);
    } finally {
        hideLoading();
    }
}

// Pagination event listeners
document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;

        if (isSearching) {
            const query = document.querySelector('.hero-search-bar').value;
            searchMovies(query, currentPage); // Pass current page
        } else {
            fetchPopularMovies();
        }
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    currentPage++;

    if (isSearching) {
        const query = document.querySelector('.hero-search-bar').value;
        searchMovies(query, currentPage); // Pass current page
    } else {
        fetchPopularMovies();
    }
});

// Fetch popular movies and render on page load
fetchPopularMovies();
