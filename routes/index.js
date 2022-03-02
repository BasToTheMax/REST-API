// Import packages
const express = require('express');
const fs = require("fs");

// Setup express
const app = express.Router();

// Loop through files
fs.readdirSync(__dirname).forEach(function(file) {
    // If the file is 'index.js' continue to next file
    if (file == "index.js") return;

    // remove .js of the file
    var name = file.substr(0, file.indexOf('.'));

    // Import the route
    const route = require('./' + name);

    // Make a endpoint of the route
    app.get(`/${route.name}`, async (req, res) => {
        // execute the code
        route.run(req, res)                        
    })
});

module.exports = app;