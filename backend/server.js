const express = require('express');
const path = require('path');

const app = express();

app.use('/*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
})

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:8000`);
})