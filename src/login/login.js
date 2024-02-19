// app.js
const pool =require('../../config/database')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;



// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    pool = 'SELECT * FROM users WHERE email = ? AND password = ?';
    pool.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result.length > 0) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});