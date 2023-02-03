import React from 'react';

import Game from './components/Game/Game';

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player1: undefined,
            player2: undefined,
        }
    }

    render() {
        return(
            <div>
                <h1 className="game-heading">
                    Tic-Tac-Toe:
                </h1>
                <span className="game-heading-subtext">
                    Let's remember our childhood!
                </span>
                <div className="game-container">
                    <Game />
                </div>
            </div>
        );
    }
}

export default App;