var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/ceshi';
var scanf = require('scanf');
var deleteFn = function () {

    var delDate = function (db, callback) {
        var collection = db.collection('tb2');
        console.log('请输入要删除的barcode：');
        var barcode = scanf('%s');
        var whereStr = {'barcode': barcode};
        collection.remove(whereStr, function (err, result) {
            if (err) {
                console.log('error:' + err);
                return;
            }
            callback(result);
        });

    };
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功!');
        delDate(db, function (result) {
            console.log(result.toString());
            console.log('删除成功');
            db.close();
        });
    });
};
module.exports = deleteFn;

