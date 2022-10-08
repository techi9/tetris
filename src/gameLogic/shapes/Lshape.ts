import Shape from "./shape";
import Cell from "../Cell";

class Lshape extends Shape{

    constructor(color: string) {
        super(color);
    }

    createShape(): Cell[] {

        let cellsPos: [number,number][] = [
            [0,0],
            [0,1],
            [0,-1],
            [-1,-1]
        ];

        return [
            new Cell(cellsPos[0], this.color),
            new Cell(cellsPos[1], this.color),
            new Cell(cellsPos[2], this.color),
            new Cell(cellsPos[3], this.color)
        ];
    }

}