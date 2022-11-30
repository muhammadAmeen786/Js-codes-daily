// In this module we are gonna learn about the functional programming aspect of the javascript.
// Higher order functions in js are the functions which take the functions as input or return fucntions ;
let radius = 20;

function area(radius,logic){
    return 2*Math.PI*radius*radius;
}

function circumference(radius){
    return 2*Math.PI*radius;
}
function diameter(radius){
    return 2*radius;
}

function calculate(radius , logic){
    return logic(radius); // here we used logic as a function which is returned; Hence our fxn 
                          // calculate is higher order function.
}

console.log('Diameter of circle  is ' + calculate(radius,diameter));
console.log('Area of circle  is ' + calculate(radius,area));
console.log('Circumference  of circle  is ' + calculate(radius,circumference));