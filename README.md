## React OAuth Tutorial

![Google OAuth Authentication](https://imgur.com/O2PFUkQ.gif)

This project is a simple React application that demonstrates OAuth authentication. It uses Vite as a build tool and React Router for routing. The application has two main components: `Login` and `Secure`. The `Login` component is responsible for the authentication process, while the `Secure` component displays user details fetched from Google's OAuth API.

### Cloning the Project

To clone this project, you need to have Git installed on your machine. You can clone the project using the following command:

```sh
git clone https://github.com/nemo0/react-oauth-tutorial.git
```

### Required Keys

This application requires an access token from Google's OAuth API to fetch user details.

### Running the Application

Before running the application, make sure you have Node.js and npm installed on your machine. After cloning the project, navigate to the project directory and install the dependencies using the following command:

```sh
npm install
```

You can then start the development server using:

```sh
npm run dev
```

To build the application for production, use:

```sh
npm run build
```

### Project Structure

The main application entry point is `src/main.jsx`, which renders the `App` component from `src/App.jsx`. The `App` component sets up the router and routes for the application. The `Login` and `Secure` components are located in the `src/components` directory. The application's styles are defined in `src/App.css`.

The project configuration for Vite is located in `vite.config.js`, and the package dependencies and scripts are defined in `package.json`. The `index.html` file is the HTML template for the application.

For more information about the project setup and configuration, refer to the official documentation of the used libraries and tools.
