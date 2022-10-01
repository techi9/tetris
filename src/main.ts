import initForm from './initForm'
import initGame from './gameLogic/game'

import './style.css'
import './welcome.css'
import './game.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="welcome">
  
    <h1> Tetris </h1>
    
    <form id="name_form">
        <input id="input_field" type="text" placeholder="Your name"/>
        <input id="start_button" type="submit" value="Start"/>
    </form>
  </div>
  
  <div class="game hidden-game"> 
  
    <div class="game-info">
        <section class="name"> User: <div class="value"> 0 </div></section>
        <section class="level"> Level: <div class="value"> 0 </div></section>
        <section class="score"> Score: <div class="value"> 0 </div></section>
    </div>
    
    <div class="game-container">
        <h1>Tetris</h1>
        <div class="game-board">
            <canvas id="game-canvas" width="200" height="400"/>
        </div>
    </div>
    
    <div class="next-piece">
        <h2> Next piece </h2>
        <canvas id="next-piece-canvas" width="100" height="100"/>
    </div>
  
  </div>
`

initForm(initGame)


