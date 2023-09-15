const baseUrl = 'https://n3rdy-cors-proxy.glitch.me/useproxy?link=https://api.deezer.com'
const input = document.getElementById('input')
const button = document.getElementById('button')

const storeData = ((song)=>{
    localStorage.setItem('song', song)
})


const getTrack = ((track)=>{
    fetch(`${baseUrl}/search/track?q=${track}`)           //api for the get request
    .then(response => response.json())
    .then(data => {
        data.data.forEach(track => {
          var trackData = 
           /* html */ `
          <div class="container">
          <div class="info">
          <img class="img" src="${track.album.cover_medium}" />
          <div>
          <div class="track-title">Song Name: ${track.title}</div>
          <div class="artist-name">Artist: ${track.artist.name}</div>
          </div>
          </div>
          <div>
          <a href="${track.preview}" target="_blank">
          <button class="preview">preview</button>
          </a>
          </div>
          </div>
          `

          var songContainer = document.querySelector('.song-container');
          songContainer.insertAdjacentHTML("afterend", trackData);
        });
    });
})

getTrack(localStorage.getItem('song'))




button.addEventListener('click', ()=>{
    getTrack(input.value)
    storeData(input.value)
})
