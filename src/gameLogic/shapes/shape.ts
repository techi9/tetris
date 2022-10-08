import Cell from "../Cell";

export default abstract class Shape{
    protected color: string;
    protected locals: Cell[] = [];
    private pos: [number, number] = [0, 0];

    protected constructor(color: string) {
        this.color = color;
        this.locals = this.createShape();
    }

    public render(context: CanvasRenderingContext2D, size: number){
        this.locals.forEach((cell) => {
            cell.render(context, this.pos[0], this.pos[1], size);
        });
    }

    abstract createShape(): Cell[];


}