function removeImage(src, width, height, alt) {
    console.log("La santa messa detta dal prete si tiene di domenica");
    const element = document.getElementById(bugImageId);
    element.remove();
}

function showImage(src, width, height, alt, imageId) {
    console.log("Image position: e com t piacess");
    let img = document.createElement("img");
    img.setAttribute("id", imageId);
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.style.position = 'absolute';
    img.style.top = (document.body.clientHeight - width - padding) * Math.random() + 'px';
    img.style.left = (document.body.clientWidth - width - padding) * Math.random() + 'px';

    document.body.appendChild(img);
}

function moveBugImage() {
    removeImage()
    showImage("assets/bug.png", width, height, 'bug', bugImageId);

    if (clickCount < requiredClicks) {
        clickCount++;
        document.getElementById('bug').addEventListener('click', () =>
            moveBugImage()
        )
    } else {
        console.log("You win!");
        window.location.href = "../pay-attention/";
    }

}

const bugImageId = 'bug';
const width = 20;
const height = 20;
const padding = 60;
const requiredClicks = 10;
let clickCount = 0;

moveBugImage();


