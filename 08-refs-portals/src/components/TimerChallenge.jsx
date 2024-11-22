import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const resultDialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        resultDialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaning => prevTimeRemaning - 10)
        }, 10);
        setTimerStarted(true);
    }

    function handeStop() {
        resultDialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal
                ref={resultDialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handeStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}
