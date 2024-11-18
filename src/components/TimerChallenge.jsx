import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    // 졌을 경우
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    // setTimerStarted(true);
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   dialog.current.open();
    //   setTimerStarted(false);
    // }, targetTime * 1000);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    // 이겼을 경우
    // clearTimeout(timer.current);
    clearInterval(timer.current);
    // setTimerStarted(false);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerIsActive > 0 && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
        {/* <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : "undefined"}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p> */}
      </section>
    </>
  );
}
