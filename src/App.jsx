import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./Helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
 // const [userName, setUserName] = useState("");
 // const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          
        }}
      >
{gameState=="menu"? <MainMenu/>:<p>hh</p>}
         {gameState=='quiz'? <Quiz />:<div>null</div>}
         {gameState=='endscreen'? <EndScreen />:<div>null</div>}
        
        <EndScreen />
      </GameStateContext.Provider>
 <EndScreen />
    </div>
  );
}

export default App;












{/*import React,{ useState } from 'react'
import './App.css'
import MainMenu from './Components/MainMenu.jsx'
import Quiz from './Components/Quiz.jsx'
import EndScreen from './Components/EndScreen.jsx'
import {GameStateContext} from "./Helpers/Contexts"

function App() {
  const {gameState, setGameState} =("menu");
  const game =true

  return (
    <>
      <div>
        <h2>Quiz App</h2>
        <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
        }}
      >
         {gameState==="menu"? (<MainMenu/>):(<p></p>)}
         {gameState=='quiz'? <Quiz />:<div>null</div>}
         {gameState=='endscreen'? <EndScreen />:<div>null</div>}
        
         


      </GameStateContext.Provider>
    
      </div>
    </>
  )
}

export default App*/}

{/*

        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
*/}

