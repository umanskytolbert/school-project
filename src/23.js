function countWords(text) {
  return text.trim().split(/\s+/).length;
}

console.log(countWords("Hello world! This is a test."));
