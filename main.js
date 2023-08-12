function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.parent();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
}

function modelloaded()
{
    console.log('model is loaded!');
}

document.addEventListener("DOMContentLoaded", function() {
    var statusElement = document.getElementById("status");
    var content = statusElement.textContent.trim();
    
    if (content === "") {
      statusElement.style.display = "none";
    }
  });