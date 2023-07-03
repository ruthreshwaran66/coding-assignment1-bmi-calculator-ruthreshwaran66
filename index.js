const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3034;

function calculateBMI(weight, height) {
  var heightInMeters = height / 100;
  var bmi = weight / (heightInMeters * heightInMeters);
  bmi = bmi.toFixed(2);
  return bmi;
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = calculateBMI(weight, height);

  res.send('Your BMI is: ' + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
