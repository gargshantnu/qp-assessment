// server.js
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const authMiddleware = require('./middleware/authMiddleware'); // Import the JWT middleware
const authRoutes = require('./routes/authRoutes'); // Import authentication routes
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const groceryRoutes = require('./routes/groceryRoutes');


const app = express();
app.use(bodyParser.json());

// Sync the Sequelize model with the database
sequelize
    .sync()
    .then(() => {
        console.log("Connected to MySQL database and synced Sequelize model");
    })
    .catch((err) => {
        console.error("Error syncing Sequelize model:", err);
    });

// Use routes for Admin and User
app.use('/auth', authRoutes); // Use authentication routes
// app.use('/admin', authMiddleware, adminRoutes); // Protect Admin routes with authentication middleware
// app.use('/user', authMiddleware, userRoutes); // Protect User routes with authentication middleware
app.use('/grocery', authMiddleware, groceryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
