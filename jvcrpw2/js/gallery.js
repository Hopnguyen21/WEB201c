function upDate(previewPic) {
    // Log to check if the function is triggered
    console.log("Image hovered:", previewPic.src, previewPic.alt);

    // Get the div element where the background and text need to change
    var imageDiv = document.getElementById('image');
    
    // Update the text and background image of the div
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Reset the background image and text when mouse leaves
    var imageDiv = document.getElementById('image');

    // Reset to default
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
