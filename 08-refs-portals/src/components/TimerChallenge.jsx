import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const resultDialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            resultDialog.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handeStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={resultDialog} targetTime={targetTime} result="lose!" />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lose!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handeStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}
