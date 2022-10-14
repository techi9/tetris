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

    addGlobalPos(pos:[number, number]){
        this.pos[0] += pos[0]
        this.pos[1] += pos[1]
    }

    render(context: CanvasRenderingContext2D, x: number, y: number, size: number){
        context.fillStyle = this.color
        context.fillRect((x + this.pos[0]) * size, (y + this.pos[1]) * size, size, size) //TODO: (+) take size into account somewhere
    }
}