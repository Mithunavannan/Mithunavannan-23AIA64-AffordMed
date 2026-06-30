const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notifications");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notifications", notificationRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});