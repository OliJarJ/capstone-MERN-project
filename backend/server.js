// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const adoptRoutes = require('./routes/adoptroutes')
const shopRoutes = require('./routes/shoproutes')
// Create an Express application
const app = express();
// Set up middleware for parsing JSON
app.use(express.json());
// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://abigailjcollins:Kable123@cluster0.c8oywcv.mongodb.net/');
const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/pets', adoptRoutes)

app.use('/products', shopRoutes)

// Define routes
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// Example route to handle POST requests
// app.post('/example', async (req, res) => {
//   const exampleData = new ExampleModel({
//     name: req.body.name,
//     description: req.body.description
//   });
//   try {
//     const savedExample = await exampleData.save();
//     res.json(savedExample);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
