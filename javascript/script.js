const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

const items = document.querySelectorAll('.portfolio-description');

const options = {
  threshold: 0.5
} // removed option since i couldnt figure out how to make it work while in a smaller screen


function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn)

items.forEach(item => {
  observer.observe(item);
})

const imgLinks = document.getElementsByClassName('img-link')
const imgDesc = document.getElementsByClassName('portfolio-description')[0]

let currentIndex = 0;

let imgHref = ["https://neural-bird.netlify.app/", "https://github.com/godotengine/godot/pull/68625", "https://duetprosper-urbanjanet.codio.io/index.html"]

let imgConfig = {
href: ["https://neural-bird.netlify.app/", "https://github.com/godotengine/godot/pull/68625", "https://duetprosper-urbanjanet.codio.io/index.html"],

desc: ["Modified a neural network to be trained and executed on low resource hardware (Web browser & Meta Quest 2", "Adapted to a large scale project's codebase and added a requested feature", "Portfolio Website demonstrating different web development concepts"]

}

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
  for (let i = 0; i < imgLinks.length; i++) {
    imgLinks[i].href = imgConfig.href[currentIndex];
  }
  imgDesc.innerText = imgConfig.desc[currentIndex];
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
  for (let i = 0; i < imgLinks.length; i++) {
    imgLinks[i].href = imgConfig.href[currentIndex];
  }
  imgDesc.innerText = imgConfig.desc[currentIndex];

}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
  for (let i = 0; i < imgLinks.length; i++) {
    imgLinks[i].href = imgConfig.href[currentIndex];
  }

  imgDesc.innerText = imgConfig.desc[currentIndex];

}

initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});
