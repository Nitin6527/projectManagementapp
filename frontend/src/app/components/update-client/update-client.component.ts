import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
 public clientId;
 sub;
 public Client:any=[];
  constructor(private route:ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params=>{
      this.clientId=params.get('id');
      console.log(this.clientId);
      this.fetchUser();
    })
  }
  

 
  onSubmit(form: NgForm){
    
    form.value.id=this.clientId;
    form.value.deadLine=new Date(form.value.deadLine);
    if(form.value){
      if(this.http.post(`http://localhost:3000/api/v2/manager/update_task/${this.clientId}`,form.value).subscribe(data=>{
        // console.log(data)
          
      })){
        this.router.navigate(['/manager']);
      }
    }

  }

  private fetchUser(){
    console.log(this.clientId)
    
       this.http.get(`http://localhost:3000/api/v2/manager/update_task/${this.clientId}`).subscribe(data=>{
        //  console.log(data)
         this.Client=data;

         console.log(this.Client)
       })
  }
}
