// const demo_json = require('../example/demo.json')
const assert = require('assert');
const decision_tree = require('lib/decision_tree');
describe('Decision Tree By Kraivit', () => {
    describe('DEMO', () => {    
        it('version 0.0.3', function () {
            const text = "กลัว กลัว ทำไมละนั้น กลัวจังเลย"
            assert(decision_tree.wordcut(text))
        });
    })
})