var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/ceshi';
var scanf = require('scanf');
var insert = function () {
    var insertData = function (db, callback) {
        //连接到表
        var collection = db.collection('tb2');
        console.log('请输入barcode');
        var barcode = scanf('%s');
        console.log('请输入unit');
        var unit = scanf('%s');
        console.log('请输入count');
        var count = scanf('%d');
        console.log('请输入name');
        var name = scanf('%s');
        console.log('请输入price');
        var price = scanf('%f');

        var data = {'barcode': barcode, 'unit': unit, 'count': count, 'name': name, 'price': price};

        //插入数据
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };
    MongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功！');
        insertData(db, function (result) {
            console.log(result);
            console.log('插入成功');
            db.close();
        });
    });
};

module.exports = insert;
