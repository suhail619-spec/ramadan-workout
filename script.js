// Load workouts from JSON file
fetch("workouts.json")
  .then(res => res.json())
  .then(data => displayWorkouts(data))
  .catch(error => {
    console.log("Workouts not loaded yet.");
  });

function displayWorkouts(data) {
  const container = document.getElementById("workoutContainer");
  container.innerHTML = "";

  data.sessions.forEach(session => {
    container.innerHTML += `<h2>${session.name}</h2>`;

    session.exercises.forEach(ex => {
      container.innerHTML += `
        <div>
          <strong>${ex.name}</strong><br>
          Sets: ${ex.sets} | Reps: ${ex.reps}<br>
          Rest: ${ex.rest_sec} sec<br>
          <a href="${ex.video}" target="_blank">Reference Video</a>
        </div>
      `;
    });
  });
}

function saveSession() {
  const session = {
    weight: document.getElementById("weight").value,
    kneePain: document.getElementById("kneePain").value,
    calories: document.getElementById("calories").value,
    duration: document.getElementById("duration").value,
    date: new Date().toLocaleString()
  };

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(session);
  localStorage.setItem("history", JSON.stringify(history));

  alert("Session Saved Successfully");
}
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const container = document.getElementById("historyContainer");
  container.innerHTML = "";

  if (history.length === 0) {
    container.innerHTML = "No sessions saved yet.";
    return;
  }

  history.forEach((session, index) => {
    container.innerHTML += `
      <div>
        <strong>Date:</strong> ${session.date}<br>
        Weight: ${session.weight} kg<br>
        Knee Pain: ${session.kneePain}<br>
        Calories: ${session.calories}<br>
        Duration: ${session.duration} minutes
        <hr>
      </div>
    `;
  });
}
