const nlp_check = require('../purge.json'), fs = require('fs'), lib = require('wordcut'); lib.init()
module.exports = class decision_tree {
    /**
     * @static
     * @constructor
     */
    constructor() {
        this.keyword = keyword;
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
    static wordcut = async (keyword = '') => new Promise(async (resolve, reject) => {
        try {
            if (typeof keyword === "number" || typeof keyword === "object" || typeof keyword === "undefined" || Array.isArray(keyword) === true) { resolve("ErrorString") }
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
    * Function createjson Json By Kraivit
    * @private
    */
    static createjson = async (path, data) => new Promise(async (resolve, reject) => {
        try {
            if (typeof path === "number" || typeof path === "object" || typeof path === "undefined" || Array.isArray(path) === true) { resolve("ErrorString") }
            else {
                fs.writeFileSync(path, JSON.stringify(data))
                resolve("Sucess Path : " + path + "  ")
            }
        } catch (error) {
            console.log(err)
            reject(err)
        }
    })
}

