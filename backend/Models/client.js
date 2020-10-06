const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      role:{
          type:String,
          required:true
      },
      progress:{
        type:Number,
       
    },
    notes:{
        type:String,
       
    },
      tasks:
          {
              task_name:{
                  type:String,
              },
              task_body:{
                  type:String,
              },
              task_assigned_date:{
                  type:Date,
              },
              task_deadLine:{
                  type:Date, 
              }
          }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;