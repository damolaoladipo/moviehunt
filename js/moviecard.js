const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '2145839607d0b6dc4655536002039922';

// Local movie data (as you've provided)
const movieData = [
  {
    original_title: 'Abyss',
    year: '2024',
    ratings: '8.2/10',
    genre: 'Sci-Fi, Action',
    duration: '1h 40m',
    poster_path: '../assets/abyss.jpg'
  },
  {
    original_title: 'Bionic',
    year: '2024',
    ratings: '8.9/10',
    genre: 'Sci-Fi, Thriller',
    duration: '2h 25m',
    poster_path: '../assets/bionic.jpg'
  },
  {
    original_title: 'Rebel Moon',
    year: '2024',
    ratings: '7.3/10',
    genre: 'Sci-Fi, Fantasy, Action',
    duration: '2h 10m',
    poster_path: '../assets/rebel-moon.jpg'
},
{
    original_title: 'Uglies',
    year: '2024',
    ratings: '6.6/10',
    genre: 'Sci-Fi, Adventure',
    duration: '1h 55m',
    poster_path: '../assets/uglies.jpg'
},
];

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
    //     <p class="genre">Genre: ${movie.genre}</p>
    //     <p class="ratings">Ratings: ${movie.ratings}</p>
    //   </div>
    // `;

    container.appendChild(movieCard);
  });
}

// Function to search for movies based on the input query
async function searchMovies(query) {
    try {
      const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`);
      const data = await response.json();
  
      if (data.results.length === 0) {
        alert('No movies found for the search query.');
        return;
      }
  
      // Map API data to your movie structure
      const searchResults = data.results.map(movie => ({
        original_title: movie.title,
        year: new Date(movie.release_date).getFullYear(),
        ratings: movie.vote_average + '/10',
        genre: movie.genre_ids.join(', '),  // You can map genre IDs to actual names using another API if needed
        duration: 'N/A',  // No runtime provided in this API response
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      }));
  
      renderMovies(searchResults); // Render the search results
  
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  }
  
  // Add event listener to search button
  document.querySelector('.hero-search-button').addEventListener('click', () => {
    const query = document.querySelector('.hero-search-bar').value;
  
    if (query.trim() === '') {
      alert('Please enter a search term.');
      return;
    }
  
    searchMovies(query);  // Perform the search
  });


// Function to fetch popular movies from TMDb API
async function fetchPopularMovies() {
  try {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();

    // Mapping the API response to the same structure as movieData
    const apiMovies = data.results.map(movie => ({
      original_title: movie.title,
      year: new Date(movie.release_date).getFullYear(),
      ratings: movie.vote_average + '/10',
      genre: movie.genre_ids.join(', '),  // You can convert genre IDs to names if needed
      duration: 'N/A',  // TMDb popular movies API doesn't return runtime
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));

    // Render both local and fetched movie data
    const combinedMovies = [...movieData, ...apiMovies];
    renderMovies(combinedMovies);

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}



// Fetch popular movies and render on page load
fetchPopularMovies();



