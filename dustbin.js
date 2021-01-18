     class dustbin{
     constructor(x,y,w,h) {

var opt={isStatic:true}
this.body=Bodies.rectangle(x,y,w,h,opt);
this.x = x;
this.y = y;
this.w = w;
this.h = h;

World.add(world,this.body);
     
   }

   display() {
var pos=this.body.position;
   push()
fill(0,255,0);
rectMode(CENTER);
rect(this.x,this.y,this.w,this.h);
pop()
   }   
   }

     

     