
var _ = require('lodash');
var db = require('./connection');
var sutil = require("../helpers/stringUtil")
var runQr = require('./query')
var queryBuilder = class{
    constructor(dbTable){
        this.table = dbTable
        this.currquery = ""
    }
    get getTable(){
        return this.table
    }
    setTable(tableName){
        this.table =tableName
    }
    select(select="*", where={},options=""){
        this.currquery = "SELECT " + select + " FROM " + this.table 
        this.currquery +=(!_.isEmpty(where))?" WHERE ":""
        var finQur = this.currquery + sutil.arrayToWhereString(where) + " " +options
        return finQur
    }

    insert(dataValues){
        this.currquery = "INSERT INTO " + this.table + sutil.getKeyInParkets(dataValues)  + " VALUES " + sutil.getValueInPrakets(dataValues)
        //console.log(this.currquery)
        return this.currquery
    }

    update(updatedObj, whereObj){
        this.currquery  = "UPDATE " + this.table + " SET " + sutil.makeSettingKeyValString(updatedObj) + " WHERE "
        var whereStr    = _.isEmpty(whereObj)?" 1 ": sutil.arrayToWhereString(whereObj)
        this.currquery  += whereStr
        //console.log(whereStr)
        //console.log(this.currquery)
        return this.currquery
    }

    delete(whereObj){
        this.currquery = "DELETE FROM " + this.table + " WHERE " ;
        var whereStr    = _.isEmpty(whereObj)?" 1 ": sutil.arrayToWhereString(whereObj)
        this.currquery  += whereStr
        console.log(this.currquery)
        return this.currquery
    }
} 


module.exports = queryBuilder
/*
var test = sutil.makeSettingKeyValString({id:123, name:"asdasd"})
console.log(test)
*/
//console.log(test)
/*
const dbs = new queryBuilder("qada")
dbs.delete({id:10,name:"teswwt"})
*/

/*var ret = dbs.arrayToWhereString({id:"123", name:"asdasd"})
var last = ret.lastIndexOf("AND")
var len = ret.length
console.log(last + " " +len + " " + (len-last))*/
//console.log(dbs.removeLastGivenString("id = 123 AND name = asdasd AND ", "AND"))