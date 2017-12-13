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
        connection.query("INSERT INTO burgers (burger_name) VALUES ("+name+")", function(err,res){
            if(err){
                throw err;
            }
            cb(res)
        })
    },
    updateOne:function(updateid,cb){
        connection.query("UPDATE burgers SET ? WHERE ?"),[{
            devoured:true
        },{
            id:updateid
        }],function(err,res){
            if (err){throw err}
            cb(res) 
        }
        
    }
}

module.exports=orm;