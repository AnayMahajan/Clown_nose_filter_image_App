function preload(){
    clownNose= loadImage('https://i.postimg.cc/QNzbHNRP/Clown-nose-removebg-preview.png');
}
noseX= 0;
noseY= 0;

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(200, 45, 89);
    stroke(0, 255, 0);
    image(clownNose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('Filter_img.png');
}
function modelLoaded(){
    console.log("Model is initialized");
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x= " + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);
        noseX= results[0].pose.nose.x-15;
        noseY= results[0].pose.nose.y-15;
    }
}
