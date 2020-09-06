// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let currentHeightNum = Number(spaceShuttleHeight.textContent);
    
    takeoff.addEventListener("click", function(){
        let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (confirmTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "skyBlue";
            currentHeightNum += 10000;
            spaceShuttleHeight.textContent = currentHeightNum;
        }
    })

    let landing = document.getElementById("landing");

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.textContent = 0;
    })

    let missionAbort = document.getElementById("missionAbort");

    missionAbort.addEventListener("click", function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission");
        if (confirmAbort) {
            flightStatus.textContent = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.textContent = 0;
        }
    });

    let rocket = document.getElementById("rocket");
    console.log(typeof rocket.style.left);
    
    let moveVertical = document.getElementsByClassName("move-vertical")
    for (let i = 0; i < moveVertical.length; i++) {
        moveVertical[i].addEventListener("click", function() {
            currentHeightNum = Number(spaceShuttleHeight.textContent)
            if (i === 0) {
                //up button clicked
                spaceShuttleHeight.textContent = currentHeightNum + 10000;
            } else {
                //down button clicked
                if (currentHeightNum > 0) {
                    spaceShuttleHeight.textContent = currentHeightNum - 10000;
                }
            }
        })
    }

    let moveHorizontal = document.getElementsByClassName("move-horizontal");
    for (let i = 0; i < moveHorizontal.length; i++) {
        moveHorizontal[i].addEventListener("click", function() {
            if (i === 0) {
                //right button clicked
                console.log("0 pressed");
                rocket.style.number = Number(rocket.style.number) + 10 + 'px';
                console.log(typeof rocket.style.left);
            } else {
                //left button clicked
                console.log("1 pressed");
                
                
            };
        });
    };



});