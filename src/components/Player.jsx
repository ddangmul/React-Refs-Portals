import { useState, useRef } from "react";

export default function Player() {
  const inputedPlayerName = useRef();

  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputedPlayerName.current.value);
    inputedPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={inputedPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
