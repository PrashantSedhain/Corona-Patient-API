const express = require("express");
const dotenv = require("dotenv");
const patient = require("./routes/patient");
//load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Mount the routers
app.use("/api/v1/patient", patient);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
