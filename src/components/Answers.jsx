function Answers(props) {

    let { answers } = props;

    return <div className="box">
        <p>Correct Answers:</p>
        <p id="answers">
            {answers}
        </p>
    </div>
}

export default Answers;