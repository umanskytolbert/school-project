function generateRandomJSCode() {
  const maxLength = 20;
  let code = "";
  for (let i = 0; i < maxLength; i++) {
    code += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return code;
}
