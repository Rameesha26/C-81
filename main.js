var canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(320,200,50,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(440,200,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(250,250,50,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(380,250,50,0,2*Math.PI);
ctx.stroke();