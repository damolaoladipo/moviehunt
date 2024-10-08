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
      original_title: 'Code 8: Part II',
      year: '2024',
      ratings: '6.2/10',
      genre: 'Sci-Fi, Action, Crime',
      duration: '1h 45m',
      poster_path: '../assets/code8.jpg'
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
  {
      original_title: 'Rebel Ridge',
      year: '2024',
      ratings: '7.9/10',
      genre: 'Action, Thriller',
      duration: '1h 50m',
      poster_path: '../assets/rebel-ridge.jpg'
  },
  {
      original_title: 'The Adam Project',
      year: '2022',
      ratings: '6.7/10',
      genre: 'Sci-Fi, Adventure, Comedy',
      duration: '1h 46m',
      poster_path: '../assets/theadamproject.jpg'
  },
  {
      original_title: 'Project Power',
      year: '2020',
      ratings: '6.0/10',
      genre: 'Sci-Fi, Action, Thriller',
      duration: '1h 53m',
      poster_path: '../assets/projectpower.jpg'
  },
  {
      original_title: 'The Midnight Sky',
      year: '2020',
      ratings: '5.6/10',
      genre: 'Sci-Fi, Drama',
      duration: '1h 58m',
      poster_path: '../assets/themidnightsky.jpg'
  },
  {
      original_title: 'I Am Mother',
      year: '2019',
      ratings: '6.7/10',
      genre: 'Sci-Fi, Thriller',
      duration: '1h 53m',
      poster_path: '../assets/iammother.jpg'
  },
  {
      original_title: 'Black Mirror: Bandersnatch',
      year: '2018',
      ratings: '7.1/10',
      genre: 'Sci-Fi, Drama',
      duration: '1h 30m',
      poster_path: '../assets/bandersnatch.jpg'
  },
  {
      original_title: 'Another Life',
      year: '2019',
      ratings: '5.2/10',
      genre: 'Sci-Fi, Drama, Mystery',
      duration: '1h 42m',
      poster_path: '../assets/anotherlife.jpg'
  }
];

// Function to render movie cards
function renderMovies(movies) {
  const container = document.getElementById('movies-container');
  container.innerHTML = ''; 

  movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.style.backgroundImage = `url(${movie.poster_path})`;

      movieCard.innerHTML = `
          <div class="movie-info">
              <h2 class="movie-title">${movie.original_title}</h2>
              <p class="genre">Genre: ${movie.genre}</p>
          </div>
      `;

      container.appendChild(movieCard);
  });
}

renderMovies(movieData);