import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sql from "mssql";
import UserRoute from "./routes/UserRoute.js"; // ✅ Corrected import

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10), // Ensure port is a number
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
};

// Connect to MSSQL
sql
  .connect(config)
  .then(() => {
    console.log("✅ Connected to MSSQL");

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });

// Base route
app.get("/", (req, res) => {
  return res.json({ message: "Backend Working" });
});

// Use user routes
app.use("/users", UserRoute);
