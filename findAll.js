var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/ceshi';

var findAllFn = function () {
    var selectDate = function (db, callback) {

        var collection = db.collection('tb2');

        collection.find().toArray(function (err, result) {
            if (err) {
                console.log('Error' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功!');
        selectDate(db, function (result) {
            console.log(result);
            db.close();
        });
    });
}
module.exports = findAllFn;