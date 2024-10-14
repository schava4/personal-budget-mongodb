const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/mongodb_demo';
mongoDBClient.connect(url,(operationError,dbHandler)=>
{
    if(operationError){
        console.log("An error has occured during the connection");
    }
    else{
        // Insert operation
        console.log("connected to database")
         let data={id:10,name:"added a new name from mongoDB Native Driver"};
        dbHandler.db('mongodb_demo').collection('names').deleteMany({id:10},(operr,opresult) => {
            if(operr)
             {
                 console.log("Unable to delete data from your collection")

             }
             else{
                // console.log(opresult)
              console.log("deleted Successfully")
              dbHandler.close()
            }
         }) 
    }
});