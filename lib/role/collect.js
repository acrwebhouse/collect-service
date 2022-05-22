const mongoDB = require('../db/mongoDB');
const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const path = require('path');
const collectionName = config.mongoDBCollection.collectCollection;
const { ObjectId } = require('mongodb'); // or ObjectID 
const collectDoc = {
    _id : 'system',
    accessTime:1,
    // createTime:
    // updateTime:
}

function newCollectDoc(){
    const doc = JSON.parse(JSON.stringify(collectDoc))
    const date = new Date();
    doc.createTime = date;
    doc.updateTime = date;
    return doc;
}



function addAccessTime(callback){
    const doc = {
        _id : 'system'
    }
    mongoDB.queryFindOne(collectionName, doc, (result,data)=>{
        if(result === true && data === null){
            const newCollect = newCollectDoc()
            mongoDB.insert(collectionName, newCollect, callback);
        }else if(result === true && data !== null){
            if(data.accessTime === null || data.accessTime === undefined){
                data.accessTime = 0;
            }
            data.accessTime++;
            data.updateTime = new Date();
            mongoDB.update(collectionName, doc, data, callback)
        }else{
            callback(false,'db query error')
        }
    })
}

function getData(callback){
    const doc = {
        _id : 'system'
    }
    mongoDB.queryFindOne(collectionName, doc, callback)
}

exports.addAccessTime = addAccessTime
exports.getData = getData