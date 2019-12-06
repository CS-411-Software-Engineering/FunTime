const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')));

app.use('/user', userRoute);


app.use((req, res) => {
  res.sendStatus(404);
})


app.listen(PORT, () => console.log("Listening on port: ", PORT));