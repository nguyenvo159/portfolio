# Premium Modern Portfolio Website

This is a premium, highly interactive portfolio website built with modern web technologies. It features a sleek glassmorphism design, smooth scroll animations, dark/light mode, and a responsive layout perfect for a Senior Frontend Engineer or Creative Developer.

## Features

- **Modern & Premium UI:** Glassmorphism, floating elements, beautiful gradients, and dark luxury aesthetic.
- **Smooth Animations:** Powered by Framer Motion for page transitions, scroll reveals, and micro-interactions.
- **Smooth Scrolling:** Integrated Lenis smooth scroll for a butter-smooth browsing experience.
- **Theme System:** Fully functioning Dark/Light mode toggle that persists in `localStorage`.
- **Custom Components:** Custom cursor, animated navbar, interactive project cards, and a dynamic timeline.
- **Responsive:** Works seamlessly across mobile, tablet, and desktop viewports.
- **Clean Code:** Component-driven architecture using React, TypeScript, and Tailwind CSS.

## Tech Stack

- React 18
- Vite 4
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- Lenis (Smooth Scroll)
- clsx & tailwind-merge (Utility functions)

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v16.20.2 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the source code.
2. Open a terminal in the project root directory.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Folder Structure

```
src/
├── components/       # Reusable UI components (Navbar, Cursor, ThemeProvider)
├── sections/         # Main page sections (Hero, About, Projects, etc.)
├── lib/              # Utility libraries and functions
├── hooks/            # Custom React hooks
├── styles/           # Global CSS and Tailwind configurations
├── App.tsx           # Main application component with Lenis setup
└── main.tsx          # React entry point
```

## Customization

- **Colors & Theme:** Update `src/index.css` to modify the CSS variables for different themes.
- **Content:** Update the dummy data inside the respective section components (`src/sections/*.tsx`).
- **Animations:** Adjust Framer Motion variants within components to change the behavior of scroll reveals and hover effects.

---
*Designed & built for an award-winning digital experience.*
