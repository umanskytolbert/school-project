function generateRandomCode() {
  const code = `
const github = require('github');

// Set up your GitHub API credentials
github.authenticate({
  type: 'basic',
  username: 'your-username',
  password: 'your-password'
});

// Create a new repository for your school project
github.repos.create({
  name: 'school-project',
  description: 'A comprehensive guide for beginners to create a great GitHub repository for their school project.'
}, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Repository created: ${res.full_name}`);
  }
});
`;
return code;
}
