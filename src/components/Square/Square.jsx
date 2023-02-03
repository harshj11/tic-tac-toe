import './square.css';

function Square(props) {
	return (
		<button 
			className={"square" + ((props.value === "X" ? " square-x" : (props.value === "O") ? " square-o" : "")) + ((props.highlightThisSquare ? " highlight " : ""))}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Square;