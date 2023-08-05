let bottle = document.getElementById('bottle');
let isAnimating = false; // Flag to track animation statess

function getItemFromLocalStorage() {
    let storedDeg = localStorage.getItem('deg');
    storedDeg = JSON.parse(storedDeg);
    if (storedDeg === null) {
        return 0;
    } else {
        return storedDeg;
    }

}

bottle.style.transform = `rotate(${getItemFromLocalStorage()}deg)`;

function start() {
    if (isAnimating) {
        return; // Don't start a new animation if one is already running
    }

    isAnimating = true; // Set the flag to indicate animation is in progress

    let randomNumber = Math.ceil(Math.random() * 360) + (360 * 5);
    let deg = getItemFromLocalStorage();
    localStorage.setItem('deg', JSON.stringify(randomNumber - (360 * 5)));
    let startingRotation = setInterval(function() {
        bottle.style.transform = `rotate(${deg}deg)`;
        deg += 2;
        if (deg > randomNumber) {
            clearInterval(startingRotation);
            isAnimating = false; // Reset the flag when animation is done
        }
    }, 1);
}
