# NG Task Board (Frontend)

**NG Task Board** is a task management application frontend built with **Angular** and styled using **SCSS**. It provides a modern, responsive user interface for managing tasks and boards, communicating with a backend API to persist data.

## Features 🌟

1. **Task Management**:
   - Display tasks on a board with the ability to edit task name, description, icon, and status.
   - Add and delete tasks as needed.

2. **Board Management**:
   - Create and edit board names and descriptions.
   - Automatically create a board on the first visit or when the first change is made.

3. **Modern UI**:
   - Built with SCSS for clean and responsive design.

## How to Clone the Project 🛠️

If you want to clone only the **NG Task Board** project from the main repository, follow these steps:

1. **Clone the repository without downloading all content**:
   ```bash
   git clone --no-checkout git@github.com:blazo-dev/coding-mini-projects.git
   cd coding-mini-projects
   ```

2. **Enable sparse-checkout**:
   ```bash
   git sparse-checkout init --cone
   ```

3. **Set the project folder to clone**:
   ```bash
   git sparse-checkout set ng-task-board
   ```

4. **Checkout the branch (e.g., `main`)**:
   ```bash
   git checkout main
   ```

Now, the **NG Task Board** project will be downloaded to your local machine.

## Project Setup 🔧

### Prerequisites
- Node.js and npm installed
- Angular CLI installed globally:
  ```bash
  npm install -g @angular/cli
  ```

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure the API endpoint in `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api' // Replace with your backend URL
   };
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open the application at:
   ```bash
   http://localhost:4200
   ```

## Directory Structure 📂

```plaintext
src/
├── app/
│   ├── components/   # Reusable components (task card, board view, etc.)
│   ├── services/     # API services for interacting with the backend
│   ├── models/       # Interfaces for board and task data
├── assets/           # Static assets (icons, images, etc.)
├── environments/     # Environment configuration files
```

---

## Styling 🎨

- SCSS is used for styling, with a modular approach for components.
- Global styles can be found in `src/styles.scss`.

---

## Available Scripts 📜

- **Start Development Server**:
  ```bash
  ng serve
  ```

- **Build for Production**:
  ```bash
  ng build --configuration production
  ```

- **Run Unit Tests**:
  ```bash
  ng test
  ```

- **Run Linting**:
  ```bash
  ng lint
  ```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.