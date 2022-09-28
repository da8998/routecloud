const { exec } = require('child_process');

const express = require('express');
const app = express();

app.get('/api/docker', (req, res) => {
    console.log(res);
});
    
app.listen(3001, () => {
        console.log('Listening on port 3001...');
});
