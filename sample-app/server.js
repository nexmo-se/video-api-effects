const express = require('express');
const { resolve } = require('path');

const app = express();
app.use(express.static(resolve(__dirname, './backgrounds')));
app.use(express.static(resolve(__dirname, './library')));
app.use(express.static(resolve(__dirname, '../dist/build')));
app.use(express.static(resolve(__dirname)));

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`App server started. Go to http://localhost:${port}`);
});
