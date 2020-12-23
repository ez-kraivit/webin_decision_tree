const nlp_check = require('../purge.json')
const lib = require('wordcut')
module.exports = class decision_tree {
    /**
     * @static
     * @constructor
     */
    constructor() {
        this.keywork = keyword;
        this.path = path;
        this.id = id;
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
    * Function NLP model Wordcut By Kraivit
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
    /**
    * Function Entropy model Wordcut By Kraivit
    * @private
    */
   static demofunction = ()=>{

   }

}

