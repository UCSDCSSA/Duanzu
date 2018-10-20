/**
 * The server file to serve a single page node/express application
 */

const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');
const config = require('./config/react.config');

// Store directories that serves files
const publicRoot = `${__dirname}/public`;
const buildRoot = `${__dirname}/build`;

// Create express app
const app = express();

// Serve static files from build and public directories
app.use(express.static(buildRoot));
app.use(express.static(publicRoot));

// Use history api fallback to serve main single page file
app.use(fallback('index.html', { root: buildRoot }));

// Listen to the port and start server
app.listen(config.port, function () {
  console.log(`Server listening to port ${config.port}`);
});
