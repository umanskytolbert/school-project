function getRandomCode() {
  const codes = ["def main():", "   print('Hello World')"];
  return codes[Math.floor(Math.random() * codes.length)];
}
