# Finance CRUD React

A full-stack desktop application for managing companies (empresas) and items with a Node.js/Express backend and an Electron + React frontend.

## Project Structure

```
Electron-CRUD/
├── backend/              # Node.js/Express REST API
│   ├── src/
│   │   ├── controllers/  # Business logic handlers
│   │   ├── routes/       # API endpoint definitions
│   │   ├── services/     # Business logic services
│   │   ├── db.js         # Database configuration
│   │   └── index.js      # Server entry point
│   └── package.json
└── react-core/           # Electron + React desktop application
    ├── src/
    │   ├── components/   # UI components
    │   ├── assets/       # Static assets
    │   └── App.jsx       # Main application component
    └── package.json
```

## Features

- **CRUD Operations**: Create, read, update, and delete operations for companies and items
- **REST API**: Express.js backend with organized controller/service/route architecture
- **Desktop UI**: Electron + React desktop application with Vite for fast development
- **Responsive Design**: Tailwind CSS for styling
- **Modern Stack**: ES6+, JSX, and modern JavaScript practices

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### Backend Setup

See [backend/README.md](backend/README.md) for detailed backend setup and API documentation.

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd react-core
npm install
npm run dev      # Development mode
npm run build    # Build for production
```

## API Endpoints

The backend provides REST API endpoints for:
- **Empresas** (Companies): `/api/empresa` - CRUD operations
- **Items**: `/api/item` - CRUD operations

Refer to the backend README for complete API documentation.

## Development

Both backend and frontend support hot-module reloading for faster development:

- **Backend**: Restart required for changes
- **Frontend**: Vite provides instant HMR

## Building for Production

```bash
# Build backend (if needed)
cd backend
npm run build  # or your production build command

# Build frontend
cd react-core
npm run build
```

## License

This project is open source. Feel free to use it for learning and development purposes.
