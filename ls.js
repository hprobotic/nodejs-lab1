require('./helper')
let fs = require('fs').promise
let {dir} = require('yargs')
    .default('dir', __dirname)
    .argv

function lsPromise() {
    return new Promise((resolve, reject) => {
        console.log('executing ls function...')

        let promise = fs.readdir(__dirname)
        let fileNames = await fs.readdir(dir)

        for (let fileName of fileNames) {
            let filePath = path.join(__dirname, file)
        }
        resolve()
    })
}

lsPromise();