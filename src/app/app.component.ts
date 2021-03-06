import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { interval, Observable, Subscription } from 'rxjs';





class PersonImg {
  id: number
  name: string;
  path: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []

})




export class AppComponent implements OnInit {
  form: FormGroup;
  users: PersonImg[] = []
  apiUrl: string = 'https://localhost:44348/'
  userEd: PersonImg = new PersonImg()



  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      id: null, //delete
      name: '', //delete
      uploadedFile: [null]
    })
  }

  ngOnInit() {
    // this.getAll()
  }


  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      uploadedFile: file
    });
    this.form.get('uploadedFile').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    // formData.append("name", this.form.get('name').value);
    formData.append("uploadedFile", this.form.get('uploadedFile').value)
    console.log(this.form.value)



    this.http.post<PersonImg>('https://localhost:44348/api/home', formData)
      .subscribe(res => {
        console.log('POST', res)
        error => console.error(error)
      }
      )





  }

  // Тут будет у нас список 44394 Файловая система


  getAll() {

    this.http.get('https://localhost:44348/api/home').subscribe((res: PersonImg[]) => {
      console.log("GET GetallL", res);
      this.users = res


    },
      error => { console.log(error) }
    )



  }


  editUser(s: PersonImg) {
    this.userEd = s
  }







  save() {

    var formData: any = new FormData();
    formData.append("id", this.form.get('id').value);
    formData.append("name", this.form.get('name').value);
    formData.append("uploadedFile", this.form.get('uploadedFile').value)
    console.log(this.form.value)


    if (this.userEd.id == null) {
      this.http.post('https://localhost:44348/api/home', formData)
        .subscribe((rez: PersonImg) => this.users.push(rez));
    } else {
      this.http.put('https://localhost:44348/api/home/', formData)
        .subscribe(rez => console.log(this.getAll()))

    }
  }



  // ----------------------------------------------------------------------------------------


  Update(user: PersonImg) {
    var formData: any = new FormData();
    formData.append("id", this.form.get('id').value);
    formData.append("name", this.form.get('name').value);
    formData.append("uploadedFile", this.form.get('uploadedFile').value)
    console.log(this.form.value)


    this.http.put(`https://localhost:44348/api/home/${user.id}`, formData).subscribe(res => {
      console.log(res)
    })

  }


  delete(id) {
    this.http.delete(`https://localhost:44348/api/home/${id}`)
  }
}


































