const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to My Automated CI/CD Project!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "Application is running"
    });
});

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = app;
