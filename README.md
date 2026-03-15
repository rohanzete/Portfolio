# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- 🎨 Modern and clean design with gradient effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Smooth scrolling navigation
- 💼 Projects showcase section
- 🛠️ Skills and technologies display
- 📧 Contact section with social links
- 🌙 Dark theme with custom color scheme

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view your portfolio.

### Build for Production

```bash
npm run build
```

## Customization

### 1. Personal Information

Edit the following files to add your information:

- `src/components/Hero.jsx` - Update your name, role, and description
- `src/components/About.jsx` - Add your bio and interests
- `src/components/Skills.jsx` - Update your skills
- `src/components/Projects.jsx` - Add your projects
- `src/components/Contact.jsx` - Update contact information and social links

### 2. Add Your Photo

Place your profile photo in the `public` folder as `profile.jpg` (or update the path in `Hero.jsx`)

### 3. Add Project Images

Add project screenshots to the `public` folder:
- `project1.jpg`
- `project2.jpg`
- `project3.jpg`
- `project4.jpg`

Or update the image paths in `Projects.jsx`

### 4. Colors

Customize colors in `src/App.css` by modifying the CSS variables:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent: #22d3ee;
  /* ... */
}
```

## Project Structure

```
portfolio-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
└── package.json
```

## Technologies Used

- React 18
- Vite
- CSS3 with custom properties
- Modern JavaScript (ES6+)

## License

MIT License - feel free to use this template for your own portfolio!
