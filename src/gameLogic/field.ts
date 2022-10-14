import Cell from "./Cell";
import Shape from "./shapes/shape";

class Field{

    private cells: Cell[] = [];
    private fallingShape?: Shape;
    private intervalId?: ReturnType<typeof setInterval>;


    constructor() {

    }

    startGame(){
        this.intervalId = setInterval(() => {
            this.update();
        })
    }

    private update() {
        if (this.fallingShape === undefined) {
            this.fallingShape = this.createRandomShape();
        }
        else {
            this.moveFallingShape(0, 1);
        }
    }

    private createRandomShape(): Shape {
        //TODO
    }

    private moveFallingShape(x: number, y: number) {
       //TODO add intersection check
    }
}