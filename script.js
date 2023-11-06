function scrollPage() {
    const pageHeight = window.innerHeight;
    const currentPosition = window.scrollY;
    const targetPosition = currentPosition + pageHeight;
    const animationDuration = 750; // You can adjust the duration as needed (in milliseconds)
    const startTime = performance.now();

    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < animationDuration) {
            const nextPosition = currentPosition + (targetPosition - currentPosition) * (elapsedTime / animationDuration);
            window.scrollTo(0, nextPosition);
            requestAnimationFrame(scrollAnimation);
        } else {
            window.scrollTo(0, targetPosition);
        }
    }

    requestAnimationFrame(scrollAnimation);
}



const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }


    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })

    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

// JavaScript
const nameElement = document.getElementById('name');
const jobTitleElement = document.getElementById('job-title');

function startNameAnimation() {
  nameElement.style.animation = 'typing-name 3s steps(20) 1';
}

function startJobTitleAnimation() {
  jobTitleElement.style.animation = 'typing-job-title 3s steps(20) 1';
}

// Initially, hide the job title element
jobTitleElement.style.display = 'none';

// Start the name animation first
startNameAnimation();

// Wait for the name animation to finish and then show and start the job title animation
nameElement.addEventListener('animationend', function () {
  jobTitleElement.style.display = 'block';
  startJobTitleAnimation();
});
