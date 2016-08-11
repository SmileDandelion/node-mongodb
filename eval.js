var MongoClient = require('mongodb').MongoClient;
var DB_CON_STR = 'mongodb://localhost:27017/ceshi';

var evalFn = function (db, callback) {
    db.eval('get_count2()', function (err, result) {
        if (err) {
            console.log('error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CON_STR, function (err, db) {
    console.log('连接成功!');
    evalFn(db, function (result) {
        console.log(result);
        db.close();
    });
});
// var evalFn = function (db) {
//     db.eval('get_count()', function (err, result) {
//         if (err) {
//             console.log('error:' + err);
//             return;
//         }
//         return result;
//     });
// }
//
// MongoClient.connect(DB_CON_STR, function (err, db) {
//     console.log('连接成功!');
//     var result = evalFn(db);
//     console.log(result);
//     db.close();
// });