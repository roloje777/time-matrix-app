const express = require("express"); // import module

const PORT = 8000; // web port

// initialize the express app
const app = express();

//Use EJS and the view engine
app.set("view engine", "ejs");

// Listen to the web server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
