



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

// Sample movie data
const movieData = {
    original_title: "Legend of the Seeker",
    overview: "This is an overview of legend of the seeker, curated for endless inspiration and suggestions.",
    release_date: "October 15, 1999",
    runtime: "2h 19min",
    genre: "Sci-Fi, Action",
    cast: [
        "Paul Carafotes", "George Maguire", "Bennie E. Moore", "Valerie Bickford", "Michael Girardin",
        "Ezra Buzzington", "Evan Mirand", "Mark Fite", "Brad Pitt", "Edward Norton", "Helena Bonham Carter"
    ],
    poster_path: "../assets/bionic.jpg",  // Poster path
    backdrop_path: "../assets/bionic.jpg"  // Backdrop path
};

// Call the function to render the movie details
renderMovieDetails(movieData);
