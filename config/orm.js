var connection = require("../config/connection.js");
var orm={
    selectAll:function(cb){
        connection.query('SELECT * FROM burgers', function(err,res){
            if(err){
                throw err;
            }
            cb(res);
        })
    },
    insertOne:function(name, cb){
        connection.query("INSERT INTO burgers (burger_name) VALUES ('"+name+"')", function(err,res){
            if(err){
                throw err;
            }
            cb(res)
        })
    },
    updateOne:function(updateid,cb){
        console.log("hit orm updateOne and updateid = " +updateid);
        console.log(updateid);
        connection.query("UPDATE burgers SET ? WHERE ?",[{
            devoured:true
        },{
            id:updateid.name
        }],function(err,res){
            if (err){throw err};
            console.log("got through updateOne, updateid: " +updateid);
            //console.log(res);
            cb(res) 
        })
        
    }
}

module.exports=orm;