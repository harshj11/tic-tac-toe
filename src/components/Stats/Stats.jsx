import React from 'react';
import './stats.css';

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stats-container">
                <div className="player-info">
                    <span className="player-name">{this.props.players[0]}</span>
                    <span className='player-score'>{this.props.winsCount[0]}</span>
                </div>
                <div className="player-info">
                    <span className="player-name">{this.props.players[1]}</span>
                    <span className='player-score'>{this.props.winsCount[1]}</span>
                </div>
                <div className="player-info">
                    <span className="player-name">Draw</span>
                    <span className='player-score'>{this.props.winsCount[2]}</span>
                </div>
            </div>
        )
    }
}

export default Stats;