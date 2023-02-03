import React from 'react';
import './board.css';
import Square from '../Square/Square';

class Board extends React.Component {
	renderSquare(i, hightlight) {
		return (
			<Square 
				value={this.props.squares[i]} 
				onClick={() => this.props.onClick(i)}	
				key={i + 10}
				highlightThisSquare={hightlight}
			/>
		);
	}

	renderSquares(boardDimension) {
		let squares = [], squareNo = 0, highlightThis = Array(9).fill(false);
		
		if(this.props.highlightSquares) {
			for(const sqNo of this.props.highlightSquares)
				highlightThis[sqNo] = true;
		}

		for(let i = 0; i < boardDimension * boardDimension; i++)
			squares.push(this.renderSquare(squareNo++, highlightThis[i]));
		
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