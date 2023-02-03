import React from 'react';
import './game.css';
import Board from '../Board/Board';
import Stats from '../Stats/Stats';

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return [squares[a], a, b, c];
		}
	}

	return null;
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,
			xIsNext: true,
			player1: "Player1",
			player2: "Player2",
			aWon: 0,
			bWon: 0,
			draw: 0,
			status: 'Next Player: X',
			someoneWonOrDraw: false,
			squaresToBeHighlighted: null,
		};
	}

	componentDidMount() {
        let p1 = prompt("Enter Player1's name") || "Player1";
        let p2 = prompt("Enter Player2's name") || "Player2";
        
        this.setState(prevState => ({
			...prevState,
			player1: p1,
			player2: p2,
		}))
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if(squares[i] || this.state.someoneWonOrDraw)
            return;
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		
		const winner = calculateWinner(squares);
		if(winner) {
			const newState = Object.assign({}, this.state)
			if(winner[0] === 'X')
				newState.aWon = this.state.aWon + 1;
            else
				newState.bWon = this.state.bWon + 1;
			this.setState(prevState => ({
				...prevState, 
				...newState,
				history: history.concat([{
					squares: squares,
				}]),
				xIsNext: !this.state.xIsNext,
				stepNumber: history.length,
				status: 'Winner: ' + winner[0],
				someoneWonOrDraw: true,
				squaresToBeHighlighted: [winner[1], winner[2], winner[3]],
			}));

            return;
		}
		
		this.setState({
			history: history.concat([{
				squares: squares,
			}]),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length,
			status: history.length === 9 ? "Match Drawn!" : 'Next Player: ' + (!this.state.xIsNext ? 'X' : 'O'),
			draw : history.length === 9 ? this.state.draw + 1 : this.state.draw,
			someoneWonOrDraw: history.length === 9 ? true : false,
		});
	}

	handleReset() {
		this.setState(({
			history: [{
				squares: Array(9).fill(null)
			}],
			stepNumber: 0,
			xIsNext: true,
			status: 'Next Player: X',
			someoneWonOrDraw: false,
			squaresToBeHighlighted: null,
		}))
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}

	render() {
		const history = this.state.history;
    	const current = history[this.state.stepNumber];

		return (
			<div className="game">
				<Board 
					squares={current.squares}
					onClick={(i) => this.handleClick(i)}
					highlightSquares={this.state.squaresToBeHighlighted}
				/>
				<div className="game-stats">
					<div className="game-info game-info-mobile">
						<div>{this.state.status}</div>
					</div>
					<Stats
						players={[this.state.player1, this.state.player2]}
						winsCount={[this.state.aWon, this.state.bWon, this.state.draw]}
					/>
					{
						this.state.someoneWonOrDraw ? 
							<div className="reset-board">
								<button
									className="reset-board-button"
									onClick={() => this.handleReset()}
								>
									Reset Board
								</button>
							</div> : null
					}
				</div>
				<div className="game-info game-info-desktop">
					<div>{this.state.status}</div>
				</div>
			</div>
		);
	}
}

export default Game;