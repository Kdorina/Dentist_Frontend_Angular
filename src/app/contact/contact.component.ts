import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  currentUser: any;


  form!:FormGroup;
reservations: any;
    constructor(
      private router:Router,
      private resService: ApiService,
      private http:HttpClient,
      private formBuild:FormBuilder){}





    ngOnInit(): void {
      this.form = this.formBuild.group({
        first_name:['', Validators.required],
        email: ['', [Validators.required]],
        phone_number:['', Validators.required],
        res_date:['', Validators.required],
        messages:['', Validators.required],

      })
    }



  reservation(){
    let resData = {
      first_name : this.form.value.first_name,
      email : this.form.value.email,
      phone_number : this.form.value.phone_number,
      res_date : this.form.value.res_date,
      messages : this.form.value.messages,
    }


      this.resService.store(resData).subscribe({
        next: data => {
          /* Swal.fire(
            'Sikeres Foglalás:',
            data.data.first_name ,
            'success'
          );
          this.form.reset(); */
          console.log(data);
        },
        error: err => {
          console.log('sikertelen foglalás')
        }
      });
    }


}

