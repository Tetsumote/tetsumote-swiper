// Define variables
var locked = false;
var CordStart;
var CordEnd;
var slideIndex = 0;
let slides = document.querySelectorAll('#test li')
console.log(slides.length)


// Create event listeners
document.getElementById('test').addEventListener('mousedown', mouseDown);
document.getElementById('test').addEventListener('mouseup',mouseUp)
document.getElementById('test').addEventListener('mousemove',mouseMove)
document.querySelector('.prev').addEventListener('click',prev)
document.querySelector('.next').addEventListener('click',next)


function prev(){
    slides[slideIndex].classList.remove('active')
    console.log(slideIndex)
    if(slideIndex === 0){
        slideIndex = slides.length - 1
    }else{
        slideIndex = slideIndex - 1
    }
    slides[slideIndex].classList.add('active')

}
function next(){
    console.log('next');
    slides[slideIndex].classList.remove('active')
    if(slideIndex === 4){
        slideIndex = 0
    }else{
        slideIndex = slideIndex + 1
    }
    slides[slideIndex].classList.add('active')
}


// Triger mouseDown event
function mouseDown(e){

    // Bind coordinates to variables
    var x = e.clientX;
    var y = e.clientY;

    // Change state of locked to access mouseMove 
    // trigering coordinates
    locked = true;

    document.getElementById('demo').innerHTML = "Coordinates: (" + x + "," + y + ")";
    CordStart = x;
}

// Triger mouesUp event
function mouseUp(e){

    // Lock trigering coordinates in mouseMove
    locked = false;

    var x = e.clientX;
        
    // Define last position of x coordinates
    CordEnd = x;

    // Check in which direction user swipe
    if(CordStart < CordEnd){
        document.querySelector('.next').click()
        console.log('right');

    }
    if(CordStart > CordEnd){
        document.querySelector('.prev').click()
        console.log('left');
        
    }

}

// Triger mouseMove event
function mouseMove(e){

    if(locked){
        
        var x = e.clientX;
        var y = e.clientY;

        // Show coordinates
        document.getElementById('demo').innerHTML = "Coordinates: (" + x + "," + y + ")"

    }
}

