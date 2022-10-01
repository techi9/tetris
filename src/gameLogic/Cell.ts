export default class Cell{

    private occupied: boolean = false;
    private color: string = 'cyan'

    constructor(){ //TODO: add set width and height

    }

    isOccupied(): boolean{
        return this.occupied
    }

    occupy(color: string){
        this.occupied = true
    }

    render(context: CanvasRenderingContext2D, x: number, y: number, size: number){
        context.fillStyle = this.color
        context.fillRect(x, y, size, size)
    }

}