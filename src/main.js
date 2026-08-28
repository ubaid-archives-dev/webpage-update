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
    const request = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const data = await request.json()
    

    app.innerHTML = `
      <h1>${data.title}</h1>
      <p class="date">${data.date}</p>
      <img src="${data.url}" alt="NASA APOD" />
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