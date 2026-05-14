require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Garcia Lab Activity 7 API' });
});

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
