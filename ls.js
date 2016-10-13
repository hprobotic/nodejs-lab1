require('./helper')
let fs = require('fs').promise

function lsPromise() {
    return new Promise((resolve, reject) => {
        console.log('executing ls function...');
        
        resolve();
    });
}

lsPromise();