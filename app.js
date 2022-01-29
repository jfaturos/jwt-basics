/* Dependencies */
const express = require('express');
require('dotenv').config();
require('express-async-errors');
/* Dependencies */

const mainRouter = require('./routes/main')

/* GLOBAL variables */
const PORT = process.env.PORT || 3000;
/* GLOBAL variables */

const app = express();

/* Middleware */
app.use(express.json());

app.use('/api/v1', mainRouter);
/* Middleware */

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})