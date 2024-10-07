### 1. **Movie Endpoints**
These endpoints allow you to retrieve movie data like details, images, credits, and trailers.

- **Get Movie Details**: `/movie/{movie_id}`
  - Example:
    ```bash
    https://api.themoviedb.org/3/movie/550?api_key=YOUR_API_KEY
    ```
    This retrieves details for the movie with ID 550 (which is "Fight Club").

- **Get Movie Images**: `/movie/{movie_id}/images`
  - Example:
    ```bash
    https://api.themoviedb.org/3/movie/550/images?api_key=YOUR_API_KEY
    ```
    Retrieves posters, backdrops, and logos for the movie "Fight Club."

- **Get Popular Movies**: `/movie/popular`
  - Example:
    ```bash
    https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1
    ```
    Retrieves a list of popular movies.

- **Get Now Playing Movies**: `/movie/now_playing`
  - Example:
    ```bash
    https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=en-US&page=1
    ```
    Fetches movies currently playing in theaters.

### 2. **TV Show Endpoints**
These endpoints help retrieve details about TV shows.

- **Get TV Show Details**: `/tv/{tv_id}`
  - Example:
    ```bash
    https://api.themoviedb.org/3/tv/1399?api_key=YOUR_API_KEY
    ```
    This retrieves details for the TV show "Game of Thrones."

- **Get TV Show Images**: `/tv/{tv_id}/images`
  - Example:
    ```bash
    https://api.themoviedb.org/3/tv/1399/images?api_key=YOUR_API_KEY
    ```
    Fetches images for "Game of Thrones."

- **Get Popular TV Shows**: `/tv/popular`
  - Example:
    ```bash
    https://api.themoviedb.org/3/tv/popular?api_key=YOUR_API_KEY
    ```
    Returns a list of popular TV shows.

- **Get On the Air TV Shows**: `/tv/on_the_air`
  - Example:
    ```bash
    https://api.themoviedb.org/3/tv/on_the_air?api_key=YOUR_API_KEY&language=en-US&page=1
    ```
    Fetches TV shows currently airing.

### 3. **Search Endpoints**
These endpoints allow you to search for movies, TV shows, or people.

- **Search Movies**: `/search/movie`
  - Example:
    ```bash
    https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception
    ```
    Searches for movies with the title "Inception."

- **Search TV Shows**: `/search/tv`
  - Example:
    ```bash
    https://api.themoviedb.org/3/search/tv?api_key=YOUR_API_KEY&query=Breaking%20Bad
    ```
    Searches for TV shows with the title "Breaking Bad."

- **Search People**: `/search/person`
  - Example:
    ```bash
    https://api.themoviedb.org/3/search/person?api_key=YOUR_API_KEY&query=Leonardo%20DiCaprio
    ```
    Searches for people named "Leonardo DiCaprio."

### 4. **Person Endpoints**
These endpoints help retrieve information about actors, directors, and other film personalities.

- **Get Person Details**: `/person/{person_id}`
  - Example:
    ```bash
    https://api.themoviedb.org/3/person/6193?api_key=YOUR_API_KEY
    ```
    Fetches details for Leonardo DiCaprio.

- **Get Person's Movie Credits**: `/person/{person_id}/movie_credits`
  - Example:
    ```bash
    https://api.themoviedb.org/3/person/6193/movie_credits?api_key=YOUR_API_KEY
    ```
    Fetches all movie credits for Leonardo DiCaprio.

- **Get Person's TV Credits**: `/person/{person_id}/tv_credits`
  - Example:
    ```bash
    https://api.themoviedb.org/3/person/6193/tv_credits?api_key=YOUR_API_KEY
    ```
    Fetches all TV show credits for Leonardo DiCaprio.

### 5. **Discover Endpoints**
These endpoints allow you to filter and discover movies or TV shows based on various criteria.

- **Discover Movies**: `/discover/movie`
  - Example:
    ```bash
    https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&sort_by=popularity.desc&year=2021
    ```
    Fetches the most popular movies released in 2021.

- **Discover TV Shows**: `/discover/tv`
  - Example:
    ```bash
    https://api.themoviedb.org/3/discover/tv?api_key=YOUR_API_KEY&with_genres=18&sort_by=vote_average.desc
    ```
    Fetches the highest-rated TV shows in the Drama genre.

### 6. **Trending Endpoints**
These endpoints retrieve the most popular movies and TV shows trending over a specific period.

- **Get Trending Movies and TV Shows**: `/trending/{media_type}/{time_window}`
  - Example:
    ```bash
    https://api.themoviedb.org/3/trending/movie/week?api_key=YOUR_API_KEY
    ```
    Fetches movies trending in the past week.

- **Trending TV Shows**: `/trending/tv/week`
  - Example:
    ```bash
    https://api.themoviedb.org/3/trending/tv/week?api_key=YOUR_API_KEY
    ```
    Fetches TV shows trending in the past week.

### 7. **Genre Endpoints**
These endpoints provide lists of genres for movies and TV shows.

- **Get Movie Genres**: `/genre/movie/list`
  - Example:
    ```bash
    https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY
    ```
    Retrieves a list of all movie genres.

- **Get TV Genres**: `/genre/tv/list`
  - Example:
    ```bash
    https://api.themoviedb.org/3/genre/tv/list?api_key=YOUR_API_KEY
    ```
    Retrieves a list of all TV genres.

### 8. **Account-Specific Endpoints**
These endpoints require user authentication and are used to interact with the user’s watchlist, ratings, etc.

- **Get Account Details**: `/account`
  - Example:
    ```bash
    https://api.themoviedb.org/3/account?api_key=YOUR_API_KEY&session_id=YOUR_SESSION_ID
    ```
    Retrieves details about the authenticated user's account.

- **Get Watchlist**: `/account/{account_id}/watchlist/movies`
  - Example:
    ```bash
    https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=YOUR_API_KEY&session_id=YOUR_SESSION_ID
    ```
    Fetches the authenticated user’s movie watchlist.

### 9. **Review Endpoints**
These endpoints let you retrieve reviews for specific movies or TV shows.

- **Get Reviews for a Movie**: `/movie/{movie_id}/reviews`
  - Example:
    ```bash
    https://api.themoviedb.org/3/movie/550/reviews?api_key=YOUR_API_KEY
    ```
    Fetches reviews for "Fight Club."

### API Documentation:
For more details on how to use these endpoints and the full list of available API endpoints, you can visit the official TMDb API documentation here:
- [TMDb API Documentation](https://developers.themoviedb.org/3/getting-started)
