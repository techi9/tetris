export default function initGame(){
    let gameElement : Element | null = document.querySelector('.game')
    gameElement?.classList.remove('hidden-game')

    let canvasBoardElement = document.getElementById('#game-canvas') as HTMLCanvasElement
    let canvasNextPieceElement = document.getElementById('#next-piece-canvas') as HTMLCanvasElement

    let game = new Game(canvasBoardElement, canvasNextPieceElement)

}

class Game{

    private canvasBoardDomElement: HTMLCanvasElement;
    private canvasNextPieceDomElement: HTMLCanvasElement;

    private height = 400
    private width = 100

    constructor(canvasBoardDomElement: HTMLCanvasElement, canvasNextPieceDomElement: HTMLCanvasElement) {
        this.canvasBoardDomElement = canvasBoardDomElement
        this.canvasNextPieceDomElement = canvasNextPieceDomElement


    }
}
