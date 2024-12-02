import React, { useState, useRef, useEffect } from "react";
//Import Components
import Player from "./components/Player";
import Songs from "./components/Songs";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import Styles
import "./styles/style.scss";
//Import Utilities
import chillHop from "./data";
import { compileString } from "sass";

function App() {
  //Events
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(true);
  //Ref
  const audioRef = useRef(null);
  //Event Handlers
  const timeUpdatehandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    //Percentage Calculations
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    console.log(animationPercentage);
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage }); //
  };

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setCurrentSong(nextSong);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  return (
    <div className={`App ${libraryStatus ? " " : "lib-active"}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Songs currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdatehandler}
        onLoadedMetadata={timeUpdatehandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
