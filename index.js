function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) return "I can't hear you!";
  if (string.toUpperCase() === string) return "YES INDEED!";
<<<<<<< HEAD
  if (string==="I love you, Grandma.") return "I love you, too."
=======
>>>>>>> 244c1d5ebb91a3e0c69bb3b6a90d0f0528bd18fa
}
