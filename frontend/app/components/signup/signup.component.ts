import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  
})

export class SignupComponent implements OnInit {

  constructor( private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    if(form.value.role==="client"){
      if(this.http.post('http://localhost:3000/api/v2/signup', form.value).subscribe(data=>{
        console.log(data)
      if(data==="User Already exist"){
        this.router.navigate(['/']);
      }
      })){
        this.router.navigate(['/login_client'])
      }
    }else{
      if(this.http.post('http://localhost:3000/api/v2/signup', form.value).subscribe(data=>{
        console.log(data);
        if(data==="User Already exist"||data==="Only one Manager is Allowed!"){
          window.location.reload();
        }
        })){
        this.router.navigate(['/login_manager']);
        }
    }
    
  }
  

}
