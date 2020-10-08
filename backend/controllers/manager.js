const Client = require('../Models/client');
const Manager = require('../Models/manager'); 

exports.getTask = (req,res,next)=>{
    
  if(req.params.id){
      Client.find({_id:req.params.id},(err,found)=>{
          if(found&&!err){
              res.json(found)
          }
          else{
              res.json('No Client Found!')
          }
      })
  }else{
    Client.find({},(err,found)=>{
        if(found&&!err){
          res.json(found)
        }
        else{
            res.json('No Client Present!')
        }
    });
  }
};

exports.getManager =(req,res,next)=>{
   Manager.find({},(err,found)=>{
       if(found&&!err){
           res.json(found)
       }
       else{
           res.json('No Manager found!')
       }
   })
}
exports.UpdateTask = (req,res,next)=>{
    const clientId=req.params.id;
    console.log(clientId);
    if(!clientId){
        res.json('No such Client present!')
    }
    else{
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date();
        
        Client.findByIdAndUpdate({_id:clientId},{$set:{tasks:
            {task_name:req.body.task_name,
                task_body:req.body.task_body,
                task_assigned_date:date,
                task_deadLine:req.body.deadLine, 
            }
        }})
        .then(result=>{
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })
    }
};




