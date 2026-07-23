# Sound Logic - React Web Application

This is the React-based web application for the Sound Logic project.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
cd react
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`.

### Building

Build the application for production:

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting & Type Checking

```bash
npm run lint
npm run type-check
```

## Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── vite-env.d.ts    # Vite environment types
```

## Technologies

- **React** 18.2 - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **React Hooks** - State management and side effects

## Features

- ⚡ Fast HMR (Hot Module Replacement)
- 🎯 TypeScript support
- 📦 Optimized production build
- ✨ Modern CSS with Vite
- 🧹 ESLint configuration

## Next Steps

1. Customize the application components in `src/`
2. Add routing with React Router if needed
3. Integrate with backend API
4. Add state management (Redux, Zustand, etc.) if needed
5. Configure environment variables in `.env` files
