import React from "react";
import Counter from "./Counter";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <Counter
            onChange={this.props.onScoreChange}
            score={this.props.score}
          />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
};

export default Player;
