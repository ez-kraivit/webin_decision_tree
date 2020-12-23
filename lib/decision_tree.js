const nlp_check = require('../example/nlp_check.json')
const lib = require('wordcut')
const fs = require('fs');
module.exports = class decision_tree {
    /**
     * @static
     * @constructor
     */
    constructor() {
        this.result = result;
    }

    /**
    * Function DELETE model Wordcut
    * @private
    */
    static deleteword = (result) => {
        try {
            return nlp_check.map((word) => delete result[word])
        } catch (err) {
            console.log(err)
            return err
        }
    }
    /**
    * Function STATE model Wordcut
    * @private
    */
    static state = (lib, keyword, result) => {
        try {
            return lib.cut(keyword).split("|").map((word) => result[word] = true)
        } catch (err) {
            console.log(err)
            return err
        }
    }
    /**
    * Function NLP model Wordcut By Kiti
    * @private
    */
    static wordcut = (keyword = '') => {
        try {
            if (Array.isArray(keyword) == true || Number.isInteger(keyword) == true || Number.isNaN(keyword) == true || keyword == null) { return "Plase Input String by Mr.kittipat !=!"; }
            else {
                lib.init();
                const result = {}
                this.result = result
                this.state(lib, keyword, result)
                this.deleteword(result)
                return Object.keys(result)
            }
        } catch (err) {
            console.log(err)
            return err
        }
    }
}

