const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8000;


const connectDB = require("./config/db");

const patientRoutes = require("./routes/patientRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const adminRoutes = require("./routes/adminRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/patients", patientRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use(errorHandler);

// Start AFTER DB connects
const startServer = async () => {

  await connectDB();
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);;

};

startServer();
