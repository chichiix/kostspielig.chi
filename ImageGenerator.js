const images = [
    'resources/images/Eis.jpg',
    'resources/images/Macaron.jpg',
    'resources/images/Steak.jpg',
    'resources/images/Avocado.jpg',
];

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to place a random image at a random position
function placeRandomImage() {
    const imageContainer = document.getElementById('image-container');

    // Select a random image from the array
    const randomImageSrc = images[getRandomInt(0, images.length - 1)];

    // Create an image element
    const img = document.createElement('img');
    img.src = randomImageSrc;
    img.classList.add('random-image');

    // Generate random positions within the container
    const containerWidth = imageContainer.clientWidth;
    const containerHeight = imageContainer.clientHeight;
    const randomX = getRandomInt(0, containerWidth - img.width);
    const randomY = getRandomInt(0, containerHeight - img.height);

    // Apply the random positions
    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;

    // Append the image to the container
    imageContainer.appendChild(img);
}

// Call the function to place a random image
placeRandomImage();
