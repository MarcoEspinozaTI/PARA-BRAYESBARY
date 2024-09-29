onload = () => {
  document.body.classList.remove("container");
  var bgMusicURL = 'Lonely.mp3'; 
  var bgMusicControls = true;
  if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
  <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} hidden='true' autoplay loop>    
  </audio>
  `;
  }
};