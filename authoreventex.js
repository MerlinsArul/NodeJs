const EventEmitter = require('events')

class bookShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber =0
    }
    order(bookname,authorname){
        this.orderNumber++;
        this.emit('order',bookname,authorname)
    }
    displayOrderNumber(){
        console.log(`current order number ${this.orderNumber}`);
    }
};
module.exports = bookShop;