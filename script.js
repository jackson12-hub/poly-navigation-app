const buildings = {
    "Library": { x: 200, y: 150 },
    "Student Center": { x: 400, y: 300 },
    "Gym": { x: 600, y: 200 },
    "Engineering Hall": { x: 300, y: 400 }
};

const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");
const mapContainer = document.getElementById("map-container");
const routeLayer = document.getElementById("route-layer");

// Populate dropdowns
for (let building in buildings) {
    let option1 = new Option(building, building);
    let option2 = new Option(building, building);
    startSelect.add(option1);
    endSelect.add(option2);
}

// Draw building markers
for (let name in buildings) {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    marker.style.left = buildings[name].x + "px";
    marker.style.top = buildings[name].y + "px";
    marker.title = name;
    mapContainer.appendChild(marker);
}

function drawRoute() {

    routeLayer.innerHTML = ""; // Clear old route

    const start = startSelect.value;
    const end = endSelect.value;

    if (!start || !end) {
        alert("Please select both start and destination");
        return;
    }

    const startPos = buildings[start];
    const endPos = buildings[end];

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", startPos.x);
    line.setAttribute("y1", startPos.y);
    line.setAttribute("x2", endPos.x);
    line.setAttribute("y2", endPos.y);

    line.setAttribute("stroke", "red");
    line.setAttribute("stroke-width", "4");

    routeLayer.appendChild(line);
}
