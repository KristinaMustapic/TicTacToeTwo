import React from 'react';
import Board from './Board';

//EXPLANATION below code

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          /*
          only example for n=3, -> "hard-coding" for other options
          logic -> squares: Array(n*n).fill(null)
          */
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        xPoints: 0,
        oPoints: 0,
        drawPoints:0,
 
      };
      this.handleClick = this.handleClick.bind(this);
      this.calculateWinner = this.calculateWinner.bind(this);
    }

     //only example for n=3, -> "hard-coding" for other options
    calculateWinner(squares) {
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
         
          return squares[a];
        }
      }
      return null;
    }


    handleClick(i) {
      //history changes as we make changes (as our table re-renders)
      let history = this.state.history.slice(0, this.state.stepNumber + 1);
      //how our table is looking at the moment 
      let current = history[history.length -1];
      //I equaled squares array with "copy" of our latest verion of it
      const squares = current.squares.slice();
      //If we have a winner , with return we stop this method execution 
      if(this.calculateWinner(squares) || squares[i]) {
        return;
      }
  
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      /*
      setState() -> legitimate way to update state after the initial state setup  
      (https://css-tricks.com/understanding-react-setstate/)
      */
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
  
  
    render() {
     const history = this.state.history;
      const current = history[this.state.stepNumber];
  
      const winner = this.calculateWinner(current.squares);
    
      if(winner === 'X')
        this.xPoints++;

      else if(winner === 'O')
      this.oPoints++;

      return (
        <div className="game">

          <div>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>

          <div className="game-info">
       
             <br />
            <div>X points: {this.state.xPoints}</div>
            <div>O points: {this.state.oPoints}</div>
            <div>Draw: {this.state.drawPoints}</div>
            <br />
            <button className = "button">New round</button>
            <br />
            <br />
            <button className = "button">New game</button>
          </div>

        </div>
      );
    }
  }


  export default Game;

    /*

  EXPLANATION /Game.js
  _______________________

   Game is a class component, 
   that represents "single source of truth" for all child components.
   It conceptually represents some kind of huge container for everything 
   we have and everything that our components have or render. Maybe,
   even better description is that it is smilar to a frame inside which
   everything is happening.
   In basis the Game component is made of nested HTML div elements.
   
   This component contains:
   
   1) method calculateWinner()
     as the name says, method checks if the condition for winning is satisfied,
     in this case is only given the example if n (board size) === 3 , following
     same logic it can be "hard-coded" for other cases -> not priority 
     for finishing task asap

   2)method  handleClick()
      explanation inside of code

   

   Inside render() method I render all components that game contains.
   
   We have 2 options after the current round finishes
   1) to start new round -> means counters for victories/draws value won't reset to zero
   2) to start completely new game -> counters for victories/draws value will reset to zero
   not coded yet -> asap finishing task
   

   This component is parent component to Board component, and is child of
   App component.
 


  */ 