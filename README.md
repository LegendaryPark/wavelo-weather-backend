# Weather App Backend Server

Welcome to the backend server repository for the Weather App! This server handles requests for weather information based on your current location or any city you specify. It's designed to work in tandem with the frontend to deliver a seamless user experience.

### Important Note
1. To fully experience the app, you'll also need to run the frontend component. You can find the frontend repository and setup instructions [here](https://github.com/LegendaryPark/wavelo-weather-frontend).
2. Make sure to create your own .env file at the root and add GEOCODING_API_KEY to it. Please visit [Geocode](https://geocode.maps.co/) to get your own API key

## Getting Started

Below are the steps to set up the Weather App backend server on your local machine. Follow these instructions to get it up and running smoothly.

### Step 1: Clone the Repository

Begin by cloning this repository to your local machine. You can do this by running the following command in your terminal or command prompt:

```bash
git clone https://github.com/LegendaryPark/wavelo-weather-backend.git
```

Navigate into the cloned repository directory before proceeding with the next steps.

### Step 2: Install Dependencies

Install all the necessary dependencies for the server by running:

```bash
npm install
```

This command fetches and installs all the required packages defined in the `package.json` file.

### Step 3: Build the Project

To compile the TypeScript code and prepare the project for execution, run:

```bash
npm run build
```

This step ensures that all the TypeScript files are compiled into JavaScript in the `build` directory.

### Step 4: Start the Server

Launch the backend server with the following command:

```bash
npm run start
```

This command starts the server, making it listen for incoming requests on the configured port.

### Testing

To ensure everything is set up correctly, you can run the predefined tests with:

```bash
npm run test
```

This command runs all the tests included in the project to verify that the server behaves as expected.

## Conclusion

You've successfully set up the Weather App backend server! It's now ready to handle requests and provide weather data to the frontend. For any issues or contributions, feel free to open an issue or a pull request on this repository.

Thank you for setting up the Weather App backend. Enjoy providing users with accurate and timely weather information!
