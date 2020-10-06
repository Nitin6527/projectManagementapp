import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/Operators';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
 
  Employee:any=[];
  Manager:any;
  newID:any;
  private id:String;
  private NotDelivered=false;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onKey(event: any) { // without type info
    this.id = event.target.value;
    this.newID=this.id;
    console.log(this.newID)

  }

  onfetchData(){
    this.fetchPosts();
  }
  onSubmit(form: NgForm){
    form.value.id=this.id;
    if(this.id){
      this.router.navigate(['/updateClient',this.id])
    }
  }

  private fetchPosts(){
    
    this.http.get('http://localhost:3000/api/v2/manager/task')
    .subscribe(posts=>{
      this.Employee = posts;
      if(this.Employee.tasks.task_assigned_date==this.Employee.tasks.task_deadLine){
        this.NotDelivered=true;
      }
     
    })
    this.http.get('http://localhost:3000/api/v2/manager/manager_Info')
    .subscribe(posts=>{
      this.Manager=posts;
      
    })
  }
}
