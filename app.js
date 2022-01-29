/* Dependencies */
const express = require('express');
require('dotenv').config();
require('express-async-errors');
/* Dependencies */

/* GLOBAL variables */
const PORT = process.env.PORT || 3000;
/* GLOBAL variables */

const app = express();

/* Middleware */
app.use(express.json());
/* Middleware */

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})