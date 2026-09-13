import './style.css'

const app = document.querySelector('#app') 
const clockEl = document.querySelector('#clock') 

const tick = () => { 
  if (clockEl) {
    clockEl.textContent = new Date().toLocaleTimeString() 
  }
}
setInterval(tick, 1000) 
tick()

async function getSpacePic() { 
  app.innerHTML = '<h1>loading space stuff...</h1>' 
  
  try {
    const apiKey = import.meta.env.VITE_NASA_API_KEY 
    const request = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&thumbs=true`) 
    const data = await request.json()
    
    let mediaElement = '';
    
    if (data.media_type === 'video') {
      if (data.url.includes('youtube.com') || data.url.includes('vimeo.com')) {
        mediaElement = `<iframe src="${data.url}" frameborder="0" allowfullscreen class="apod-media"></iframe>`;
      } else if (data.url.includes('.mp4')) {
        mediaElement = `
          <video controls autoplay loop class="apod-media" style="width: 100%; border-radius: 8px; background: #000;">
            <source src="${data.url}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        const thumbnailImg = data.thumbnail_url 
          ? `<img src="${data.thumbnail_url}" alt="Video Thumbnail" style="width:100%; border-radius:4px; margin-bottom:1.5rem;" />` 
          : '';

        mediaElement = `
          <div class="apod-media" style="display:flex; flex-direction:column; align-items:center; justify-content:center; background:#1a1a1a; padding: 1.5rem; border-radius: 8px;">
            ${thumbnailImg}
            <a href="${data.url}" target="_blank" rel="noopener noreferrer" style="color:#00ffcc; text-decoration:none; font-family:'Orbitron', sans-serif; font-size:1.2rem; border:2px solid #00ffcc; padding:10px 20px; border-radius:4px; text-transform:uppercase; text-align:center;">
              Launch Video in New Tab 🚀
            </a>
          </div>
        `;
      }
    } else {
      mediaElement = `<img src="${data.url}" alt="NASA APOD" class="apod-media" />`;
    }

    app.innerHTML = `
      <h1>${data.title}</h1>
      <p class="date">${data.date}</p>
      ${mediaElement}
      <p class="explanation">${data.explanation}</p>
    `
    
    const dateElement = app.querySelector('.date') 
    if (dateElement && clockEl) { 
      dateElement.insertAdjacentElement('afterend', clockEl) 
    }

  } catch (error) { 
    console.error("api broke:", error) 
    app.innerHTML = '<p>could not load image today :(</p>'
  }
}

getSpacePic() 