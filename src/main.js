import './style.css';
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const url=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

document.querySelector("#app").innerHTML = '<h1>loading NASA ASTRONOMY Picture..</h1>';

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#app").innerHTML = `
            <h1>${data.title}</h1>
            <p class="date">${data.date}</p>
            <img src="${data.url}" alt="${data.title}" style="max-width: 100%; border-radius: 8px;" />
        <p class="explanation">${data.explanation}</p>
      </div>
        `;
    })
    .catch(err => {
        console.error("Error fetching data:", err);
        document.querySelector("#app").innerHTML  = `<p>Failed to load NASA data. Check console for details.</p>`;
    })