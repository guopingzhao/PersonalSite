const http = require("http")

const {MongoClient, ObjectID} = require("mongodb")

function connectDB(dburl="mongodb://localhost:27017/test"){
  return new Promise(async (reslove,reject)=>{
    try {
      reslove(await MongoClient.connect(dburl))
    } catch(err){
      reject("数据库连接失败")
    }
  })
}

function find(col){
  return function(query={},options={}){
    return new Promise(async (reslove, reject)=>{
      const {filter={}, page={}, sort={}} = options
      const {limit=0, current=1} = page
      const db = await connectDB().catch( (err) => { reject(err) } )
      const collection = db.collection(col)
      let result = collection.find(query,filter)
                    .limit(limit)
                    .skip( limit * (current - 1) )
                    .sort(sort)
      try{
        let data = await result.toArray()
        if(limit){
          reslove({
            current,
            limit,
            data,
            count: await collection.count(query)
          })
        } else {
          reslove(data)
        }
        db.close()
      } catch(err){
        reject("数据获取失败")
        db.close()
      }
    })
  }
}

function ADUS(col, type){
  return function(...argu){
    return new Promise(async (reslove, reject)=>{
      const db = await connectDB().catch( (err) => { reject(err) } )
      const collection = db.collection(col)
      try{
        reslove(await collection[type].apply(collection, argu))
      } catch(err){
        reject("数据库操作失败")
      }
      db.close()      
    })
  }
}
module.exports = {
  collection: function (col) {
    return {
      insert: ADUS(col,"insert"),
      remove: ADUS(col,"remove"),
      update: ADUS(col,"update"),
      findOne: ADUS(col,"findOne"),
      count: ADUS(col,"count"),
      find: find(col,"find")
    }
  },
  ObjectID: ObjectID
}