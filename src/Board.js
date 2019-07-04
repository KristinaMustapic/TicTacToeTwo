import React from 'react';
import Square from './Square';
import './App.css';

//EXPLANATION below code

class Board extends React.Component {
  renderSquare(i) {
    const squares = this.props.squares;
    return <Square value={squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  

  render() {

 let n = 0;
  do{
  n = Math.floor(Math.random()*10);
  } while(!(n>2 && n<7));

  const a = n;

    if(a === 3){
    return (
      <div>
        <h1>The board size is {n}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
    }
    
    else if (a === 4){
          return (
      <div>
        <h1>The board size is {n}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
         <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    );
    }
  
        else if (a === 5){
          return (
      <div>
        <h1>The board size is {n}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
         <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
         <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
        </div>
      </div>
    );
    }
    
    //the only left possibility left is 6, so I can use "else", instead of "else if"
            else {
          return (
      <div>
        <h1>The board size is {n}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          
        </div>
         <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)} 
          {this.renderSquare(22)}
          {this.renderSquare(23)}
           
        </div>
         <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
       
       <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
      </div>
    );
    }
    
      
   }}
   export default Board; 



  /*

  EXPLANATION /Board.js
  _______________________

   Board is a class component, 
   that receives "props" (properties) from its parent component (single "source of truth").
   It conceptually represents a  board ("table").
   In basis the Board component is made of nested HTML div elements,
   and thank to basic CSS styling here appears impression of game table.
   
   Board component also has renderSquare() method. It returns Square as 
   user-defined component (https://reactjs.org/docs/components-and-props.html),
   so simplified way to describe what this function does would be something 
   like: when we click on certain Square (onClick), that Square has its index (i)
   and I want to change its (squares[i]) currently value to new one.

   This component is parent component to Square component, and is child of
   Game component.
   
   Questions:

    1) How to apply the concept of loops; in this case of for "loop"
    for rendering components, that is needed for creating my board game
    , whose size will be changed based on received n value, while
    starting a new game
     
    a) I have 4 possibilities n € <2,7> so I can make for "code copies"(x4), that 
    are adjusted to board size, I see that there will be a lot of similar code,
    so I want to reduce that needless code 
    ("hard-coding" -> conditional rendering -> not the best solution,
    needs to be faster)
    , in way explained in question above.
    
    b) try to realizing how to use loops in React
    (https://flaviocopes.com/react-how-to-loop/)
    (https://stackoverflow.com/questions/22876978/loop-inside-react-jsx)

   * 2) How to get valid value of n?
   I have several ideas:
   a) standard input field, this is not good solution, let's
      consider situation that my user's input is not valid,
      so appropriate message should be written as a warning...
      that's too long. So I came up to ideas how to disable
      user's invalid input

   * b) by using tags as <select> and <option>, in 
       that way I don't give user possibility for invalid input.
       (Catching option's value and assigning it to a variable
       not working for now, similar problems -> forum -> need learn how to use refs
       "recommend using refs instead of state" ), not the central problem for
       finishing this task asap -> ignore for now
       
       (
    How to realize the example down below in React?

    let n = document.getElementsByName("boardSize").value;

<select ref="boardSize">
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
</select>
        )

        

   c) similar to b), by using <input type="radio"

   d) So I made "improvisation", by getting random number
      from interval <2,7>, so let's pretend that computer
      has guessed number that user wanted to choose
   
    ...Future problems with my "improvisation":
     Following "top-down data flow" logic my board size should "somehow"
     be initialized inside Game component, but when I put whole expression
     inside Game component's state, error occurs. Error dissapears if I 
     put expression inside Game's render() method, but then I won't be able to
     reach that value from Board component (because you can only reach values
     from another component's state) 
      Q: How to solve this?  
      
      So, by leaving code this way it will render the table of size n*n, but
      because of possible async values of n in Board and Game, from this point
      it won't be able to work properly any further.


  */ 
  