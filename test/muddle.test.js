const should = require("chai").should()
const fs = require('fs')
const rm = require('rimraf')
const processFile = require('../dist/process-file');
var promise;

describe('Muddler', () => {
    describe('#processFile', () => {
        before(() => {
            if (fs.existsSync('sample_mud.js')) {
                rm.sync('sample_mud.js')
            }
            promise = processFile({}, 'C:\\Users\\jolle\\Documents\\dev\\muddle\\examples\\sample.ts')
        })
        it('should create a <filename>_mud.js file', async () => {
            await promise;
            fs.existsSync('sample_mud.js').should.equal(true)
        })
        after(() => {
            rm.sync('sample_mud.js')
        })
    })
})