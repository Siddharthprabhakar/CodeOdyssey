import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/reactdata', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dob: String,
});

const User = mongoose.model('userDetails', userSchema);

// Middleware
app.use(cors());
app.use(express.json());

// POST route to insert user data
app.post('/signup', async (req, res) => {
  const { name, email, password, dob } = req.body;

  // Hash the password securely
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

  const newUser = new User({
    name,
    email,
    password: hashedPassword, // Store the hashed password
    dob,
  });

  try {
    await newUser.save();
    res.status(201).send("User registered successfully.");
  } catch (err) {
    console.error("Error registering user:", err);
    
    res.status(500).send("Error registering user.");
  }
});

// POST route to handle user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send("User not found.");
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Send the user's name with the login response
      res.status(200).json({ message: "Login successful", name: user.name });
    } else {
      res.status(401).send("Invalid password.");
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Error during login.");
  }
});







// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});