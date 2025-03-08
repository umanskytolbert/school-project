let x = Math.floor(Math.random() * 10) + 1;
if (x < 5) {
  return "It's not a GitHub repository";
} else if (x === 5) {
  return "It's a GitHub repository, but it's not great";
} else {
  return "It's a great GitHub repository!";
}
