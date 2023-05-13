//Get DOM elements for image carousel
const wrapper = document.querySelector(".wrapper"), 
carousel = document.querySelector(".carousel"),
images = document.querySelectorAll("img"),
buttons = document.querySelectorAll(".button");

let imageIndex = 1, 
intervalID; 

//Define function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalID = setInterval(() => slideImage(++imageIndex), 2000);
};

//Call autoSlide function on page load
autoSlide(); 

//function that updates the carousel display to show the specified image
const slideImage = () => {
    // Calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Update the carousel display to show the specified image 
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
}; 

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalID); 
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1: -1; 
    slideImage(imageIndex);
    //Restart the automatic slide
    autoSlide();
    
};

//Add event listeners to the navigation buttons

buttons.forEach(button => button.addEventListener("click", updateClick));

// Add mouse over event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalID)); 

// Add mouseleave event listener to wrapper element to start autos liding again
wrapper.addEventListener("mouseleave", autoSlide);