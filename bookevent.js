const BookShop = require('./bookshop');
const Author = require('./author')

const bookShop = new BookShop();
const author = new Author();

bookShop.on("order",(bookname,authorname)=>{
  console.log(`The book ${bookname} was written by ${authorname}`);
  author.discount(authorname);
})

bookShop.order("Wings of Fire","Dr.A.P.J.Abdul Kalam");
bookShop.order("Mahabaratham","Valmiki");
bookShop.displayOrderNumber();
