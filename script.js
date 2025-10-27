// Lista de canciones (ajusta los nombres y rutas según tus archivos)
const songs = [
  { title: "Canción 1", file: "musica/cancion1.mp3" },
  { title: "Canción 2", file: "musica/cancion2.mp3" },
  { title: "Canción 3", file: "musica/cancion3.mp3" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const trackTitle = document.getElementById("track-title");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const playlist = document.getElementById("playlist");

// Cargar playlist
function loadPlaylist() {
  playlist.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.dataset.index = index;
    li.addEventListener("click", () => loadSong(index));
    playlist.appendChild(li);
  });
}

// Cargar canción
function loadSong(index) {
  currentSongIndex = index;
  const song = songs[index];
  audio.src = song.file;
  trackTitle.textContent = song.title;
  document.querySelectorAll(".playlist li").forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

// Reproducir / Pausar
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️ Pausar";
  } else {
    audio.pause();
    playBtn.textContent = "▶️ Reproducir";
  }
}

// Siguiente canción
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.textContent = "⏸️ Pausar";
}

// Canción anterior
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playBtn.textContent = "⏸️ Pausar";
}

// Eventos
playBtn.addEventListener("click", togglePlay);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Inicializar
loadPlaylist();