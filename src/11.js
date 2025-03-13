function getRandomJSCode() {
  let code = "";
  const keywords = ["let", "const", "var", "if", "else", "for", "while", "do", "switch", "case", "default"];
  const symbols = ["+", "-", "*", "/", "%", "=", ">", "<", ">=", "<=", "!=", "=="];
  const operators = ["&&", "||", "++", "--", "+=", "-=", "*=", "/=", "%=", "^=", ">>=", "<<=", ">>>", "<<<"];
  const functions = ["Math.random()", "Math.floor(x)", "Math.ceil(x)", "parseInt(x)", "parseFloat(x)"];
  const dataTypes = ["number", "string", "boolean", "object", "array", "function"];
  const variables = ["x", "y", "z", "a", "b", "c"];
  
  code += `const ${variables[Math.floor(Math.random() * variables.length)]} = ${functions[Math.floor(Math.random() * functions.length)](${Math.random()})};`;
  
  for (let i = 0; i < 5; i++) {
    code += `if (${variables[Math.floor(Math.random() * variables.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${Math.random()}) {`;
    for (let j = 0; j < 5; j++) {
      code += `${keywords[Math.floor(Math.random() * keywords.length)]} ${symbols[Math.floor(Math.random() * symbols.length)]}${dataTypes[Math.floor(Math.random() * dataTypes.length)]} = ${variables[Math.floor(Math.random() * variables.length)]};`;
    }
    code += `}`;
  }
  
  return code;
}
