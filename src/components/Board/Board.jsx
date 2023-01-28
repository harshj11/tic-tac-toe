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
		for(let i = 0; i < boardDimension; i++) {
			let currentRow = [];
			for(let j = 0; j < boardDimension; j++) {
				currentRow.push(this.renderSquare(squareNo++));
			}
			squares.push(<div className="board-row" key={i + 100}>{currentRow}</div>);
		}
		return squares;
	}
	
	render() {
		return (
			<div>
				{this.renderSquares(3)}
			</div>
		);
	}
}

export default Board;