export class products{
    name: string = "";
    stock: number = 0;

    constructor(
        name:string,
        stock:number
    ){
        this.name = name;
        this.stock = stock;
    }
}