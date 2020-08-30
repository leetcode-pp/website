import path from 'path';

let env = process.env.NODE_ENV || 'development';
env = env.toLowerCase();
const config = require(path.resolve(__dirname, `${env}.config.js`)); 

function getEnv() {
    return env;
}

export default config;


