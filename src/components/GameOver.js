import './GameOver.css'

const GameOver = ({ retry }) => {
    return (
        <div>
            <h1>End</h1>
            <button onClick={retry}>Tente Novamente</button>
        </div>
    )
}

export default GameOver;