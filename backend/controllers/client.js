const Client = require('../Models/client');

exports.getTask = (req,res,next)=>{
  var clientId=req.params.id;
  var clientEmail=req.body.email;
  console.log(clientId);
  if(clientId){
    Client.findById({_id:clientId},(err,found)=>{
        if(found&&!err){
             res.json(found);
        }
        else res.send(err);
    })
  }else if(clientEmail){
      Client.find({email:clientEmail},(err,found)=>{
         if(found&!err){
             res.json(found);
         }
         else{
             res.send(err);
         }
      });
  }
};

exports.updateProgress =(req,res,next)=>{
    const clientId=req.params.id;
    console.log(clientId);
    Client.findOneAndUpdate({_id:clientId},{$set:{
        progress:req.body.progress},
        notes:req.body.note
    })
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })
};
