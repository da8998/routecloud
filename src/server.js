const { exec } = require('child_process');

const express = require('express');
const app = express();

app.get('/api/docker', (req, res) => {

    var containerCreate = exec('docker container create -i -t ' + req.query.name + 'test4 node');
    
    containerCreate.stdout.on('data', function(data) {
            console.log(data); 
    });
});
    
app.listen(3001, () => {
        console.log('Listening on port 3000...');
});
