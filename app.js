/* Dependencies */
const express = require('express');
require('dotenv').config();
/* Dependencies */

/* GLOBAL variables */
const PORT = 3000;
/* GLOBAL variables */

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})