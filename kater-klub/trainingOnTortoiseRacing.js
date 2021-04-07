//https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript


function race(v1, v2, g) {
    if (v1 >= v2) {return null}
    time = g * 3600 / (v2 - v1)
    // console.log(v2-v1)
    h = Math.floor(time / 3600)
    mn = Math.floor((time % 3600) / 60)
    s = Math.floor(time % 60)
    timetocatchup = [h, mn, s]
    return timetocatchup
  }