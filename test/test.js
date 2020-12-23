// const demo_json = require('../example/demo.json')
const assert = require('assert'),decision_tree = require('lib/decision_tree');
describe('Decision Tree By Kraivit', () => {
    describe('#DEMO', () => {
        context('ทดสอบการส่งพารามิเตอร์ในตัวแปร ต่าง ๆ', function () {
            it('String', function () {
                assert(decision_tree.wordcut("กลัว กลัว ทำไมละนั้น กลัวจังเลย"))
                // decision_tree.wordcut("กลัว กลัว ทำไมละนั้น กลัวจังเลย").then(console.log)
            });
            it('Array', function () {
                assert(decision_tree.wordcut(["กลัว กลัว ทำไมละนั้น กลัวจังเลย", "สวัสดีครับ"]))
            });
            it('NuN', function () {
                assert(decision_tree.wordcut(NaN))
                // console.log(decision_tree.wordcut(NaN))
            });
            it('Null', function () {
                assert(decision_tree.wordcut(null))
            });
            it('Integer', function () {
                assert(decision_tree.wordcut(Number(123)))
            });
            it('Object', function () {
                assert(decision_tree.wordcut([{"คำเมือง":"อะไรนะ"}]))
            });
        })
    })
})