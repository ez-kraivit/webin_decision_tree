const assert = require('assert'),decision_tree = require('lib/decision_tree');
describe('Decision Tree By Kraivit', () => {
    describe('#Tester Parameter', () => {
        context('Function wordcut', function () {
            it('String', function () {
                assert(decision_tree.wordcut("กลัว กลัว ทำไมละนั้น กลัวจังเลย"))
            });
            it('Array', function () {
                assert(decision_tree.wordcut(["กลัว กลัว ทำไมละนั้น กลัวจังเลย", "สวัสดีครับ"]))
            });
            it('NuN', function () {
                assert(decision_tree.wordcut(NaN))
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
        context('Function createjson', function () {
            it('String', function () {
                assert(decision_tree.createjson("test.json",[{"ทดสอบ":"กล้ามาก"}]))
            });
            it('Array', function () {
                assert(decision_tree.createjson(["asdasdasdad"],[{"ทดสอบ":"กล้ามาก"}]))
            });
            it('NuN', function () {
                assert(decision_tree.createjson(NaN,[{"ทดสอบ":"กล้ามาก"}]))
            });
            it('Null', function () {
                assert(decision_tree.createjson(null,[{"ทดสอบ":"กล้ามาก"}]))
            });
            it('Integer', function () {
                assert(decision_tree.createjson(Number(123),[{"ทดสอบ":"กล้ามาก"}]))
            });
            it('Object', function () {
                assert(decision_tree.createjson(["asdasdas"],[{"ทดสอบ":"กล้ามาก"}]))
            });
        })
    })
})