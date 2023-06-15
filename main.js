noseX= 0
noseY=0
lefteyeX=0
lefteyeY=0


function preload(){
    mustache= loadImage("https://i.postimg.cc/50hyxjKj/mustache-by-hurricamo-on-deviantart-10.png");
    sunglasses= loadImage("https://i.postimg.cc/nz2xWr86/sunglasses.png");
}  

function setup(){
    canvas=createCanvas(300,300)
        canvas.center()
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
}

function draw(){
image(video, 0, 0 ,300, 300)
image(mustache, noseX-15, noseY, 30, 30);  
image(sunglasses,lefteyeX -55 , lefteyeY -35, 80,80);
}

function take_snapshot(){
     save("myFilterimage.png");
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length> 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        lefteyeX= results[0].pose.leftEye.x;
        lefteyeY=results[0]. pose.leftEye.y;
        console.log("nose x="+ noseX);
        console.log("nose y="+ noseY);
        console.log("lefteyeX="+ lefteyeX)
        console.log("lefteyeY"+ lefteyeY);

    }
   
  
}