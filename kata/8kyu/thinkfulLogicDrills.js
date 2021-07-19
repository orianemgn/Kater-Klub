//https://www.codewars.com/kata/58649884a1659ed6cb000072/javascript
// Thinkful - Logic Drills: Traffic light 

function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : current === "red" ? "green" : current
    }