import React from 'react';

//EXPLANATION below code

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  
  export default Square;

  /*

  EXPLANATION /Square.js
  _______________________

  Square is a functional component, that receives 
  "props" (properties) from its parent component (single "source of truth").
  It conceptually represents a square inside board("table").
  In basis it is an HTML button element, and we have 
  impression of "square" thank to CSS styling that I have passed
  through class attribute that equals class name from CSS 
  document (App.css).
  I also have onclick Event Attribute that is necessary
  for sync value change. Value change happens when we click
  on certain square.

  Value can be equal to:
  1) 'X'
  2) 'O'
  3) null (We see it as an empty square)

  Square component is child component and is called 
  inside its parent component,  Board component
  (that's why I'll need to import Square component
  inside Board component).


  */ 

