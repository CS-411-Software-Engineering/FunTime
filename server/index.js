const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendStatus(404);
})


app.listen(PORT, () => console.log("Listening on port: ", PORT));
