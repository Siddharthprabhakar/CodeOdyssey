import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/reactdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a schema for your data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(express.json());

// POST route to insert data 
app.post('/insert', async (req, res) => {
  const { name, email, message } = req.body;

  const formData = new User({
    name,
    email,
    message
  });

  try {
    await formData.save();
    res.send("Inserted data successfully.");
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send("Error inserting data");
  }
});

app.get('/user-data/:name', async (req, res) => {
  const { name } = req.params;

  try {
    const user = await User.findOne({ name });

    if (user) {
      res.json({ message: user.message });
    } else {
      res.status(404).send("User not found.");
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).send("Error fetching user data");
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
