const express = require('express');
require('dotenv').config();
const app = express();


app.use(express.static('public'));


//app.listen(3000); for local use only
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
