   class ground{
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
fill(0,255,255);
rect(this.x,this.y,this.w,this.h);

   }   
   }