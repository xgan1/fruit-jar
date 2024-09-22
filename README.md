
# Fruityvice React App

This project is based on the original implementation by [EmmanuelOloke](https://github.com/EmmanuelOloke/fruityvice-react-app/tree/main). It introduces several key improvements to enhance the user experience and maintainability of the application. Below are the three main contributions made in this version of the project:

## Key Contributions

### 1. **State Management with useReducer**
   - The original project used basic state management, but we introduced `useReducer` to make the fruit data more organized and manageable.
   - We also added a new feature called **Fruit Jar**, allowing users to add or remove their favorite fruits to/from a personal collection. This state management system keeps track of the added fruits and their calories.

### 2. **Optimized API Calls**
   - In the original project, switching between the different pages would cause the app to re-fetch fruit data from the API every time the user navigated.
   - With the introduction of `useReducer`, the fruit data is now stored in the reducer state. The app intelligently checks if the fruit data is already available before making any new API calls, reducing unnecessary requests and improving performance.

### 3. **Improved UI/UX**
   - We addressed several layout issues, including overlapping elements, and optimized the overall page layout for a cleaner user interface.
   - The fonts and button styles were adjusted to enhance the visual appeal and make the UI more user-friendly.

## Additional Improvements
If applicable, mention any additional changes or optimizations that were made during the development process, such as:
- Improved error handling during API calls.
- Code refactoring for better readability and maintainability.
- Added responsive design elements to improve mobile and tablet usability.

## Setup Instructions
To set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourRepoName/fruityvice-react-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.
