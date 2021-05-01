var express = require('express');
var router = express.Router();

var Cart = require('../models/cart');
var Allproduct  = require('../models/allproduct');
var Order = require('../models/order');
var User = require('../models/user');

//GET home page.
router.get('/', function(req, res, next) {  
  	res.render('shop/index');
  });

  router.get('/categories/viewuser',function(req,res,next){
    User.find(function(err, docs){
       console.log(docs)
     var productChunks = [];
     var chunkSize = 10;
     for(var i=0;i<docs.length;i+=chunkSize){
       productChunks.push(docs.slice(i,i+chunkSize));
     }
       res.render('categories/viewuser',{users: productChunks});
    });
  }); 

router.get('/categories/game',function(req,res,next){
   Allproduct.find({category: 'VideoGame'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/game',{products: productChunks});
   });
});

router.get('/categories/viewgame',function(req,res,next){
   Allproduct.find({category: 'VideoGame'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/viewgame',{products: productChunks});
   });
});

router.get('/categories/books',function(req,res,next){
   Allproduct.find({category: 'Book'}, function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/books',{books: productChunks});
   });
});

router.get('/categories/viewbooks',function(req,res,next){
   Allproduct.find({category: 'Book'}, function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/viewbooks',{books: productChunks});
   });
});

router.get('/categories/elec',function(req,res,next){
   Allproduct.find({category: 'Electronic'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/elec',{electronics: productChunks});
   });
});

router.get('/categories/viewelec',function(req,res,next){
   Allproduct.find({category: 'Electronic'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/viewelec',{electronics: productChunks});
   });
});

router.get('/categories/gaming',function(req,res,next){
   Allproduct.find({category: 'Gaming'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/gaming',{gamings: productChunks});
   });
});



router.get('/categories/viewgaming',function(req,res,next){
   Allproduct.find({category: 'Gaming'},function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/viewgaming',{gamings: productChunks});
   });
});

router.get('/categories/mobile',function(req,res,next){
   Allproduct.find({category: 'Mobile'},function(err, docs){
      console.log(docs)
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/mobile',{mobiles: productChunks});
   });
});

router.get('/categories/viewmobile',function(req,res,next){
   Allproduct.find({category: 'Mobile'},function(err, docs){
      console.log(docs)
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/viewmobile',{mobiles: productChunks});
   });
});

router.get('/details/mob-detail/:id', function(req, res){
  var mobId = req.params.id;
  Allproduct.findById(mobId, function(err, mobile){
    if(err) {
      return res.redirect('categories/mobile')
    }
    console.log(mobile)
      res.render('details/mob-detail', {mobile: mobile});
  });
});

router.get('/details/book-detail/:id', function(req, res){
  var bookId = req.params.id;
  Allproduct.findById(bookId, function(err, book){
    if(err) {
      return res.redirect('categories/mobile')
    }
    console.log(book)
      res.render('details/book-detail', {book: book});
  });
});

router.get('/details/game-detail/:id', function(req, res){
  var gameId = req.params.id;
  Allproduct.findById(gameId, function(err, product){
    if(err) {
      return res.redirect('categories/mobile')
    }
    console.log(product)
      res.render('details/game-detail', {product: product});
  });
});

router.get('/details/elec-detail/:id', function(req, res){
  var elecId = req.params.id;
  Allproduct.findById(elecId, function(err,electronic){
    if(err) {
      return res.redirect('categories/mobile')
    }
    console.log(electronic)
      res.render('details/elec-detail', {electronic: electronic});
  });
});

router.get('/details/gaming-detail/:id', function(req, res){
  var gamingId = req.params.id;
  Allproduct.findById(gamingId, function(err,gaming){
    if(err) {
      return res.redirect('categories/mobile')
    }
    console.log(gaming)
      res.render('details/gaming-detail', {gaming: gaming});
  });
});

router.get('/delete/:id', function(req, res){
  var mobId = req.params.id;
  Allproduct.findByIdAndRemove(mobId, function(err, mobile){
      return res.redirect('../categories/mobile')
  });
});

router.get('/delete1/:id', function(req, res){
  var mobId = req.params.id;
  Allproduct.findByIdAndRemove(mobId, function(err, viewmobile){
      return res.redirect('../categories/viewmobile')
  });
});

router.get('/delete2/:id', function(req, res){
  var bokId = req.params.id;
  Allproduct.findByIdAndRemove(bokId, function(err, viewbooks){
      return res.redirect('../categories/viewbooks')
  });
});

router.get('/delete3/:id', function(req, res){
  var eleId = req.params.id;
  Allproduct.findByIdAndRemove(eleId, function(err, viewelec){
      return res.redirect('../categories/viewelec')
  });
});

router.get('/delete4/:id', function(req, res){
  var gamId = req.params.id;

  Allproduct.findByIdAndRemove(gamId, function(err, viewgame){
      return res.redirect('../categories/viewgame')
  });
});

router.get('/delete5/:id', function(req, res){
  var gamiId = req.params.id;

  Allproduct.findByIdAndRemove(gamiId, function(err, viewmgaming){
      return res.redirect('../categories/viewgaming')
  });
});

router.get('/categories/recently-added',function(req,res,next){
   AddProduct.find(function(err,docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0;i<docs.length;i+=chunkSize){
      productChunks.push(docs.slice(i,i+chunkSize));
    }
      res.render('categories/recently-added',{addproducts: productChunks});
   });
});


router.get('/add-to-cart/:id', function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
   Allproduct.findById(productId, function(err, book){
      if (err){
         return res.redirect('/');
      }
      cart.add(book, book.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/books');
    });
});
router.get('/reduce/:id',function(req,res,next){
   var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/add-to-cart2/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Allproduct.findById(productsId, function(err, product){
      if (err){
         return res.redirect('/');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/game');
    });
 });
router.get('/add-to-cart3/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Allproduct.findById(productsId, function(err, electronic){
      if (err){
         return res.redirect('/');
      }
      cart.add(electronic, electronic.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/elec');
    });
 });

router.get('/add-to-cart4/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Allproduct.findById(productsId, function(err, gaming){
      if (err){
         return res.redirect('/');
      }
      cart.add(gaming, gaming.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/gaming');
    });
 });

router.get('/add-to-cart5/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   Allproduct.findById(productsId, function(err, mobile){
      if (err){
         return res.redirect('/');
      }
      cart.add(mobile, mobile.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/mobile');
    });
 });

router.get('/add-to-cart6/:id', function(req,res,next){
    var productsId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    //var cartnew = new Cart(req.session.cart ? req.session.cart: {});
   AddProduct.findById(productsId, function(err, addproduct){
      if (err){
         return res.redirect('/');
      }
      cart.add(addproduct, addproduct.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/categories/recently-added');
    });
 });

router.get('/remove/:id',function(req,res,next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req,res,next){
    if(!req.session.cart) {
        return res.render('shop/shopping-cart', {product: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/shop/admin',async (req,res,next)=>{
  var id = req.query.id;
  var pro = await Allproduct.find({_id:id})
    res.render('shop/admin', {pro:pro[0]});
});

router.get('/shop/updateuser',async (req,res,next)=>{
  var id = req.query.id;
  var use = await User.find({_id:id})
    res.render('shop/updateuser', {use:use[0]});
});
router.get('/shop/updatepro',async (req,res,next)=>{
  var id = req.query.id;
  var pro = await Allproduct.find({_id:id})
    res.render('shop/updatepro', {pro:pro[0]});
});
router.get('/selectaction',async (req,res,next)=>{
    res.render('user/admin1');
});



 /* router.post('/updateuser',function(req,res,next){
  console.log(req.body)
    var adduser = new User({   
      email: req.body.email,
      password: req.body.password,
      type:req.body.type    
    });
    adduser.save(function(err){
      if (err){
        console.log("err")
      }
      else{
      res.redirect('/')
      }
    })
});  */

router.post('/shop/admin',function(req,res,next){
  console.log(req.body)
    var addproduct = new Allproduct({
      category: req.body.category,
      model:req.body.model,
        title: req.body.title,
        imagePath: req.body.imagePath,
        price: parseInt(req.body.price),
        description: req.body.description
    });
    addproduct.save(function(err){
      if (err){
        console.log("err")
      }
      else{
      res.redirect('/')
      }
    })
});

router.post('/shop/updatepro', (req,res,next)=>{
  var proId=req.body.proId
  var category= req.body.category
  var model=req.body.model
    var title= req.body.title
   var imagePath =req.body.imagePath
   var  price = parseInt(req.body.price)
    var description=req.body.description
  var proId = Allproduct.findOne({_id:proId}, (err, pro)=>{
    if(err){
      res.status(500).send()
      return
    }
    if(!pro){
      res.status(404).send()
      return
    }
    
    pro.category= req.body.category
    pro.model=req.body.model
       pro.title= req.body.title
     pro.imagePath =req.body.imagePath
      pro.price = parseInt(req.body.price)
      pro.description=req.body.description
    pro.save((err, pro)=>{
      if(err){
        res.status(500).send()
        return
      }
      if(!pro){
        res.status(404).send()
        return
      }
      console.log(pro.title+" was updated in database")
      res.redirect("/?id="+pro.id)
    })
  })
});

//update user
router.post('/shop/updateuser', (req,res,next)=>{
  var userId = req.body.userId
  var email = req.body.email
  var password = req.body.password
  var type= req.body.type
  var user = User.findOne({_id:userId}, (err, user)=>{
    if(err){
      res.status(500).send()
      return
    }
    if(!user){
      res.status(404).send()
      return
    }
    user.email = email
    user.password = password
    user.type = type
    user.save((err, user)=>{
      if(err){
        res.status(500).send()
        return
      }
      if(!user){
        res.status(404).send()
        return
      }
      console.log(user.email+" was updated in database")
      res.redirect("/categories/viewuser?id="+user.id)
    })
  })
});
/* module.exports.editing = async(req, res)=>{ 
  var pers = await Permission.find()
  var user =  await User.findOne({_id : req.query.id})
  res.render('handle-user', {action: 'editing', activepage: 'user', pers: pers, user: user})
}
module.exports.postEditing = async (req, res)=>{
  var pers = await Permission.find({_id: req.body.per})
  var per = pers[0]
  User.findOne({_id: req.body.userId}, (err, user)=>{
    user.email= req.body.email,
    user.password=req.body.password,
    user.type=req.body.type ,  
      user.permission= {...per}
      if(req.file){
          if(req.file.path!==""){
              user.avatar= "/"+req.file.path
          }
      }
      user.save((err, user)=>{
          if (err){
              res.status(500).send()
              return
          }
          console.log(user.email + " updated in database!")
          res.redirect("/shop/updateuser")
      })
  })
} */

router.get('/checkout',isLoggedIn, function(req,res,next){
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('shop/checkout',{total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout',isLoggedIn,function(req,res,next){
    if(!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);

    var stripe = require("stripe")(
    "sk_test_wBl869tG5uKEqyGzu7xvJi8O"
   );

  stripe.charges.create({
  amount: cart.totalPrice * 100,
  currency: "inr",
  source: req.body.stripeToken, // obtained with Stripe.js
  description: "Test Charge"
}, function(err, charge) {
  if(err){
    req.flash('error', err.message);
    return res.redirect('/checkout');
  }
    var order = new Order({
    user: req.user,
    cart: cart,
    address: req.body.address,
    name: req.body.name,
    paymentId: charge.id
  });
  order.save(function(err,result){
  req.flash('success', 'Successfully bought the product!');
  req.session.cart = null;
  res.redirect('/user/profile');
  });
});
});


module.exports = router;
5
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}