const express = require('express')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());

const authCookieOptions = (secure) => {
  const oneDay = 1 * 24 * 3600 * 1000; // 1 day

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    maxAge: oneDay,
    secure
  };

  return cookieOptions;
};

app.post('/login', async (req, res) => {
  const user = { username: 'user', password: 'password'};
  const token = await jwt.sign({ user }, 'secret', { expiresIn: '1d' });

  res.cookie('auth-token', token, authCookieOptions(false));

  res.json({ status: 'loggedin' });
});

app.get('/data', (req, res) => {
  const token = req.cookies['auth-token'];

  res.json({ token, users: [{ name: 'David' }, { name: 'Susan'}, { name: process.env.NAME } ] });
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
});