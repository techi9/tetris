import Cell from "../Cell";

export default abstract class Shape{
    protected color: string;
    protected locals: Cell[] = [];
    private pos: [number, number] = [0, 0];

    protected constructor(color: string) {
        this.color = color;
        this.locals = this.createShape();
    }

    public getPos() : [Number, Number]{
        return this.pos
    }

    public setPos(x: number, y: number){
        this.pos = [x, y];
    }

    public move(x: number, y: number){
        this.pos[0] += x;
        this.pos[1] += y;
    }

    //rotate locals 90 degree TODO
    public dispose(): Cell[] {
        this.locals.forEach((cell) => {
            cell.addGlobalPos(this.pos)
        });

        return this.locals
    }

    public render(context: CanvasRenderingContext2D, size: number){
        this.locals.forEach((cell) => {
            cell.render(context, this.pos[0], this.pos[1], size);
        });

    }

    abstract createShape(): Cell[];
}