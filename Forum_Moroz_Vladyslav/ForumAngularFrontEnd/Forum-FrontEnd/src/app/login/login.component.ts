import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Email: '',
      Password: ''
    })
  }

  submit(): void {
    this.http.post('https://localhost:44394/api/Auth/Login', this.form.getRawValue(), {
      withCredentials: true,
      responseType: 'text'
    }).subscribe(()=>this.router.navigate(['/']));
  }
}
