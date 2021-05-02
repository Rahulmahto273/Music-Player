
  let isplaying= false;
  const music=document.querySelector("audio");
  const play=document.getElementById('play');
  const prev=document.getElementById('prev');
  const next=document.getElementById('next');
  const artist=document.getElementById('artist');
  const title=document.getElementById('title');
  const image=document.querySelector("img");
  function playmusic(){
    isplaying= true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
  }
  function pausemusic(){
    isplaying= false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
  }
  play.addEventListener("click",function(){
    isplaying ? pausemusic() : playmusic();
  });
  const songs = [{
    name:"music-1",
    title:"call-aundi",
    artist: "Honey Singh",
    image:"image-1",
  },
  {
    name:"music-2",
    title:"ijazat",
    artist: "arijit singh ",
    image:"image-2",
  },
  {
    name:"music-3",
    title:"Muskurane ",
    artist: "arijit singh",
    image:"image-3",
  },
  {
    name:"music-4",
    title:"saiyaara",
    artist: "mohit chauhan",
    image:"image-4",
  }
  ];
  songsindex=0;
  function loadsongs(songs){
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="Music/" + songs.name + ".mp3";
    image.src="Images/" + songs.image +".jpg";
  };
  loadsongs(songs[songsindex]);

  function forward(){
    songsindex=(songsindex+1)%songs.length;
    loadsongs(songs[songsindex]);
    playmusic();
  };
  function backward(){
    songsindex=(songsindex-1+songs.length)%songs.length;
    loadsongs(songs[songsindex]);
    playmusic();
  };

  next.addEventListener("click",forward);
  prev.addEventListener("click",backward);
