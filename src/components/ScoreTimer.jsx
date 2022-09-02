function ScoreTimer(props) {
    return <div className="box">
        <p id="timer">{props.seconds}</p>
        <p id="score"></p>
    </div>
}

export default ScoreTimer;