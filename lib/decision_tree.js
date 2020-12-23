const nlp_check = require('../purge.json'),lib = require('wordcut');lib.init()
module.exports = class decision_tree {
    /**
     * @static
     * @constructor
     */
    constructor() {
        this.keywork = keyword;
        this.path = path;
        this.id = id;
        this.result = result;
    }
    
    /**
    * Function DELETE model Wordcut
    * @private
    */
    static deleteword = () => {
        try {
            return nlp_check.map((word) => delete this.result[word])
        } catch (err) {
            console.log(err)
            return err
        }
    }
    /**
    * Function STATE model Wordcut
    * @private
    */
    static state = (lib, keyword) => {
        try {
            return lib.cut(keyword).split("|").map((word) => this.result[word] = true)
        } catch (err) {
            console.log(err)
            return err
        }
    }
    /**
    * Function NLP model Wordcut By Kraivit
    * @private
    */
    static wordcut = async (keyword = '') => new Promise(async(resolve,reject)=>{
        try {
            if (Array.isArray(keyword) == true || Number.isInteger(keyword) == true || Number.isNaN(keyword) == true || keyword == null|| keyword == undefined) { resolve("ErrorString") }
            else {
                this.result = {}
                await this.state(lib, keyword)[this.deleteword()]
                resolve(Object.keys(this.result))
            }
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
    /**
    * Function Entropy model Wordcut By Kraivit
    * @private
    */

}

