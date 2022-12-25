const player = document.getElementById("player")
const songs = document.getElementsByClassName("song")

player.style.display = "none"

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  player.setAttribute("src", `https://www.youtube.com/embed/${id}?autoplay=1`)
  const songsArray = Array.from(songs)
  const activeSong = songsArray.filter(song => song.id === id)[0].id
  document.getElementById(activeSong).style.backgroundColor = "white" 
}