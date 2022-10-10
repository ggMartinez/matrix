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
      "name": "OnDemand 02 - 07/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/OndemandRockForeva2.mp3",
    },
    {
      "name": "OnDemand 03 - 14/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/OnDemand3.mp3",
    },
    {
      "name": "OnDemand 04 - 21/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand4.mp3",
    },
    {
      "name": "OnDemand 05 - 28/08/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand5.mp3",
    },
    {
      "name": "OnDemand 06 - 04/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand6.mp3",
    },
    {
      "name": "OnDemand 07 - 11/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',

      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand7.mp3",
    },
    {
      "name": "OnDemand 08 - 18/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand8.mp3",
    },
    {
      "name": "OnDemand 09 - 25/09/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand9.mp3",
    },
    {
      "name": "OnDemand 10 - 2/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/ondemand10.mp3",
    },
    {
      "name": "OnDemand 11 - 9/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/ondemand11.mp3",
    },
    {
      "name": "OnDemand 12 - 16/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand12.mp3",
    },
    {
      "name": "OnDemand 13 - 23/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand13.mp3",
    },
    {
      "name": "OnDemand 14 - 30/10/2020",
      "artist": "Rock Foreva",
      "album": "Temporada 1",
      "cover_art_url" : '/img/rockfa-t1.png',
      "url": "https://www.matrix.com.uy/uploads/ondemand/Ondemand14Halloween.mp3",
    }
  ]
  ,    debug: true

});
