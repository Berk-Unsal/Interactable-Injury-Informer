# Injury Information Finder

This is a simple React application that allows users to click on an interactive anatomy diagram to learn about potential injuries in different muscle groups.

## Description

The application presents an SVG-based anatomy diagram. Users can hover over different body parts, which are then highlighted. Clicking on a body part takes the user to a more detailed page listing specific sub-muscles. From there, the user can select a sub-muscle to view a list of possible injuries, their descriptions, and common causes.

## Features

*   **Interactive Anatomy Diagram:** An SVG-based diagram with clickable body parts.
*   **Dynamic Routing:** Uses `react-router-dom` to navigate between the main diagram, sub-muscle lists, and injury details.
*   **Data-Driven:** Injury and muscle information is loaded from a `injuryData.json` file.
*   **Component-Based:** Built with reusable React components for different pages and UI elements.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd injury-finder
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the application in your default web browser at `http://localhost:3000`.

## Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **React Router:** For handling routing within the application.
*   **JavaScript (ES6+):** The primary programming language.
*   **CSS:** For styling the application.
