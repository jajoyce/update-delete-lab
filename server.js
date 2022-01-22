const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('This is the home page. This is working.');
});

app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
