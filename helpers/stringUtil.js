var removeLastSpace = (str)=>{
    return(str[str.length -1] == " ")? str.substr(0,str.length-1):str
}
var removeLastGivenString = (str, gString)=>{
    const ret = removeLastSpace(str)
    const retLen = ret.length
    const last = ret.lastIndexOf(gString)
    const diff = (retLen-last)
    return (diff==gString.length)?str.substr(0,retLen-diff):str
}

var arrayToWhereString = (where)=>{
    var arrStr = ""
    for(var key in where){
        arrStr+= key + " = "+ where[key] + " AND "
    }
    return removeLastGivenString(arrStr,"AND")
}

module.exports.removeLastSpace          = removeLastSpace
module.exports.removeLastGivenString    = removeLastGivenString
module.exports.arrayToWhereString       = arrayToWhereString  