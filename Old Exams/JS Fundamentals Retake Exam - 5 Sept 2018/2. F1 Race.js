function f1Race(pilotsAndCommands) {
    let pilots = pilotsAndCommands[0].split(/\s+/);

    for (let i = 1; i < pilotsAndCommands.length; i++) {
        let currentCommand = pilotsAndCommands[i].split(/\s+/)[0];
        let currentPilot = pilotsAndCommands[i].split(/\s+/)[1];

        switch (currentCommand) {
            case "Join":
                if(!pilots.includes(currentPilot)) {
                    pilots.push(currentPilot);
                }
                break;
            case "Crash":
                if(pilots.includes(currentPilot)) {
                    pilots = arrayRemove(pilots, currentPilot);
                }
                break;
            case "Pit":
                if(pilots.includes(currentPilot)) {
                    let indexOfCurrentPilot = pilots.indexOf(currentPilot);
                    if(indexOfCurrentPilot < pilots.length - 1) {
                        let temp = pilots[indexOfCurrentPilot + 1];
                        pilots[indexOfCurrentPilot + 1] = pilots[indexOfCurrentPilot];
                        pilots[indexOfCurrentPilot] = temp;
                    }
                }
                break;
            case "Overtake":
                if(pilots.includes(currentPilot)) {
                    let indexOfCurrentPilot = pilots.indexOf(currentPilot);
                    if(indexOfCurrentPilot > 0) {
                        let temp = pilots[indexOfCurrentPilot - 1];
                        pilots[indexOfCurrentPilot - 1] = pilots[indexOfCurrentPilot];
                        pilots[indexOfCurrentPilot] = temp;
                    }
                }
                break;
        }
    }
    console.log(pilots.join(" ~ "));
    function arrayRemove(arr, value) {

        return arr.filter(function(ele){
            return ele !== value;
        });
    }
}
f1Race(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"]
);