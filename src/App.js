import React from "react";
import "./style.css";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

var PLAYERS = [
  { name: "john", score: 45, id: 1 },
  { name: "coller", score: 20, id: 2 },
  { name: "jack", score: 12, id: 3 }
];
var nextId = 4;

var App = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    initialPlayers: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired
      })
    ).isRequired
  },
  getDefaultProps: function() {
    return {
      title: "Score board",
      initialPlayers: PLAYERS
    };
  },
  getInitialState: function() {
    return {
      players: this.props.initialPlayers
    };
  },

  onScoreChange: function(index, delta) {
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  onPlayerAdd: function(name) {
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId
    });
    this.setState(this.state);
    nextId++;
    console.log(name);
  },
  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },
  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function(player, index) {
              return (
                <Player
                  onScoreChange={function(delta) {
                    this.onScoreChange(index, delta);
                  }.bind(this)}
                  onRemove={function() {
                    this.onRemovePlayer(index);
                  }.bind(this)}
                  name={player.name}
                  score={player.score}
                  key={player.id}
                />
              );
            }.bind(this)
          )}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
});

export default App;
