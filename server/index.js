const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MIDDLE WARE  

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts/', posts);

const port = process.env.PORT || 5000; // LISTEN IN 500 PORT

app.listen(port, () => console.log(`Server started on port ${port}`));