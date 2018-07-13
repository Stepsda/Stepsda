var rectsize = 300;
var xturn = false;
var yturn = false;
var xstep = 0;
var ystep = 0;
var hLines = [];
var vLines = [];
var xoffset = 7;
function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	smooth(8);
	canvas.parent('background');
	for (var i = 0; i < windowHeight; i += 20) {
		var div = new hLine(i);
		hLines.push(div);
	}
	for (var i = windowWidth*0.35+xoffset; i < windowWidth; i += 20) {
		var div = new vLine(i);
		vLines.push(div);
	}
}
function draw() {
	stroke(132,131,130);
	strokeWeight(1);
	for (var i = 0; i <= 3; i++) {
		rect(windowWidth*0.35+rectsize*i-10*i, windowHeight+20+i*10-rectsize*(i+1), rectsize, rectsize, 15);
	}
	stroke(255,255,255);
	fill(255,255,255);
	for (var i = 0; i <= 3; i++) {
		rect(windowWidth*0.35+1+rectsize*i-i*10, windowHeight+21+i*10-rectsize*(i+1), rectsize, rectsize, 15);
	}
	strokeWeight(1);
	for (var i = 0; i < hLines.length; i++) {
		hLines[i].update();
	}
	for (var i = 0; i < vLines.length; i++) {
		vLines[i].update();
	}
	stroke(255,255,255);
	fill(255,255,255);
	ellipse(windowWidth*0.35+rectsize-7,windowHeight-rectsize+22,10,10);
	ellipse(windowWidth*0.35+rectsize*2-16,windowHeight-rectsize*2+22+10,10,10);
	ellipse(windowWidth*0.35+rectsize*3-26,windowHeight-rectsize*3+22+20,10,10);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function vLine(x) {
	this.x = x;
	this.update = function() {
		var current = Math.ceil((this.x - windowWidth*0.35) / rectsize);
		console.log(this.x + " " + current);
		for (var i = -3; i <= 3; i++) {
			if (((windowWidth*0.35+rectsize*current-10*current+i) % (this.x) == 0)) {
				strokeWeight(0);
			}
		}
		line(this.x, 0, this.x, windowHeight);
		if (this.x >= windowWidth) {
			this.x = windowWidth*0.35+xoffset;
		} else {
			this.x++;
		}
		strokeWeight(6);
	}
}

function hLine(y) {
	this.y = y;
	this.update = function() {
		var current = Math.ceil(this.y / rectsize);
		for (var i = -3; i <= 3; i++) {

			if (((windowHeight-rectsize*current+10+current*10+i) % (windowHeight-this.y) == 0) && current != 4) {
				strokeWeight(0);
			}
		}
		line(windowWidth*0.35, windowHeight-this.y, windowWidth, windowHeight-this.y);
		if (this.y >= windowHeight) {
			this.y = 6;
		} else {
			this.y++;
		}
		strokeWeight(6);
	}
}

