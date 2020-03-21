const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];
//Adding some favorite songs to song-database
function addSongToDatabase(song){
    return songDatabase.push(song);
}
const songOne=addSongToDatabase({songId:5, title:"Celebration", artist:"Madona",});
const songTwo=addSongToDatabase({songId:6, title:"Baby", artist:"Justin Bieber",});
console.log(songDatabase);

//Searching for a song by title
function getSongByTitle(title){
    for(let i=0; i<songDatabase.length; i++){
        if(songDatabase[i].title===title){
            return songDatabase[i];
        }
    }
}
const searchedSong = getSongByTitle("Baby");
console.log(searchedSong);

const searchedSong2 = getSongByTitle("If the sky falls");
console.log(searchedSong2);// undefined

//Create our own playlist
function addSongToMyPlaylist(title){
  myPlaylist.push(getSongByTitle(title));
   
}
addSongToMyPlaylist('3 nails in wood');
addSongToMyPlaylist("Baby");
addSongToMyPlaylist('Blacker than black');
console.log(myPlaylist);

// if more than one song have same titile then we can use Id instead of title
