const express=require('express');
const path=require('path');
const app=express();

//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


//defining the routes
app.get('/',function (req,res){
    let
      Pro = [
          {
            ProdId: 1001,
            ProName: 'TV',
            ProdPrice:45000

          },
          {
            ProdId: 1002,
            ProName: 'Mobile',
            ProdPrice:34000

          },
          {
            ProdId: 1003,
            ProName: 'laptop',
            ProdPrice:67000

          }
      ];

      res.render('index',{
          title: 'This is Capgemini L&D',
          productdata: Pro
      })

});
//create another route as home
app.get('/home', function (req, res) {
    res.render('home', {
        mydata: 'this is my data for home'
    })
});

//start server
app.listen(2000,function(){
	
	console.log('SERVER is running port no 2000');
});