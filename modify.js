var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/ceshi';
var scanf = require('scanf');

var updateFn = function () {
    var updataData = function (db, callback) {
        var collection = db.collection('tb2');

        console.log('请输入要更新的barcode：');
        var barcode = scanf('%s');

        console.log('请输入新的unit');
        var unit = scanf('%s');
        console.log('请输入新的count');
        var count = scanf('%d');
        console.log('请输入新的name');
        var name = scanf('%s');
        console.log('请输入新的price');
        var price = scanf('%d');

        var updateStr = {$set: {'count': count, 'unit': unit, 'name': name, 'price': price}};
        var whereStr = {'barcode': barcode};

        collection.update(whereStr, updateStr, function (err, result) {
            if (err) {
                console.log('error' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功!');
        updataData(db, function (result) {
            console.log(result.toString());
            console.log('更新成功')
            db.close();
        });
    });
}
module.exports = updateFn;