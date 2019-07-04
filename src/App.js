import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

//EXPLANATION below code

class App extends React.Component {

 render(){
     return(
            <div>
               <Game />
            </div>
           );
         } 

    }

export default App;


    /*

  EXPLANATION /App.js
  _______________________

   App is a class component.
   It conceptually represents some kind of huge container for everything ,
   larger one than container that contains our Game "container".
   
  parent-child relationship between components / scheme
        
          App
           |
           ˇ
          Game
           |
           ˇ
         Board
           |
           ˇ
         Square                    
         
  */ 
