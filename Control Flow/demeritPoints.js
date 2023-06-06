// speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(180);

function checkSpeed(speed) {
  if (speed < 75) console.log("nice");
  else if (Math.floor((speed - 70) / 5) < 12)
    console.log("points: " + Math.floor((speed - 70) / 5));
  else console.log("License suspended");
}
