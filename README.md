# Pokémon Memory Card Game - React Project

## 🚀 Live Demo
**View the deployed application**: [https://effervescent-boba-e0b339.netlify.app/](https://effervescent-boba-e0b339.netlify.app/)

Try out all the features:
- Click on different Pokémon cards to score points
- Watch cards shuffle after each successful click
- Try to beat your high score without clicking the same card twice
- Challenge yourself to click all 8 cards in one round!

A dynamic memory card game built with React, featuring real Pokémon data from PokéAPI. Test your memory by clicking on cards without repeating any - each click shuffles the deck to increase the challenge!

## 🚀 Project Overview

This project demonstrates advanced React concepts including:
- **State Management** with multiple `useState` hooks
- **API Integration** with `useEffect` and async/await
- **External Library Usage** with Lodash for shuffling
- **Component Props Flow** (data down, events up pattern)
- **Game Logic Implementation** with conditional rendering
- **Real-time Score Tracking** with persistent high scores

## ✨ Features

- **Real Pokémon Data**: Fetches 8 random Pokémon sprites from PokéAPI
- **Memory Game Logic**: Click different cards without repeating to score points
- **Dynamic Card Shuffling**: Cards randomize position after each successful click using Lodash
- **Live Score Tracking**: Real-time current score and persistent high score display
- **Game Reset Mechanism**: Automatic reset when duplicate card is clicked
- **Responsive Grid Layout**: CSS Grid design that adapts to different screen sizes
- **Professional Code Structure**: Clean component architecture with separation of concerns

## 🛠️ Technologies Used

- **React 18** - Frontend framework with hooks (useState, useEffect)
- **Vite** - Build tool and development server
- **PokéAPI** - External API for Pokémon data and sprites
- **Lodash** - Utility library for array shuffling
- **CSS3** - Grid layout and responsive styling
- **JavaScript ES6+** - Async/await, destructuring, array methods

## 📁 Project Structure

src/
├── components/
│ ├── Card.jsx # Individual Pokémon card component
│ ├── Card.css # Card styling and hover effects
│ ├── GameBoard.jsx # Grid container for all cards
│ ├── GameBoard.css # CSS Grid layout styling
│ ├── Scoreboard.jsx # Score display component
│ └── Scoreboard.css # Scoreboard styling
├── App.jsx # Main game logic and state management
├── App.css # Global app styling
├── index.css # Root styling and CSS reset
└── main.jsx # React app entry point