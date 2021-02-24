
var _ = require('lodash');
var db = require('./connection');
var sutil = require("../helpers/stringUtil")
var runQr = require('./query')
var queryBuilder = class{
    constructor(dbTable){
        this.table = dbTable
        this.selectQr = ""
    }
    get getTable(){
        return this.table
    }
    setTable(tableName){
        this.table =tableName
    }
    select(select="*", where={},options=""){
        this.selectQr = "SELECT " + select + " FROM " + this.table 
        this.selectQr +=(!_.isEmpty(where))?" WHERE ":""
        var finQur = this.selectQr + sutil.arrayToWhereString(where) + " " +options
        return finQur
    }

} 


module.exports = queryBuilder

//var test = sutil.arrayToWhereString({id:"123", name:"asdasd"})
//console.log(test)
/*const dbs = new queryBuilder("qada")
console.log(dbs.select("*"))
*/

/*var ret = dbs.arrayToWhereString({id:"123", name:"asdasd"})
var last = ret.lastIndexOf("AND")
var len = ret.length
console.log(last + " " +len + " " + (len-last))*/
//console.log(dbs.removeLastGivenString("id = 123 AND name = asdasd AND ", "AND"))