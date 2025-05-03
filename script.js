function togglePlaylist(button) {
  const playlist = button.parentElement.querySelector('.playlist-songs');
  playlist.classList.toggle('show');
  button.textContent = playlist.classList.contains('show') ? 'Hide Playlist' : 'Show Playlist';
}

function toggleVideo() {
  const container = document.getElementById('videoContainer');
  container.classList.toggle('show');
}

function toggleVideo2() {
  const container = document.getElementById('videoContainer2');
  container.classList.toggle('show');
}

function selectImage(img) {
  document.querySelectorAll('.filmstrip img').forEach(el => el.classList.remove('selected'));
  img.classList.add('selected');
}
