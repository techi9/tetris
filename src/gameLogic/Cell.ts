export default class Cell{

    private occupied: boolean = false;
    private readonly color: string = 'cyan'
    private pos: [number, number] = [0, 0];

    constructor(pos: [number,number], color:string){
            this.color = color
            this.pos = pos
    }

    isOccupied(): boolean{
        return this.occupied
    }

    occupy(color: string){
        this.occupied = true
    }

    render(context: CanvasRenderingContext2D, x: number, y: number, size: number){
        context.fillStyle = this.color
        context.fillRect(x + this.pos[0], y + this.pos[1], size, size) //TODO: take size into account somewhere
    }
}