  console.log("welcome to music streaming");
  let songindex = 0;
  let audioElement = new Audio('song/1.mp3');
  let masterplay = document.getElementById('masterplay');
  let myprogressbar = document.getElementById('myprogressbar');
  let gif = document.getElementById('gif');
  let mastersongname = document.getElementById('mastersongname');


  let songitems = Array.from(document.getElementsByClassName('songitem'));


  let songs = [
      { songname: "Bekhayali", filepath: "song/1.mp3", coverpath: "covers/cover1.jfif" },
      { songname: "Ranjha", filepath: "song/2.mp3", coverpath: "covers/cover2.jfif" },
      { songname: "Huma-Huma", filepath: "song/3.mp3", coverpath: "covers/cover3.jpg" },
      { songname: "BGM04", filepath: "song/4.mp3", coverpath: "covers/cover4.jpg" },
      { songname: "Janji-Heroes Tonight", filepath: "song/5.mp3", coverpath: "covers/cover5.jpg" },
      { songname: "Willow", filepath: "song/6.mp3", coverpath: "covers/cover6.png" },
      { songname: "SugarCrash", filepath: "song/7.mp3", coverpath: "covers/cover7.jpg" },
      { songname: "Astronomia", filepath: "song/8.mp3", coverpath: "covers/cover8.jpg" },
      { songname: "Rick", filepath: "song/9.mp3", coverpath: "covers/cover9.webp" },
      { songname: "ButterCup", filepath: "song/10.mp3", coverpath: "covers/cover10.jpg" },
  ]
  songitems.forEach((element, i) => {

      element.getElementsByTagName('img')[0].src = songs[i].coverpath;
      element.getElementsByClassName('songname')[0].innerText = songs[i].songname;


  });
  masterplay.addEventListener('click', () => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play();
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle');
          gif.style.opacity = 1;
      } else {
          audioElement.pause();
          masterplay.classList.remove('fa-pause-circle');
          masterplay.classList.add('fa-play-circle');
          gif.style.opacity = 0;

      }




  })
  audioElement.addEventListener('timeupdate', () => {
      progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
      myprogressbar.value = progress;

  })
  myprogressbar.addEventListener('change', () => {
      audioElement.currentTime = myprogressbar.value * audioElement.duration / 100
  })
  const makeAllPlays = () => {
      Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
          element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
          gif.style.opacity = 1;
      })

  }
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
      element.addEventListener('click', (e) => {
          if (audioElement.paused || audioElement.currentTime <= 0) {
              makeAllPlays();
              songindex = parseInt(e.target.id);
              mastersongname.innerText = songs[songindex].songname;
              e.target.classList.remove('fa-play-circle');
              e.target.classList.add('fa-pause-circle');
              audioElement.src = songs[songindex].filepath;
              audioElement.currentTime = 0;
              audioElement.play();
              gif.style.opacity = 1;
              masterplay.classList.remove('fa-play-circle');
              masterplay.classList.add('fa-pause-circle');
          } else {
              songindex = parseInt(e.target.id);

              e.target.classList.remove('fa-pause-circle');
              e.target.classList.add('fa-play-circle');
              audioElement.pause();
              masterplay.classList.remove('fa-pause-circle');
              masterplay.classList.add('fa-play-circle');
              gif.style.opacity = 0;
          }

      })
  })
  document.getElementById('next').addEventListener('click', () => {
      if (songindex >= 9) {
          songindex = 0;
      } else {
          songindex += 1;
      }
      audioElement.src = songs[songindex].filepath;
      mastersongname.innerText = songs[songindex].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })
  document.getElementById('previous').addEventListener('click', (e) => {
      if (songindex <= 0) {
          songindex = 1;
      } else {
          songindex -= 1;
      }
      audioElement.src = songs[songindex].filepath;
      mastersongname.innerText = songs[songindex].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
  })