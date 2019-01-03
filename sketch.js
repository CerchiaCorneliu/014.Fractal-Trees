var angle = 0;
var slider;
function setup() {
	createCanvas(1000, 1000);
	slider = createSlider(0, TWO_PI, PI/2, 0.01);
}

function draw() {
 	background(50);
 	angle = slider.value();
 	stroke(155);
 	translate(500, height);
 	branch(250);
}

 function branch(len) {
 	line(0, 0, 0, -len);
 	translate(0, -len);
 	if (len > 2) {
 		push();
 		rotate(angle);
 		branch(len * 0.67);
 		pop();
 		push();
 		rotate(-angle);
 		branch(len * 0.67);
 		pop();
 	}	
 	// line(0, 0, 0, -len * 0.67);
 }