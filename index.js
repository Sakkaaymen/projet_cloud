const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const axios = require('axios');
const os = require('os');
require('dotenv').config();

console.log("PORT:", process.env.PORT);
console.log("DB_HOST:", process.env.DB_HOST);
