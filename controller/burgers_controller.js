var express=require('express');
var burger=require('../models/burger.js');
var router =express.Router();

router.get('/',function(req,res){
    res.redirect('/burgers');
})

router.get('/burgers', function (req,res){
    burger.all(function (data) {
        var hbsObject={burgers:data};
        console.log(hbsObject);
        res.render('index',hbsObject);
    });
});

router.put('/api/burgers/:id',function(req,res){
    console.log("you hit the put command");
    var name=req.params.id;
    console.log(name);
    burger.update({name},function(result){
        console.log(result);
        //console.log(result.OkPacket)
        console.log(result.affectedRows)
        //console.log(result.OkPacket.affectedRows)
        if (result.affectedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
            console.log("finally?");
          //res.redirect('/');
          res.status(200).end();
        }
    })
})

router.post('/api/burgers', function(req,res){
    burger.create(req.body.name, function(result){
        res.json({id:result.insertID})
    })
})

module.exports=router; 