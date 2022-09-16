export default function initGame(){



    let gameElement : Element | null = document.getElementsByClassName('game').item(0)
    gameElement?.classList.remove('hidden-game')
}
