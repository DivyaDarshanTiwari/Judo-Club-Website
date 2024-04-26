const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // serve static files from public folder
app.use(express.urlencoded({ extended: true })); // parse form data

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/nav_footer.html');
});

app.post('/submit_query', (req, res) => {
  console.log(req.body); // log the form data
  res.send('Query submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});