#### **Overview**
Build a movie listing app using Vanilla JavaScript that interacts with an external movie API (fThe Movie Database (TMDb)). The app will display a list of popular movies fetched from the API. Each movie will be displayed as a card with the movie poster as the background, title, release year, and additional details overlaid. Clicking on a movie card will direct users to a separate page with more detailed information about that movie. The app should include a loading state while fetching data from the API.

---

### **Requirements**

#### **1. Core Features**

1. **Movie Listing Page**
   - Fetch and display a list of popular movies from the external API.
   - Each movie should be displayed as a card with the following information:
     - Poster image as the background of the card.
     - Movie title.
     - Release year.
   - Clicking on any movie card should redirect to a detailed page for that movie.

2. **Movie Details Page**
   - Display detailed information about the selected movie, including:
     - Movie poster.
     - Title.
     - Release year.
     - Overview/description.
     - Rating (optional).
     - Any other relevant details available from the API.
   - Include a "Back" button to return to the movie listing page.

3. **Loading State**
   - Display a loading animation or message when waiting for API responses on both the movie listing page and the movie details page.

4. **Error Handling**
   - Show an appropriate message if the API request fails (e.g., "Failed to load movies. Please try again.").

---

#### **2. Technical Requirements**

1. **Frontend Framework/Tools**
   - Vanilla JavaScript (no frameworks like React or Vue).
   - HTML5 and CSS3 for the structure and styling.
   - Optional: Use CSS libraries like Bootstrap for basic styling, but custom CSS is encouraged to demonstrate understanding.

2. **API Integration**
   - Use a publicly available movie database API (TMDb).
   - Fetch data using JavaScript’s `fetch()` method.

3. **Routing**
   - Utilize browser history manipulation (`window.history.pushState` and `popstate` event) to create dynamic routing between the movie listing page and the movie details page without reloading the browser.
   - Ensure that refreshing the movie details page retains the data and works properly without breaking navigation.

4. **Responsive Design**
   - The app must be responsive and adapt to different screen sizes (desktop, tablet, and mobile).
   - The movie cards should adjust in layout depending on the screen size.

---

#### **3. User Stories**

1. **Movie Listing Page**
   - As a user, I should see a list of popular movies when I visit the homepage.
   - Each movie should have a background image (poster), the title, and the release year displayed on the card.
   - I should be able to click on a movie card to view more details about the movie.

2. **Movie Details Page**
   - As a user, I should be able to see detailed information about a movie when I click on it from the listing page.
   - I should see the movie poster, title, release year, overview, and other relevant information.
   - I should have the ability to return to the movie listing page easily.

3. **Loading and Error States**
   - As a user, I should see a loading animation when the app is fetching data from the API.
   - If there is a problem retrieving movie data, I should see an error message with instructions to retry.

---

#### **4. Design Requirements**

1. **Movie Listing Page**
   - **Layout**: A grid or list layout where each movie is represented by a card.
   - **Movie Cards**: 
     - The movie poster should serve as the background image of the card.
     - Text overlay for the title and release year.
     - A hover effect on each card, such as zooming in or adding a shadow for better user interaction feedback.
   - **Loading State**: Use a spinner or skeleton loading placeholder while the movies are being fetched.
   - **Error Handling**: Show a clean error message if the API request fails.

2. **Movie Details Page**
   - **Layout**: A single-page view with a larger poster at the top, followed by movie details.
   - **Back Button**: A clear button for the user to return to the movie listing page.
   - **Error Handling**: Display an error message if the movie details fail to load.

---

#### **5. Functional Requirements**

1. **Data Fetching**
   - Use the `fetch()` method to retrieve the list of popular movies from the API.
   - For the movie details page, fetch data using the movie's unique identifier passed as a URL parameter or state.

2. **Routing**
   - Implement client-side routing using the browser’s History API (`pushState` and `popstate`).
   - Ensure that users can click "Back" in the browser to navigate between pages without reloading the entire application.

3. **State Management**
   - Store fetched data in variables or use local storage (optional) for basic state management.
   - The movie listing page should display movies without re-fetching if the user navigates back from the details page.

---

### **Development Guide**

1. **API Setup**
   - Research and sign up for a movie database API (e.g., TMDb or OMDb).
   - Obtain an API key if required and review the documentation on how to fetch the list of popular movies.

2. **Project Structure**
   - Break the app into two main pages:
     1. Movie Listing Page (Homepage).
     2. Movie Details Page.
   - Set up the basic HTML and CSS structure for both pages.

3. **Building Features**
   - Start by implementing the `fetch()` request to retrieve popular movies.
   - Build out the movie cards on the listing page, setting the poster as the background image.
   - Implement the click event that takes users to the movie details page.
   - Set up the dynamic routing using `pushState` for smooth navigation between pages.
   - Implement the loading state and error handling for both the movie list and details.

4. **Testing**
   - Test on different devices to ensure responsiveness.
   - Test scenarios such as failed API requests or slow loading times.
   - Ensure smooth navigation between pages and proper handling of browser history.

---
