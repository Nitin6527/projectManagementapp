import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  constructor( private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    form.value.role="manager";
    console.log(form.value);
    if(this.http.post('http://localhost:3000/api/v2/login_Manager', form.value).subscribe(data=>{
     console.log(data);
    })){
      this.router.navigate(['/manager']);
    }
  }

}
