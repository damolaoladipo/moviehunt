const movieData = [
  {
      title: 'Abyss',
      year: '2024',
      ratings: '8.2/10',
      genre: 'Sci-Fi, Action',
      duration: '1h 40m',
      poster: '../assets/abyss.jpg'
  },
  {
      title: 'Bionic',
      year: '2024',
      ratings: '8.9/10',
      genre: 'Sci-Fi, Thriller',
      duration: '2h 25m',
      poster: '../assets/bionic.jpg'
  },
  {
      title: 'Code 8: Part II',
      year: '2024',
      ratings: '6.2/10',
      genre: 'Sci-Fi, Action, Crime',
      duration: '1h 45m',
      poster: '../assets/code8.jpg'
  },
  {
      title: 'Rebel Moon',
      year: '2024',
      ratings: '7.3/10',
      genre: 'Sci-Fi, Fantasy, Action',
      duration: '2h 10m',
      poster: '../assets/rebel-moon.jpg'
  },
  {
      title: 'Uglies',
      year: '2024',
      ratings: '6.6/10',
      genre: 'Sci-Fi, Adventure',
      duration: '1h 55m',
      poster: '../assets/uglies.jpg'
  },
  {
      title: 'Rebel Ridge',
      year: '2024',
      ratings: '7.9/10',
      genre: 'Action, Thriller',
      duration: '1h 50m',
      poster: '../assets/rebel-ridge.jpg'
  },
  {
      title: 'The Adam Project',
      year: '2022',
      ratings: '6.7/10',
      genre: 'Sci-Fi, Adventure, Comedy',
      duration: '1h 46m',
      poster: '../assets/theadamproject.jpg'
  },
  {
      title: 'Project Power',
      year: '2020',
      ratings: '6.0/10',
      genre: 'Sci-Fi, Action, Thriller',
      duration: '1h 53m',
      poster: '../assets/projectpower.jpg'
  },
  {
      title: 'The Midnight Sky',
      year: '2020',
      ratings: '5.6/10',
      genre: 'Sci-Fi, Drama',
      duration: '1h 58m',
      poster: '../assets/themidnightsky.jpg'
  },
  {
      title: 'I Am Mother',
      year: '2019',
      ratings: '6.7/10',
      genre: 'Sci-Fi, Thriller',
      duration: '1h 53m',
      poster: '../assets/iammother.jpg'
  },
  {
      title: 'Black Mirror: Bandersnatch',
      year: '2018',
      ratings: '7.1/10',
      genre: 'Sci-Fi, Drama',
      duration: '1h 30m',
      poster: '../assets/bandersnatch.jpg'
  },
  {
      title: 'Another Life',
      year: '2019',
      ratings: '5.2/10',
      genre: 'Sci-Fi, Drama, Mystery',
      duration: '1h 42m',
      poster: '../assets/anotherlife.jpg'
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
gitt