let currentPage = 1;

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '2145839607d0b6dc4655536002039922';

// const movieData = [
//   {
//     original_title: 'Abyss',
//     year: '2024',
//     ratings: '8.2/10',
//     genre: 'Sci-Fi, Action',
//     duration: '1h 40m',
//     poster_path: '../assets/abyss.jpg'
//   },
//   {
//     original_title: 'Bionic',
//     year: '2024',
//     ratings: '8.9/10',
//     genre: 'Sci-Fi, Thriller',
//     duration: '2h 25m',
//     poster_path: '../assets/bionic.jpg'
//   },
//   {
//     original_title: 'Rebel Moon',
//     year: '2024',
//     ratings: '7.3/10',
//     genre: 'Sci-Fi, Fantasy, Action',
//     duration: '2h 10m',
//     poster_path: '../assets/rebel-moon.jpg'
//   },
//   {
//     original_title: 'Uglies',
//     year: '2024',
//     ratings: '6.6/10',
//     genre: 'Sci-Fi, Adventure',
//     duration: '1h 55m',
//     poster_path: '../assets/uglies.jpg'
//   },
// ];

function renderMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = '';

  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.style.backgroundImage = `url(${movie.poster_path})`;

    container.appendChild(movieCard);
  });
}

async function searchMovies(query) {
  try {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`);
    const data = await response.json();

    if (data.results.length === 0) {
      alert('No movies found for the search query.');
      return;
    }

    const searchResults = data.results.map(movie => ({
      original_title: movie.title,
      year: new Date(movie.release_date).getFullYear(),
      ratings: movie.vote_average + '/10',
      genre: movie.genre_ids.join(', '),
      duration: 'N/A',
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }));

    renderMovies(searchResults);

  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

document.querySelector('.hero-search-button').addEventListener('click', () => {
  const query = document.querySelector('.hero-search-bar').value;

  if (query.trim() === '') {
    alert('Please enter a search term.');
    return;
  }

  searchMovies(query);
});

async function fetchPopularMovies() {
  try {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`);
    const data = await response.json();

    const apiMovies = data.results.map(movie => ({
      original_title: movie.title,
      year: new Date(movie.release_date).getFullYear(),
      ratings: movie.vote_average + '/10',
      genre: movie.genre_ids.join(', '),
      duration: 'N/A',
      poster_path: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default_image_url_here'
    }));

    const combinedMovies = [...movieData, ...apiMovies];
    renderMovies(apiMovies);

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

document.getElementById('prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPopularMovies();
  }
});

document.getElementById('next-page').addEventListener('click', () => {
  currentPage++;
  fetchPopularMovies();
});

fetchPopularMovies();