
# CUSTOM NEW TAB PAGE

A minimal browser new tab page featuring a live clock and daily NASA API data.






## Screenshots
![Screenshot](./src/assets/ss.png)


## Live Demo

**[Live Demo](https://ubaid-archives-dev.github.io/webpage-update/)**


## WHAT IS INSIDE

MARKUP: (index.html) this is just the basic layout. It has custom Google fonts such as Orbitron and Black Ops One and includes container for main view and clock 

Styling: (style.css) Hand-crafted CSS it defines custom layout designing , colour themes and background

Build Tool: (vite.config.js) Configured with Vite. it helps in fast local development 


## Run Locally

clone the repository
git clone https://github.com/ubaid-archives-dev/webpage-update.git

Install dependencies:
npm install

Set up the environment variables:
Create a `.env` file in the root directory and add your NASA API key:
VITE_NASA_API_KEY=your_actual_key_here

Start the local development server:  
npm run dev
## HOW IT WORKS

This was built as a Stardance mission to create a lightweight, highly customized new tab experience. I wrote the CSS completely by hand instead of pulling in a framework like Tailwind. It keeps the rendering fast and gives me total control over the theme and colour scheme. I used Vite for fast local deployment.
