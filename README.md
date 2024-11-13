# Polling-App

Polling-App is a modern and responsive application built with **Vite**, **React**, **Tailwind CSS**, and **Redux Toolkit Query** for managing state and API interactions. This app allows users to create, participate, and manage polls efficiently with a smooth and intuitive interface.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create and manage polls**: Users can create,update,delete and view new polls and manage their options.
- **Voting**: Authenticated and non authenticated users can vote on a poll on specific options.
- **Real-time updates**: Dynamic rendering of poll results as users interact.
- **Efficient state management**: Built with Redux Toolkit Query for optimized API calls and caching.
- **Responsive design**: Styled using Tailwind CSS for a seamless experience across devices.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/) for fast and efficient development
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with `@reduxjs/toolkit`
- **Routing**: [React Router](https://reactrouter.com/) for navigation
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **Linting**: [ESLint](https://eslint.org/) to maintain code quality

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/polling-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd polling-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or, if you're using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

- **Development Mode**: To start the application in development mode, run:

  ```bash
  npm run dev
  ```

  This will start the Vite development server and you can view the app at `http://localhost:3000`.

- **Build**: To create an optimized production build, run:

  ```bash
  npm run build
  ```

- **Preview**: To preview the production build locally, run:

  ```bash
  npm run preview
  ```

## Available Scripts

- `dev`: Starts the development server using Vite.
- `build`: Creates a production-ready build of the app.
- `lint`: Lints the code using ESLint to enforce code standards.
- `preview`: Starts a local server to preview the production build.

## Project Structure

The project structure is organized as follows:

```
polling-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable components
│   ├── features/        # Redux features and slices
│   ├── pages/           # Application pages
│   ├── App.tsx          # Main App component
│   └── index.tsx        # Entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── .eslintrc.js         # ESLint configuration
└── package.json         # Project metadata and dependencies
```

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please open an issue or create a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature-name'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
