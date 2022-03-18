const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name:  'song-1',
    title: 'Ganpati Bappa',
    artist: 'Amitabh Bachchan',
},
{
    name:  'song-2',
    title: 'Hum Mar Jayenge',
    artist: 'Arijit Singh',
},
{
    name:  'song-3',
    title: 'Raabta',
    artist: 'Arijit Singh',
},
{
    name:  'song-4',
    title: 'Feelings',
    artist: 'Sumit Goswami',
},
{
    name:  'song-5',
    title: 'Mera Intezaar Kerna',
    artist: 'Armaan Malik',
},
{
    name:  'song-6',
    title: 'Illegal Weapon',
    artist: 'Jasmine Sandhu',
},
{
    name:  'song-7',
    title: 'Mere Soneya',
    artist: 'Sachet and Parampara',
},
{
    name:  'song-8',
    title: 'Teri Mitti',
    artist: 'B Praak',
},
{
    name:  'song-9',
    title: 'Tu hi Yaar Mera',
    artist: 'Arijit Singh and Neha Kakkar',
},
{
    name:  'song-10',
    title: 'You are My Life',
    artist: 'Parichay',
},
];

let isPlaying = false;

//for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-circle-play','fa-circle-pause');
    img.classList.add('anime');
};

//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-circle-pause','fa-circle-play');
    img.classList.add('anime');
};

play.addEventListener('click', () => {
    if(isPlaying){
        pauseMusic();
    } else {
        playMusic();
    }

});
// changing the music data


const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'music/' +songs.name + ".mp3";
    img.src = 'images/' +songs.name+ ".jpg";
};
songIndex = 0;
//loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);