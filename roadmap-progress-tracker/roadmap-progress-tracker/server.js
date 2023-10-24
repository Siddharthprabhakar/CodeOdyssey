const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

// Define the port number
const PORT = 5000; // You can use any available port number

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{
    console.log("Successfully Connected to db");
})

// Middleware
app.use(express.json());

// Progress Routes
const progressRoutes = require('./routes/progressRoutes');

app.use('/progress', progressRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
