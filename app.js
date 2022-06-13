const boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mousedown", (event) => {
        let targetElement = event.currentTarget;
        
        // Determine the position
        let xPos = parseInt(targetElement.style.left);
        let yPos = parseInt(targetElement.style.top);

        // Determine the position of where in the box the mouse was clicked

        let xDiff = event.clientX - xPos;
        let yDiff = event.clientY - yPos;

        function moveBox(event) {
            targetElement.style.left = (event.clientX - xDiff) + "px";
            targetElement.style.top = (event.clientY - yDiff) + "px";
        }

        function end(event) {
            document.removeEventListener("mousemove", moveBox, true);
            // document.removeEventListener("mouseup", end, true);
        }
        
        document.addEventListener("mousemove", moveBox, true);
        document.addEventListener("mouseup", end, true);

    }, false);
}
