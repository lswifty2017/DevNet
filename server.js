const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')

//Connect DB

connectDB();

// Init Middleware

app.use(express.json({extended: false}));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/', (req, res) => res.send('API Running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));