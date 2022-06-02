function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#e3d5ca");
}

function draw() {
	background("#e3d5ca")
	noFill()
	strokeWeight(3)
	var clr1="#d89a9e"
	var clr2="#22333b"
	var clr3="#846267"
	for (var x=0;x<width;x=x+100){
	for (var y=0;y<height;y=y+100){
		rectMode(CENTER)
		stroke(clr1)
		rect(x+50,y+50,map(mouseX,50,width,270,100))
		stroke(clr2)
		ellipse(x+50,y+50,map(mouseX,50,width,150,100));
		stroke(clr3)
		square(x+50, y+50, map(mouseX,50,width,100,80), 20) 
		
	
	}
	}
	}
	
	/*for(var x = 0;x<width;x=x+windowWidth){
		for(var y = 0;y<height;y=y+windowHeight){
			push()
				rect(x,0,100) 
				ellipse(x,y,100);
				rect(x,y,70)
			POP()
		}
			}
		
			*/
		
