import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {
  client:any;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    
  }
 
  onSubmit(form: NgForm){
    this.http.post('http://localhost:3000/api/v2/login_Client', form.value).subscribe(data=>{
      console.log(data)
    this.client=data;
    console.log(this.client._id)
    if(this.client._id){
      this.router.navigate(['/client',this.client._id])
    }
    })
    
  }

}
