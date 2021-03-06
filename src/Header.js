import React from "react";
import StopWatch from "./StopWatch"

function Stats(props) {
  var totalPlayers = props.players.length;
  var totalPoints = props.players.reduce(function(total, player) {
    return total + player.score;
  }, 0);
  return (
    <div className="stats">
      <table>
        <tbody>
          <tr>
            <td>Players: </td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total points: </td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
Stats.propTypes = {
  players: React.PropTypes.array.isRequired
};
function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <StopWatch />
    </div>
  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};

export default Header;
