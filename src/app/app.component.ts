import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';


export class User{
  constructor(public name: string,
      public email: string,
      public phone: string){}
}

@Component({
  selector: 'my-app',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // user: User = new User("", "", "");
  //   addUser(){
  //       console.log(this.user);
  //   }
  myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({

            "userName": new FormControl("Tom", Validators.required),
            "userEmail": new FormControl("", [
                                Validators.required,
                                Validators.email
                            ]),
            "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
        });
      }

      submit(){
          console.log(this.myForm);
      }
}
