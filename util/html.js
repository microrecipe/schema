const fs = require('fs');
const { exec } = require('child_process');

const service_path = __dirname + '/../services';
const target_path = __dirname + '/../../microrecipe.github.io';
fs.readdirSync(service_path).forEach(file => {
    const serviceName = file.split('.')[0];
    exec(`ag ${service_path}/${file} @asyncapi/html-template -o ${target_path}/${serviceName} -p singleFile=true --force-write`, (err, stdout, stderr) => {
        console.log(stdout);
    });
})