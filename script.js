
const galleryThumbnails = document.querySelector('.gallery-thumbnails');
const lightboxModal = document.querySelector('.lightbox-modal');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxClose = document.querySelector('.lightbox-close');


const photos = [
    { src: 'images/pic1.jpeg', caption: 'Lamborghini' },
    { src: 'images/pic2.jpeg', caption: 'SRT' },
    { src: 'images/pic3.jpeg', caption: 'Rubicon' },
    { src: 'images/pic4.jpeg', caption: 'Range Rover' },
    { src: 'images/pic5.jpeg', caption: 'Supra' },
    { src: 'images/pic6.jpeg', caption: 'Supra' },
    { src: 'images/pic7.jpeg', caption: 'Mercedes' },
    { src: 'images/pic8.jpeg', caption: 'BMW Benz' },
    { src: 'images/pic 9.jpeg', caption: 'Suzuki Jimny' },
    { src: 'images/pic10.jpeg', caption: 'RR' },
];


photos.forEach((photo, index) => {
    const thumbnail = document.createElement('li');
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = photo.src;
    thumbnailImage.alt = photo.caption;
    thumbnail.appendChild(thumbnailImage);
    galleryThumbnails.appendChild(thumbnail);

    thumbnail.addEventListener('click', () => {
     
        lightboxModal.style.display = 'flex';
        lightboxImage.src = photo.src;
        lightboxCaption.textContent = photo.caption;

   
        currentIndex = index;
    });
});


lightboxClose.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
});

// navigate 
let currentIndex = 0;
lightboxPrev.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = photos.length - 1;
    lightboxImage.src = photos[currentIndex].src;
    lightboxCaption.textContent = photos[currentIndex].caption;
});
lightboxNext.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= photos.length) currentIndex = 0;
    lightboxImage.src = photos[currentIndex].src;
    lightboxCaption.textContent = photos[currentIndex].caption;
});

// handle keydown events
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        lightboxModal.style.display = 'none';
    } else if (event.key === 'ArrowLeft') {
        lightboxPrev.click();
    } else if (event.key === 'ArrowRight') {
        lightboxNext.click();
    }
});

// handle click outside the lightbox modal
document.addEventListener('click', (event) => {
    if (event.target === lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});