var musicPlayer = (function() {
  var songList = ["California girl", "California dreaming", "Hotel California"];
  function play() {
    console.log("I am playing the next song");
  }
  function pause() {
    console.log("I am paused");
  }
  function addTrackToMusicQueque(track) {
    songList.push(track);
    console.log("I added a song");
  }
  function showNextTrack() {
    console.log("My next track is", songList[1]);
  }
  function loadSong() {
    filesystem.loadNextSong();
  }
  return {
    playMusic: play,
    pauseMusic: pause,
    showNextTrack: showNextTrack,
    addTrack: addTrackToMusicQueque
  };
})();

musicPlayer.playMusic();
musicPlayer.showNextTrack();
musicPlayer.pauseMusic();
