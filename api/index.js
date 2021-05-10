const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');

// load environment variables
dotenv.config();

const app = express()

const port = 3100

const corsOptions = {
  credentials: true,
  origin: [process.env.FRONT_DOMAIN]
};

app.use(cors(corsOptions));

app.get('/data', (req, res) => {
  res.json([{ name: 'David' }, { name: 'Susan'} ]);
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
});