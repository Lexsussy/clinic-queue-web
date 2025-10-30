const queueEl = document.getElementById("queue");
const doctorEl = document.getElementById("doctor");
const roomEl = document.getElementById("room");

function updateDisplay(){
  const data = JSON.parse(localStorage.getItem("currentServing") || '{}');
  queueEl.textContent = data.number || "--";
  doctorEl.textContent = data.doctor || "";
  roomEl.textContent = data.room ? "Room: "+data.room : "";
}

// refresh every second
setInterval(updateDisplay, 1000);
