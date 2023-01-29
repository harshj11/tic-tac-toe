import Game from './components/Game/Game';
import './App.css';

function App() {
    return(
        <div>
            <h1 className="game-heading">
				Tic-Tac-Toe:
			</h1>
			<span className="game-heading-subtext">
                Let's remember our childhood!
            </span>
            <Game />
        </div>
    );
}

export default App;