// Create event listeners
document.getElementById('test').addEventListener('mousedown', mouseDown);
document.getElementById('test').addEventListener('mouseup',mouseUp)
document.getElementById('test').addEventListener('mousemove',mouseMove)

// Define variables
var locked = false;
var CordStart;
var CordEnd;

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

        console.log('right');

    }else{

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

