const movieData = [
  {
      title: 'Abyss',
      year: '2024',
      ratings: '8.2/10',
      genre: 'Sci-Fi, Action',
      duration: '1h 40m',
      poster: 'https://via.placeholder.com/300x450'
  },
  {
      title: 'Bionic',
      year: '2024',
      ratings: '8.9/10',
      genre: 'Sci-Fi, Thriller',
      duration: '2h 25m',
      poster: 'https://via.placeholder.com/300x450'
  },
  {
      title: 'Code 8: Part II',
      year: '2024',
      ratings: '6.2/10',
      genre: 'Sci-Fi, Action, Crime',
      duration: '1h 45m',
      poster: 'https://via.placeholder.com/300x450'
  },
  {
      title: 'Rebel Moon',
      year: '2024',
      ratings: '7.3/10',
      genre: 'Sci-Fi, Fantasy, Action',
      duration: '2h 10m',
      poster: 'https://via.placeholder.com/300x450'
  },
  {
      title: 'Uglies',
      year: '2024',
      ratings: '6.6/10',
      genre: 'Sci-Fi, Adventure',
      duration: '1h 55m',
      poster: 'https://via.placeholder.com/300x450'
  },
  {
      title: 'Rebel Ridge',
      year: '2024',
      ratings: '7.9/10',
      genre: 'Action, Thriller',
      duration: '1h 50m',
      poster: 'https://via.placeholder.com/300x450'
  }
];

// Function to render movie cards
function renderMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = ''; 

  movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.style.backgroundImage = `url(${movie.poster})`;

      movieCard.innerHTML = `
          <div class="movie-info">
              <h2 class="movie-title">${movie.title}</h2>
              <p class="release-year">Release Year: ${movie.year}</p>
              <p class="genre">Genre: ${movie.genre}</p>
              <p class="ratings">Ratings: ${movie.ratings}</p>
              <p class="duration">Duration: ${movie.duration}</p>
          </div>
      `;

      container.appendChild(movieCard);
  });
}

renderMovies(movieData);
