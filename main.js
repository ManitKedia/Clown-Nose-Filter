noseX = 0;
noseY = 0;

function preload() 
{
    clown_nose = loadImage('https://i.postimg.cc/k5MYMxT4/CNose.png');
}

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 450, 400);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
}

function take_snapshot()
{
    save('My image.jpeg')
}

function modelLoaded()
{
    console.log('Pose Net is Loaded');
}

function gotPoses(results)
{
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x -5;
        noseY = results[0].pose.nose.y -5;
        console.log("nose x = " +noseX);
        console.log("nose y = " +noseY);
    }
}