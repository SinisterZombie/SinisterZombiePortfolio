const express = require('express');
const path = require('path');
const app = express();

// Serve the first HTML file at '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the second HTML file at '/Games'
app.get('/Games', (req, res) => {
    res.sendFile(path.join('D:/Test server', 'Games.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
