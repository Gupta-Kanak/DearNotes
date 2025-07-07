const express = require('express');
const cors = require('cors');
const Connect = require('./db');

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes' , require('./routes/notes'));

Connect();

app.listen(port, () => {
    console.log("Server listening.....");
});