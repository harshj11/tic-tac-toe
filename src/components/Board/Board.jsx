import React from 'react';
import './board.css';
import Square from '../Square/Square';

class Board extends React.Component {
	renderSquare(i) {
		return (
			<Square 
				value={this.props.squares[i]} 
				onClick={() => this.props.onClick(i)}	
				key={i + 10}
			/>
		);
	}

	renderSquares(boardDimension) {
		let squares = [], squareNo = 0;
		for(let i = 0; i < boardDimension * boardDimension; i++)
			squares.push(this.renderSquare(squareNo++));
		
		return squares;
	}
	
	render() {
		return (
			<div className="game-board">
				{this.renderSquares(3)}
			</div>
		);
	}
}

export default Board;