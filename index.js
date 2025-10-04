const express = require("express");
const urlRoutes = require("./routes/url");
const connectToDatabase = require("./connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/url", urlRoutes);

connectToDatabase('mongodb://127.0.0.1:27017/short-url')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
  });
