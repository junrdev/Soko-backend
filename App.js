const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const App = express();

App.use(cors());
App.use(express.json());
//routing

module.exports = App;