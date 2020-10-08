import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],

})
export class ClientComponent implements OnInit {
  private clientId;
  sub;
  private Client:any;
  constructor(private route:ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params=>{
      this.clientId=params.get('id');
      
      this.fetchPosts();
    })
    
  }
  onSubmit(form: NgForm){
    form.value.id=this.clientId;
    form.value.role="client";
    console.log(form.value);
    this.http.post(`http://localhost:3000/api/v2/client/update_Progress/${this.clientId}`, form.value).subscribe(data=>{
      console.log(data);
      
    });
    window.location.reload();
  }
 
  onfetchData(){
    this.fetchPosts();
  }
 

  private fetchPosts(){
    console.log(this.clientId)
    this.http.get(`http://localhost:3000/api/v2/client/task/${this.clientId}`).subscribe(data=>{
      console.log(data);
      this.Client=data;
      console.log(this.Client.name)     
    })
  }
}
