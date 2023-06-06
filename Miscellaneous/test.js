let j = 1;
console.log(j);

for (let i = 0; i < 5; i++) {
    console.log('hello world');
}

const colors = ['red', 'blue', 'green']
for(let color of colors){
    console.log(color);
}

let i = 1;
let c = 10;

multi(i, c);

function multi(a, b){
    console.log(i * c);
}

const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

// Factory Function
function createCircle(radius) {
    return{
        // this is same as radius: radius
        radius,
        // this is same as function draw(){...}
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

// Constant Function *pick this instead of Factory Function*
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle2 = new Circle(3);