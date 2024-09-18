// 可以被放置在一个单独的 .js 文件中
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const toggleButton = document.getElementById('toggleButton');
let isDarkened = false;

// Function to update the main image when a thumbnail is clicked
function updateMainImage(event) {
  const fullSizeUrl = event.target.getAttribute('data-full-size');
  mainImage.src = fullSizeUrl;
}

// Event listeners for each thumbnail click
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', updateMainImage);
});

// Darken/Lighten functionality
function toggleBrightness() {
  if (isDarkened) {
    mainImage.style.filter = 'brightness(1)'; // 恢复原亮度
  } else {
    mainImage.style.filter = 'brightness(0.5)'; // 变暗
  }
  isDarkened = !isDarkened; // 切换isDarkened的值
}

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleBrightness);
