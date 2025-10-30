// ---------- Data ----------
const DOCTOR_COUNT = 10;
let ticketCounter = 0;
let queue = [];

// 10 doctors
const doctors = [];
for(let i=0;i<DOCTOR_COUNT;i++){
  doctors.push({
    name: `Doctor ${i+1}`,
    room: `${100+i}`,
    dept: "General Medicine",
    schedule: "Mon-Fri | 9AM-5PM",
    available: true
  });
}

// ---------- DOM ----------
const waitingListEl = document.getElementById("waiting-list");
const servingEl = document.getElementById("serving");
const nextEl = document.getElementById("next");
const totalEl = document.getElementById("total");
const doctorsEl = document.getElementById("doctors");

let lastAssignedDoctor = -1;

// ---------- Init ----------
function initDoctors() {
  doctorsEl.innerHTML = "";
  doctors.forEach((doc, idx)=>{
    const div = document.createElement("div");
    div.className = "doctor-card";
    div.id = `doctor-${idx}`;
    div.innerHTML = `
      <strong>${doc.name}</strong><br>
      Dept: ${doc.dept}<br>
      Room: ${doc.room}<br>
      Schedule: ${doc.schedule}<br>
      <button onclick="manualAssign(${idx})" ${!doc.available?'disabled':''}>Assign Queue</button>
      <button onclick="markDone(${idx})" ${doc.available?'disabled':''}>Done</button>
    `;
    doctorsEl.appendChild(div);
  });
}

// ---------- Queue Functions ----------
function updateQueueUI() {
  waitingListEl.innerHTML = "";
  queue.forEach(num => {
    const li = document.createElement("li");
    li.textContent = "Q" + String(num).padStart(3,'0');
    waitingListEl.appendChild(li);
  });
  nextEl.textContent = queue.length>0 ? "Q" + String(queue[0]).padStart(3
