const map = document.getElementById("college-map");
const mapContainer = document.getElementById("map-container");

const buildingList = document.getElementById("building-list");
const startSelect = document.getElementById("start");
const endSelect = document.getElementById("end");

let buildings = [];

map.addEventListener("click", function (event) {
  const rect = map.getBoundingClientRect();
  const x = Math.floor(event.clientX - rect.left);
  const y = Math.floor(event.clientY - rect.top);

  const name = prompt("Enter building name:");
  if (!name) return;

  buildings.push({ name, x, y });

  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.left = x + "px";
  marker.style.top = y + "px";
  marker.title = name;
  mapContainer.appendChild(marker);

  updateBuildingList();
});

function updateBuildingList() {
  buildingList.innerHTML = "";
  startSelect.innerHTML = `<option value="">Select Start</option>`;
  endSelect.innerHTML = `<option value="">Select End</option>`;

  buildings.forEach((b, index) => {
    buildingList.innerHTML += `<li>${b.name} (X:${b.x}, Y:${b.y})</li>`;
    startSelect.innerHTML += `<option value="${index}">${b.name}</option>`;
    endSelect.innerHTML += `<option value="${index}">${b.name}</option>`;
  });
}
