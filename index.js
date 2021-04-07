/**
 * current position of all images, 0vw is the first image, +80vw is the second image,...
 * @type {number}
 */
let position = 0;
console.log(position);

/**
 * put images in array (HTML Selection.children)
 * @type  {Array of img Elements}
 */
let images = [...document.querySelector('.slider-image-container').children];

/**
 * get the left nav button from DOM
 * @type  {Object}
 */
let buttonLeft = document.querySelector('#left');

/**
 * get the right nav button from DOM
 * @type  {Object}
 */
let buttonRight = document.querySelector('#right');

/**
 * move images to the right side, if you click left the images move to the right side
 */
function left() {
  //stop moving at the end
  if (!(position >= 0)) {
    position = position + 80; //swipe all pictures to the right
    console.log(position);
  };

  //move each image
  images.forEach((image) => {
    image.style.transform = `translateX(${position}vw)`;
  });
};

/**
 * move images to the left side, if you click right the images move to the left side
 */
function right() {
  //stop moving at the end
  if (!(position <= -160)) {
    position = position - 80;
    console.log(position);
  }

  //move each image
  images.forEach((image) => {
    image.style.transform = `translateX(${position}vw)`
  });
};

/**
 * Listening for right button clicks
 */
buttonRight.addEventListener('click', (event) => {
  right();
});

/**
 * Listening for left button clicks
 */
buttonLeft.addEventListener('click', (event) => {
  left();
});
