const User = require('../Models/user');
const Client = require('../Models/client');
const Manager = require('../Models/manager');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.login_Client = (req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
      User.findOne(
        {
          email: req.body.email,
          role: "client"
        }, 
        function(err,user)
        {
          console.log(user);  
            if(err) throw err;
            if(!user)
            {
              res.send({success: false, msg: 'Authentication failed. User not found.'})
            }
            else
            {
              console.log(user);
              bcrypt.compare(req.body.password,user.password, function (err, isMatch)
              {
                if(isMatch&&!err){
                  Client.find({email:user.email},(err,result)=>{
                    if(result.length==1&&!err){
                      res.json(result);
                    }
                    else{
                      var newClient = Client({
                    name: user.name,
                    email: user.email,
                    role: user.role,
                   })
                      newClient.save()
                      .then(data=>{
                        res.json(data);
                      })
                      .catch(err=>{
                        res.json(err);
                      }) 
                    }
                  })
                }
            });
            }
          });
};

exports.login_Manager = (req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
      User.findOne(
        {
          email: req.body.email,
          role: "manager"
        }, 
        function(err,user)
        {
          console.log(user);  
            if(err) throw err;
            if(!user) res.send({success: false, msg: 'Authentication failed. User not found.'});
            else
            {
              console.log(user);
              bcrypt.compare(req.body.password,user.password, function (err, isMatch)
              {
                if(isMatch&&!err){
                Manager.find({email:user.email},(err,result)=>{
                    console.log(result.length)
                  if(result.length==1&&!err){
                    res.json(result);

                  }else if(!err&&result.length==0){
                    var newManager = Manager({
                      name: user.name,
                      email: user.email,
                      role: user.role,
                     })
                        newManager.save()
                        .then(data=>{
                         res.json(data)
                        })
                        .catch(err=>{
                            res.json(err);
                        })
                  }
                  else{
                    res.json(err);
                  }
                }); 
                }
            });
            }
          });
};

exports.signup = (req,res,next)=>{
  console.log(req.body)
  if(req.body.role==='manager'||req.body.role==='client'){
    Manager.find({},(err,found)=>{
       if(found.length>1&&!err){
         res.json("Only one Manager is Allowed!")
       }else{
        User.find({email:req.body.email},(err,found)=>{
          if(err){
            res.json(err);
          }
          else if(found.length>1&&!err){
            res.json("User Already exist")
          }
            else{
              bcrypt.genSalt(saltRounds, function (err, salt)
              {
                if (err) throw err;
                else 
                {
                  bcrypt.hash(req.body.password, salt, function(err, hash)
                  {
                    if(err) throw err;
                    else
                    {
                    var newuser = new User(
                    {
                      name: req.body.name,
                      email: req.body.email,
                      role: req.body.role,
                      password: hash,
                    });
                    
                newuser.save()
                .then(result=>{
                    res.json(result)
                })
                .catch(err=>{
                    throw err;
                })
               }
              })
             }
             })
      
            }
        })
    
      }
    })
  }
  
};


