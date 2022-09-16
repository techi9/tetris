import initForm from './initForm'
import initGame from './game/game'

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
  
    Game
  
  </div>
`

initForm(initGame)


