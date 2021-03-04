window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Podcast 01 - 31/07/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/01.mp3",
    },
    {
      "name": "Podcast 02 - 07/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/02.mp3",
    },
    {
      "name": "Podcast 03 - 14/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/03.mp3",
    },
    {
      "name": "Podcast 04 - 21/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/04.mp3",
    },
    {
      "name": "Podcast 05 - 28/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/05.mp3",
    },
    {
      "name": "Podcast 06 - 04/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/06.mp3",
    },
    {
      "name": "Podcast 07 - 11/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',

      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/07.mp3",
    },
    {
      "name": "Podcast 08 - 18/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/08-Arreglado.mp3",
    },
    {
      "name": "Podcast 09 - 25/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/09.mp3",
    },
    {
      "name": "Podcast 10 - 2/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/10.mp3",
    },
    {
      "name": "Podcast 11 - 9/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/11.mp3",
    },
    {
      "name": "Podcast 12 - 16/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/12.mp3",
    },
    {
      "name": "Podcast 13 - 23/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/13.mp3",
    },
    {
      "name": "Podcast 14 - 30/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/wp-content/uploads/2020/11/14.mp3",
    }
  ]
  ,    debug: true

});
