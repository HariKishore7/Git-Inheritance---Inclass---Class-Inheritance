// import using require

// declare class


// export class using module.exports
// import Shape from './shape';
const Shape=require('./shape');
class Circle extends Shape{
    constructor(){
        //this constructor should call super class first
        super();
    }
    calculateArea(){
        console.log("Area of circle color is: "+this.color);
        return 3.14*5*5;
        //comment added
    }
}
module.exports=Circle;//for exporting the circles class