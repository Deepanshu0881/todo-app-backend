const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;;

//Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//connect to MongoDB
mongoose.connect(process.env.MONGO_URL
  //   , {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log('Failed to connect to MongoDB',err);
});

//Routes
app.use('/api/todos',todoRoutes);

//Start Server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
