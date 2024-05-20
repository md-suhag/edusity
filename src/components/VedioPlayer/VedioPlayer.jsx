import React, { useRef } from "react";
import "./VedioPlayer.css";
import vedio from "./../../assets/college-video.mp4";

function VedioPlayer({ playState, setPlayState }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`vedio-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video autoPlay muted controls src={vedio}></video>
    </div>
  );
}

export default VedioPlayer;
