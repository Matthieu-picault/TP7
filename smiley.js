function get2DContext(id){
	let canvas = document.getElementById(id);
	let context = canvas.getContext("2d");
	return context;
}

function canvasApp(){
    let context = get2DContext("smiley");
    
    context.beginPath();
    context.lineWidth = 3;
    context.arc(100,100,75,0,360);
    context.fillStyle="Yellow";
    context.fill();

    context.beginPath();
    context.lineWidth = 1;
    context.arc(65,70,10,0,360);
    context.fillStyle="Black";
    context.fill();
    context.stroke();

    context.beginPath();
    context.lineWidth = 1;
    context.arc(100,100,75,0,360);
    context.stroke();

    context.beginPath();
    context.arc(135,70,10,0,360);
    context.fill();

    context.beginPath();
    context.arc(99,120,35,0,Math.PI);
    context.lineWidth = 6;
    context.stroke();

    context.textBaseLine = "middle";
    context.textAlign = "center";
    context.font = "italic 20px sans-serif";
    context.fillText("Hello Canvas",100,200);


}
function main(){
    canvasApp();
}

main();
