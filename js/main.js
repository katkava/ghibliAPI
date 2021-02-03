//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
  // const choice = document.querySelector('input').value

  const app = document.getElementById('root')
  const logo = document.createElement('img')
  logo.src = "images/ghibliLogoBest.png"

  const container = document.createElement('div')
  container.setAttribute('class', 'container')

  app.appendChild(logo)
  app.appendChild(container)
  
  fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       data.forEach((movie)=>{
           //create a div with a card class
           const card = document.createElement('div')
           card.setAttribute('class', 'card')
           //create an h1 and set the text content to the film's title
           const h1 = document.createElement('h1')
           h1.textContent = movie.title 

           //create a p and set the text content to the film's title
           const p = document.createElement('p')
           movie.description = movie.description.substring(0, 300) //limit to 300 chars
           p.textContent = `${movie.description}...`//End with an ellipses

           //Append the cards to the container element
           container.appendChild(card)

           //Each card will contain an h1 and p. This is amazing
           card.appendChild(h1)
           card.appendChild(p)
        // console.log(movie.title)
        // console.log(movie.description)
       })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
// }
