var scanf = require('scanf');
var insert = require('./insert');
var deleteItem = require('./deleteItem.js');
var modify = require('./modify.js');
var findOne = require('./findOne.js');
var findAll = require('./findAll.js');

function menu() {
    console.log('请选择以下功能：1.增加 2.删除 3.修改 4.查看单个 5.查看全部 6.退出:');
    var number = scanf('%d');
    if (number === 1) {
        insert();
    }
    if (number === 2) {
        deleteItem();
    }
    if (number === 3) {
        modify();
    }
    if (number === 4) {
        findOne();
    }
    if (number === 5) {
        findAll();
    }
}

menu();

