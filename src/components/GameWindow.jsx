import "./GameWindow.css"

function GameWindow(props) {

    let { emoji, handler } = props;

    return <div className="box">

        <div className="gametitle">
            <h1 className="title">
                Is this emoji a flag?
            </h1>
        </div>

        <div className="card">
            <div className="card-image">
                <figure className="image" id="emojifig">{emoji}</figure>
            </div>
        </div>


        <section className="buttons">
            <button className="button is-success is-light is-medium is-responsive" id="ybtn"
                onClick={() => handler(true)}>
                Yes
            </button>
            <button className="button is-danger is-light is-medium is-responsive" id="nbtn"
                onClick={() => handler(false)}>
                No
            </button>
        </section>

    </div>
}

export default GameWindow;